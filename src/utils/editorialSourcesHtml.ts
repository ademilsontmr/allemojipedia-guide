import { sourceLinkRel, type EditorialSource } from "@/data/editorialMeta";

export const renderEditorialSourcesHtml = (
  sources: EditorialSource[],
  escapeHtml: (value: string) => string,
  options?: { title?: string; intro?: string }
) => {
  const title = options?.title ?? "Editorial review and sources";
  const intro =
    options?.intro ??
    "We cite primary emoji standards and reference encyclopedias so meanings stay grounded in Unicode and real-world usage.";
  const primary = sources.filter((s) => s.kind !== "further-reading");
  const further = sources.filter((s) => s.kind === "further-reading");

  const renderList = (items: EditorialSource[]) =>
    items
      .map((source) => {
        const rel = sourceLinkRel(source);
        const relAttr = rel ? ` rel="${escapeHtml(rel)}"` : "";
        return `<li><a href="${escapeHtml(source.url)}"${relAttr} target="_blank">${escapeHtml(source.name)}</a></li>`;
      })
      .join("");

  return `
      <section>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(intro)}</p>
        ${primary.length ? `<h3>Primary standards</h3><ul>${renderList(primary)}</ul>` : ""}
        ${further.length ? `<h3>Further reading</h3><ul>${renderList(further)}</ul>` : ""}
      </section>`;
};
