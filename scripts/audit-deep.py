"""Deep SEO/HTML audit of dist/. Usage: python3 -I scripts/audit-deep.py"""
import os, re, json, html, collections
from html.parser import HTMLParser
D = "dist"; BASE = "https://allemojipedia.com"
issues = collections.defaultdict(list)
types = collections.Counter()

class P(HTMLParser):
    def __init__(s):
        super().__init__(); s.ids = []; s.heads = []; s.stack = []; s.imgs_noalt = 0; s.empty_links = 0; s.a = None
        s.btn_noname = 0; s.btn = None; s.landmarks = collections.Counter(); s.ext_nofollow = 0; s.ext = []; s.cur_h = None; s.htext = ""
    def handle_starttag(s, t, a):
        a = dict(a)
        if "id" in a: s.ids.append(a["id"])
        if t in ("h1", "h2", "h3", "h4", "h5", "h6"): s.cur_h = t; s.htext = ""
        if t == "img" and not a.get("alt") and a.get("alt") != "": s.imgs_noalt += 1
        if t in ("main", "nav", "header", "footer", "article", "aside"): s.landmarks[t] += 1
        if t == "a": s.a = [a, ""]
        if t == "button": s.btn = [a, ""]
    def handle_data(s, d):
        if s.cur_h: s.htext += d
        if s.a: s.a[1] += d
        if s.btn: s.btn[1] += d
    def handle_endtag(s, t):
        if t == s.cur_h: s.heads.append((t, s.htext.strip())); s.cur_h = None
        if t == "a" and s.a:
            at, txt = s.a
            if not txt.strip() and not at.get("aria-label"): s.empty_links += 1
            h = at.get("href", "")
            if h.startswith("http") and not h.startswith(BASE): s.ext.append(h)
            s.a = None
        if t == "button" and s.btn:
            at, txt = s.btn
            if not txt.strip() and not at.get("aria-label"): s.btn_noname += 1
            s.btn = None

pages = []
for root, _, fs in os.walk(D):
    for f in fs:
        if f.endswith(".html"):
            p = os.path.join(root, f); rel = p[len(D):]; url = rel[:-10] if rel.endswith("/index.html") else rel
            pages.append((url, open(p, encoding="utf-8").read()))
ext_all = collections.Counter()
for url, s in pages:
    noindex = 'content="noindex' in s
    head = s.split("</head>")[0]
    if not re.search(r'<html lang="en"', s): issues["no lang"].append(url)
    for tag in ['name="viewport"', 'property="og:title"', 'property="og:description"', 'property="og:image"', 'property="og:url"', 'name="twitter:card"', 'rel="canonical"', 'name="description"', 'charset="utf-8"']:
        if tag not in head: issues[f"missing {tag}"].append(url)
    og = re.search(r'property="og:url" content="([^"]*)"', head); can = re.search(r'rel="canonical" href="([^"]*)"', head)
    if og and can and og.group(1) != can.group(1): issues["og:url != canonical"].append(url)
    t = html.unescape(re.search(r"<title>(.*?)</title>", head).group(1))
    p = P(); p.feed(s)
    h1 = [h for h in p.heads if h[0] == "h1"]
    if len(h1) != 1: issues["h1 count != 1"].append(url)
    lv = [int(h[0][1]) for h in p.heads]
    for a, b in zip(lv, lv[1:]):
        if b > a + 1: issues["heading level skipped"].append(f"{url} h{a}->h{b}"); break
    if any(not h[1] for h in p.heads): issues["empty heading"].append(url)
    dup = [i for i, n in collections.Counter(p.ids).items() if n > 1]
    if dup: issues["duplicate ids"].append(f"{url} {dup[:3]}")
    if p.imgs_noalt: issues["img without alt"].append(url)
    if p.empty_links: issues["link without text"].append(url)
    if p.btn_noname: issues["button without name"].append(url)
    if p.landmarks["main"] != 1: issues["main landmark != 1"].append(url)
    for e in p.ext: ext_all[e] += 1
    # JSON-LD
    for blk in re.findall(r'<script type="application/ld\+json">(.*?)</script>', s, re.S):
        try: data = json.loads(blk)
        except Exception as ex: issues["invalid JSON-LD"].append(f"{url} {ex}"); continue
        for node in data.get("@graph", [data]):
            ty = node.get("@type"); types[ty] += 1
            if ty in ("Article", "BlogPosting"):
                for k in ("headline", "datePublished", "dateModified", "author", "image", "publisher"):
                    if k not in node: issues[f"{ty} missing {k}"].append(url)
                if len(node.get("headline", "")) > 110: issues[f"{ty} headline > 110"].append(url)
            if ty == "FAQPage":
                qs = node.get("mainEntity", [])
                if not qs: issues["FAQPage empty"].append(url)
                # FAQ text must be visible on the page
                for q in qs:
                    if q["name"] not in html.unescape(re.sub(r"<script.*?</script>", "", s, flags=re.S)): issues["FAQ question not visible"].append(f"{url} {q['name'][:40]}")
            if ty == "BreadcrumbList":
                items = node["itemListElement"]
                if [i["position"] for i in items] != list(range(1, len(items) + 1)): issues["breadcrumb positions"].append(url)
                if items[-1]["item"] != (can.group(1) if can else None): issues["breadcrumb last != canonical"].append(url)
    if not noindex and "BreadcrumbList" not in s and url != "/": issues["indexable page without breadcrumbs"].append(url)
    if len(t) < 25: issues["short title"].append(f"{url} {t}")
print(f"{len(pages)} pages audited\nschema types: {dict(types)}")
print("external links:", ext_all.most_common(10))
if not issues: print("NO ISSUES")
for k, v in sorted(issues.items(), key=lambda x: -len(x[1])): print(f"[{len(v)}] {k}: {v[:4]}")
