/** Parse a markdown pipe table block into rows (header + body). */
export const parseMarkdownTable = (block: string): string[][] | null => {
  const lines = block
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) return null;
  if (!lines.every((line) => line.startsWith("|") && line.endsWith("|"))) return null;

  const rows = lines
    .filter((line) => !/^\|[\s\-:|]+\|$/.test(line))
    .map((line) =>
      line
        .slice(1, -1)
        .split("|")
        .map((cell) => cell.trim())
    );

  return rows.length >= 2 ? rows : null;
};

export const renderMarkdownTableHtml = (
  rows: string[][],
  renderCell: (text: string) => string
): string => {
  const [header, ...body] = rows;
  const thead = `<thead><tr>${header.map((cell) => `<th>${renderCell(cell)}</th>`).join("")}</tr></thead>`;
  const tbody = `<tbody>${body
    .map(
      (row) =>
        `<tr>${row.map((cell, colIndex) => `<td class="${colIndex === 0 ? "emoji-col" : ""}">${renderCell(cell)}</td>`).join("")}</tr>`
    )
    .join("")}</tbody>`;

  return `<div class="blog-table-wrap"><table class="blog-table">${thead}${tbody}</table></div>`;
};
