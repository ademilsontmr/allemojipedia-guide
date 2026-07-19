import { sourceLinkRel, type EditorialSource } from "@/data/editorialMeta";

type EditorialSourcesProps = {
  sources: EditorialSource[];
  intro?: string;
  title?: string;
};

/** Shared sources block for emoji / context / about pages (visible + crawlable links). */
export const EditorialSources = ({
  sources,
  title = "Editorial review and sources",
  intro = "We cite primary emoji standards and reference encyclopedias so meanings stay grounded in Unicode and real-world usage.",
}: EditorialSourcesProps) => {
  const primary = sources.filter((s) => s.kind !== "further-reading");
  const further = sources.filter((s) => s.kind === "further-reading");

  return (
    <section className="mb-8 p-5 rounded-xl bg-muted/30 border border-border">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-muted-foreground mb-4">{intro}</p>

      {primary.length > 0 && (
        <>
          <h3 className="text-sm font-semibold mb-2 text-foreground">Primary standards</h3>
          <ul className="space-y-2 text-sm mb-4">
            {primary.map((source) => {
              const rel = sourceLinkRel(source);
              return (
                <li key={source.url}>
                  <a
                    href={source.url}
                    className="text-primary hover:underline"
                    {...(rel ? { rel } : {})}
                    target="_blank"
                  >
                    {source.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      )}

      {further.length > 0 && (
        <>
          <h3 className="text-sm font-semibold mb-2 text-foreground">Further reading</h3>
          <ul className="space-y-2 text-sm">
            {further.map((source) => {
              const rel = sourceLinkRel(source);
              return (
                <li key={source.url}>
                  <a
                    href={source.url}
                    className="text-primary hover:underline"
                    {...(rel ? { rel } : {})}
                    target="_blank"
                  >
                    {source.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
};
