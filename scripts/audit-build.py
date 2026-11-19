"""SEO audit of dist/. Usage: python3 -I scripts/audit-build.py"""
import os, re, html, collections
D = "dist"; BASE = "https://allemojipedia.com"
locs = re.findall(r"<loc>(.*?)</loc>", open(f"{D}/sitemap.xml").read())
info = {}
for root, _, fs in os.walk(D):
    for f in fs:
        if not f.endswith(".html"): continue
        p = os.path.join(root, f); rel = p[len(D):]
        url = rel[:-10] if rel.endswith("/index.html") else rel
        s = open(p, encoding="utf-8").read(); head, body = s.split("</head>", 1)
        g = lambda rx: (lambda m: html.unescape(m.group(1)) if m else None)(re.search(rx, head, re.S))
        main = re.search(r"<main.*?</main>", body, re.S).group(0)
        text = re.sub(r"<script.*?</script>|<[^>]+>", " ", main, flags=re.S)
        info[url] = dict(title=g(r"<title>(.*?)</title>"), desc=g(r'name="description" content="([^"]*)"'),
            robots=g(r'name="robots" content="([^"]*)"') or "", can=g(r'rel="canonical" href="([^"]*)"'),
            h1=len(re.findall(r"<h1[\s>]", body)), words=len(text.split()), links=set(re.findall(r'href="(/[^"#?]*)"', body)),
            ld="application/ld+json" in s, bytes=len(s.encode()), js=len(re.findall(r"<script[^>]+src=", s)))
idx = [u for u, i in info.items() if "noindex" not in i["robots"]]
sm = [l.replace(BASE, "") for l in locs]
print("pages", len(info), "| indexable", len(idx), "| sitemap", len(sm))
print("sitemap not on disk:", [p for p in sm if p not in info][:5])
print("sitemap noindex:", [p for p in sm if p in info and "noindex" in info[p]["robots"]][:5])
print("indexable missing from sitemap:", [u for u in idx if u not in sm][:5])
print("canonical != self:", [u for u in idx if info[u]["can"] != BASE + u][:5])
for k in ("title", "desc"):
    c = collections.Counter(info[u][k] for u in idx); print(f"duplicate {k}:", [(x, n) for x, n in c.items() if n > 1][:5])
print("title > 65:", sorted([(len(info[u]["title"]), u) for u in idx if len(info[u]["title"]) > 65], reverse=True)[:8])
print("desc outside 120-165:", [(u, len(info[u]["desc"] or "")) for u in idx if not 120 <= len(info[u]["desc"] or "") <= 165][:8])
print("h1 != 1:", [u for u in idx if info[u]["h1"] != 1][:5], "| no JSON-LD:", [u for u in idx if not info[u]["ld"]][:5])
w = sorted(info[u]["words"] for u in idx); print("words p10/p50/p90:", w[len(w)//10], w[len(w)//2], w[len(w)*9//10], "| thinnest:", sorted((info[u]["words"], u) for u in idx)[:6])
inl = collections.Counter(); broken = collections.Counter(); tonoidx = collections.Counter()
for u in idx:
    for l in info[u]["links"]:
        inl[l] += 1
        if l not in info and not re.search(r"\.(png|ico|xml|txt|json)$", l): broken[l] += 1
        elif l in info and "noindex" in info[l]["robots"] and l != "/search/": tonoidx[l] += 1
print("broken internal links:", broken.most_common(8))
print("links to noindex (excl. search):", tonoidx.most_common(5))
print("orphans:", [u for u in idx if inl[u] == 0 and u != "/"][:8])
n = sorted(inl[u] for u in idx); print("inlinks p10/p50:", n[len(n)//10], n[len(n)//2], "| pages with <3 inlinks:", sum(1 for u in idx if inl[u] < 3))
b = sorted(info[u]["bytes"] for u in idx); print("HTML bytes p50/max:", b[len(b)//2], b[-1], "| external script files per page max:", max(info[u]["js"] for u in idx))
