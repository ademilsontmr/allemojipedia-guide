"""HTML quality audit of the built site (dist/): structure, accessibility and markup problems that the
SEO audits do not look at. Usage, after a build: python3 -I scripts/audit-html.py"""
import collections, html, json, os, re
from html.parser import HTMLParser

D = "dist"
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}
INTERACTIVE = {"a", "button", "input", "select", "textarea", "details", "summary"}


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack, self.ids, self.issues = [], collections.Counter(), []
        self.headings, self.mains, self.h1 = [], 0, 0
        self.link = None  # [attrs, text] of the <a> being read
        self.button = None
        self.labels_for, self.inputs = set(), []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a: self.ids[a["id"]] += 1
        if tag == "main": self.mains += 1
        if re.fullmatch(r"h[1-6]", tag): self.headings.append(int(tag[1])); self.h1 += tag == "h1"
        if tag == "img":
            if "alt" not in a: self.issues.append(f"img without alt: {a.get('src')}")
            if not (a.get("width") and a.get("height")): self.issues.append(f"img without width/height: {a.get('src')}")
        if tag == "a":
            if a.get("target") == "_blank" and "noopener" not in (a.get("rel") or ""): self.issues.append(f"target=_blank without rel=noopener: {a.get('href')}")
            if not a.get("href"): self.issues.append("a without href")
            if any(t in INTERACTIVE - {"details"} for t in self.stack): self.issues.append(f"interactive element nested in another: a in {self.stack[-1]}")
            self.link = [a, ""]
        if tag == "button":
            if "type" not in a: self.issues.append("button without type")
            self.button = [a, ""]
        if tag == "label" and a.get("for"): self.labels_for.add(a["for"])
        if tag in ("input", "select", "textarea") and a.get("type") not in ("hidden", "submit", "button"): self.inputs.append(a)
        if tag not in VOID: self.stack.append(tag)

    def handle_endtag(self, tag):
        if tag == "a" and self.link:
            a, text = self.link
            if not text.strip() and not a.get("aria-label") and a.get("aria-hidden") != "true": self.issues.append(f"link without text: {a.get('href')}")
            self.link = None
        if tag == "button" and self.button:
            a, text = self.button
            if not text.strip() and not a.get("aria-label"): self.issues.append("button without text or aria-label")
            self.button = None
        if tag in self.stack:
            while self.stack and self.stack.pop() != tag: pass

    def handle_data(self, data):
        if self.link: self.link[1] += data
        if self.button: self.button[1] += data


totals, pages = collections.Counter(), 0
examples = collections.defaultdict(list)
for root, _, files in os.walk(D):
    for f in files:
        if not f.endswith(".html"): continue
        path = os.path.join(root, f); url = path[len(D):].replace("index.html", "")
        s = open(path, encoding="utf-8").read(); pages += 1
        p = Page(); p.feed(s)
        found = list(p.issues)
        found += [f"duplicate id: {i}" for i, n in p.ids.items() if n > 1]
        if p.mains != 1: found.append(f"{p.mains} <main> elements")
        if p.h1 != 1: found.append(f"{p.h1} h1")
        for prev, cur in zip(p.headings, p.headings[1:]):
            if cur > prev + 1: found.append(f"heading jumps h{prev} -> h{cur}"); break
        for i in p.inputs:
            if not (i.get("id") in p.labels_for or i.get("aria-label") or i.get("aria-labelledby")): found.append(f"input without label: {i.get('name')}")
        if not re.search(r'<html lang="[a-z]', s): found.append("html without lang")
        head = s.split("</head>")[0]
        for m in ["og:title", "og:description", "og:image", "og:url", "twitter:card", "description"]:
            if m not in head: found.append(f"head missing {m}")
        for ld in re.findall(r'<script type="application/ld\+json">(.*?)</script>', s, re.S):
            try: json.loads(ld)
            except ValueError: found.append("invalid JSON-LD")
        for issue in found:
            key = re.sub(r":.*", "", issue); totals[key] += 1
            if len(examples[key]) < 3: examples[key].append(f"{url} ({issue})")

print(f"{pages} pages audited")
if not totals: print("NO HTML ISSUES")
for k, n in totals.most_common():
    print(f"[{n}] {k}"); [print("    " + e) for e in examples[k]]
