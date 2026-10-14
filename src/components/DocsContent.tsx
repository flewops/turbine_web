import type { DocsBlock } from "../lib/parseDocsMarkdown";
import { renderInline } from "../lib/parseDocsMarkdown";

interface DocsContentProps {
  blocks: DocsBlock[];
  inverted?: boolean;
}

export default function DocsContent({ blocks, inverted = false }: DocsContentProps) {
  const muted = inverted ? "text-secondary/85" : "text-primary/85";
  const strong = inverted ? "text-secondary" : "text-primary";
  const border = inverted ? "border-secondary/25" : "border-primary/15";
  const codeBg = inverted ? "bg-secondary/10" : "bg-primary/5";
  const tableHead = inverted ? "bg-secondary/10" : "bg-primary/5";
  const tableStripe = inverted ? "bg-secondary/5" : "bg-primary/[0.03]";

  return (
    <div className={`docs-prose space-y-5 text-base leading-relaxed sm:text-[17px] ${muted}`}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={idx}
                className={muted}
                dangerouslySetInnerHTML={{ __html: renderInline(block.text || "") }}
              />
            );
          case "h3":
            return (
              <h3
                key={idx}
                className={`pt-2 font-display text-xl font-extrabold tracking-tight sm:text-2xl ${strong}`}
              >
                {block.text}
              </h3>
            );
          case "h4":
            return (
              <h4 key={idx} className={`pt-1 text-lg font-bold ${strong}`}>
                {block.text}
              </h4>
            );
          case "ul":
            return (
              <ul key={idx} className="list-disc space-y-2 pl-5">
                {(block.items || []).map((item, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: renderInline(item) }}
                  />
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={idx} className="list-decimal space-y-2 pl-5">
                {(block.items || []).map((item, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: renderInline(item) }}
                  />
                ))}
              </ol>
            );
          case "table":
            return (
              <div
                key={idx}
                className={`docs-table-wrap my-2 overflow-x-auto rounded-xl border-2 ${border}`}
              >
                <table className="w-full min-w-[420px] border-collapse text-left text-sm sm:text-[15px]">
                  <thead className={tableHead}>
                    <tr>
                      {(block.headers || []).map((h, hi) => (
                        <th
                          key={hi}
                          className={`border-b-2 px-4 py-3 font-bold ${border} ${strong}`}
                          dangerouslySetInnerHTML={{ __html: renderInline(h) }}
                        />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(block.rows || []).map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 1 ? tableStripe : undefined}>
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`border-b px-4 py-3 align-top ${border}`}
                            dangerouslySetInnerHTML={{ __html: renderInline(cell) }}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "image":
            return (
              <figure
                key={idx}
                className={`docs-figure my-4 overflow-hidden rounded-2xl border-2 ${border}`}
              >
                <img
                  src={block.src}
                  alt={block.alt || block.title || ""}
                  title={block.title || block.alt || undefined}
                  loading="lazy"
                  className="block w-full object-cover"
                />
                {(block.title || block.alt) && (
                  <figcaption
                    className={`border-t-2 px-4 py-3 text-sm ${border} ${
                      inverted ? "bg-secondary/5 text-secondary/80" : "bg-primary/[0.03] text-primary/75"
                    }`}
                  >
                    {block.title || block.alt}
                  </figcaption>
                )}
              </figure>
            );
          case "code":
            return (
              <pre
                key={idx}
                className={`overflow-x-auto rounded-xl border-2 p-4 font-mono text-sm ${border} ${codeBg} ${strong}`}
              >
                <code>{block.text}</code>
              </pre>
            );
          case "blockquote":
            return (
              <blockquote
                key={idx}
                className={`rounded-r-xl border-l-4 pl-4 italic ${
                  inverted ? "border-secondary/40" : "border-primary/30"
                }`}
                dangerouslySetInnerHTML={{ __html: renderInline(block.text || "") }}
              />
            );
          case "hr":
            return <hr key={idx} className={`border-t-2 ${border}`} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
