"""Checks that every indexable page has a unique primary keyword (first item of meta keywords)
and that its words appear in the title, H1 and meta description. Usage: python3 -I scripts/audit-keywords.py"""
import os, re, html, collections
D = "dist"
STOP = {"and", "the", "a", "of", "to", "in", "for", "on", "what", "does", "this", "how", "why", "is"}
def words(s): return [w for w in re.findall(r"[a-z0-9]+", s.lower().replace("’", "'").replace("'", "")) if w not in STOP]
def stem(w):
    for suf in ("ings", "ing", "es", "s"):
        if w.endswith(suf) and len(w) - len(suf) >= 3: return w[: -len(suf)]
    return w
def covers(kw, text):
    t = {stem(w) for w in words(text)}
    return all(stem(w) in t for w in words(kw))
pages = []
for root, _, fs in os.walk(D):
    for f in fs:
        if not f.endswith(".html"): continue
        p = os.path.join(root, f); s = open(p, encoding="utf-8").read(); head = s.split("</head>")[0]
        if 'content="noindex' in head: continue
        url = p[len(D):-10] if p.endswith("/index.html") else p[len(D):]
        g = lambda rx, src=head: (lambda m: html.unescape(m.group(1)) if m else "")(re.search(rx, src, re.S))
        kws = [k.strip() for k in g(r'name="keywords" content="([^"]*)"').split(",") if k.strip()]
        h1 = re.sub(r"<[^>]+>", "", g(r"<h1[^>]*>(.*?)</h1>", s))
        pages.append(dict(url=url, kw=kws, title=g(r"<title>(.*?)</title>"), desc=g(r'name="description" content="([^"]*)"'), h1=h1))
issues = collections.defaultdict(list)
prim = collections.Counter()
for pg in pages:
    if not pg["kw"]: issues["no keywords"].append(pg["url"]); continue
    k = pg["kw"][0]; prim[k.lower()] += 1
    if not covers(k, pg["title"]): issues["primary not in title"].append(f'{pg["url"]} [{k}] {pg["title"]}')
    if not covers(k, pg["h1"]) and pg["url"] != "/": issues["primary not in H1"].append(f'{pg["url"]} [{k}] {pg["h1"]}')
    # Descriptions answer the question, so "means"/"meaning" is optional there.
    if not covers(re.sub(r"\s+meaning$", "", k), pg["desc"]): issues["primary not in description"].append(f'{pg["url"]} [{k}]')
dups = [k for k, n in prim.items() if n > 1]
if dups: issues["duplicate primary keyword"] = [f"{k}: " + ", ".join(p["url"] for p in pages if p["kw"] and p["kw"][0].lower() == k) for k in dups]
print(f"{len(pages)} indexable pages, {len(prim)} distinct primary keywords")
for k, v in issues.items(): print(f"[{len(v)}] {k}:"); [print("   ", x) for x in v[:12]]
if not issues: print("ALL GOOD")
