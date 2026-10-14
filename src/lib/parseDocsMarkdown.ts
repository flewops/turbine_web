export interface DocsBlock {
  type:
    | "p"
    | "h3"
    | "h4"
    | "ul"
    | "ol"
    | "table"
    | "code"
    | "hr"
    | "blockquote"
    | "image";
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  language?: string;
  /** Image source (path or URL) */
  src?: string;
  /** Image alt text */
  alt?: string;
  /** Optional title / caption */
  title?: string;
}

export interface DocsArticle {
  id: string;
  title: string;
  blocks: DocsBlock[];
}

export interface DocsSection {
  id: string;
  title: string;
  articles: DocsArticle[];
  /** Blocks that appear before the first ### in a section */
  intro: DocsBlock[];
}

export interface ParsedDocs {
  title: string;
  description: string;
  sections: DocsSection[];
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function uniqueId(base: string, used: Set<string>): string {
  let id = base || "section";
  let n = 2;
  while (used.has(id)) {
    id = `${base}-${n++}`;
  }
  used.add(id);
  return id;
}

/** Only allow safe link targets; anything else (e.g. javascript:) becomes inert. */
function safeHref(href: string): string {
  return /^(https?:|mailto:|tel:|\/|#)/i.test(href) ? href : "#";
}

/**
 * Minimal inline markdown: **bold**, *italic*, `code`, [links](url).
 * Site-relative links (starting with "/") are marked data-internal so the
 * renderer can route them without a full page load.
 */
export function renderInline(text: string): string {
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label: string, href: string) => {
    const url = safeHref(href);
    return url.startsWith("/")
      ? `<a href="${url}" class="docs-link" data-internal>${label}</a>`
      : `<a href="${url}" class="docs-link" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // italic: single * not part of **
  html = html.replace(/(^|[^*])\*([^*]+)\*(?![*])/g, "$1<em>$2</em>");
  return html;
}

/** Match markdown image: ![alt](src "optional title") or ![alt](src) */
const IMAGE_RE = /^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/;

function isTableSeparator(line: string | undefined): boolean {
  if (!line) return false;
  const t = line.trim();
  // Must look like | --- | :---: | ---: |
  return /^\|?[\s:|-]+\|[\s:|-]*\|?$/.test(t) && /-+/.test(t);
}

function isTableRow(line: string | undefined): boolean {
  if (!line) return false;
  const t = line.trim();
  if (!t.includes("|")) return false;
  if (t.startsWith("#") || t.startsWith("```") || t.startsWith(">")) return false;
  if (IMAGE_RE.test(t)) return false;
  return true;
}

function splitTableRow(row: string): string[] {
  return row
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

function parseBlocks(lines: string[]): DocsBlock[] {
  const blocks: DocsBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    if (trimmed === "---" || trimmed === "***") {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // Image on its own line: ![alt](path) or ![alt](path "title")
    const imageMatch = trimmed.match(IMAGE_RE);
    if (imageMatch) {
      blocks.push({
        type: "image",
        alt: imageMatch[1] || "",
        src: imageMatch[2],
        title: imageMatch[3] || imageMatch[1] || "",
      });
      i++;
      continue;
    }

    // HTML <img ...> fallback
    const htmlImg = trimmed.match(
      /^<img\s+[^>]*src=["']([^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?[^>]*\/?>$/i
    );
    if (htmlImg) {
      const altMatch = trimmed.match(/alt=["']([^"']*)["']/i);
      const titleMatch = trimmed.match(/title=["']([^"']*)["']/i);
      blocks.push({
        type: "image",
        src: htmlImg[1],
        alt: altMatch?.[1] || "",
        title: titleMatch?.[1] || altMatch?.[1] || "",
      });
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push({ type: "h3", text: trimmed.slice(4).trim() });
      i++;
      continue;
    }

    if (trimmed.startsWith("#### ")) {
      blocks.push({ type: "h4", text: trimmed.slice(5).trim() });
      i++;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const language = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // closing ```
      blocks.push({ type: "code", text: codeLines.join("\n"), language });
      continue;
    }

    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "blockquote", text: quoteLines.join(" ") });
      continue;
    }

    // GFM table: header row + separator row with dashes
    if (isTableRow(trimmed) && isTableSeparator(lines[i + 1])) {
      const headers = splitTableRow(trimmed);
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i]) && !isTableSeparator(lines[i])) {
        rows.push(splitTableRow(lines[i]));
        i++;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    // Unordered list
    if (/^[-*+]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*+]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*+]\s+/, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // Skip top-level # and ## (handled by section parser)
    if (trimmed.startsWith("#")) {
      i++;
      continue;
    }

    // Paragraph — gather consecutive non-empty non-special lines
    const para: string[] = [trimmed];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith("```") &&
      !lines[i].trim().startsWith(">") &&
      !IMAGE_RE.test(lines[i].trim()) &&
      !/^<img\s/i.test(lines[i].trim()) &&
      !/^[-*+]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      !(isTableRow(lines[i]) && isTableSeparator(lines[i + 1])) &&
      lines[i].trim() !== "---" &&
      lines[i].trim() !== "***"
    ) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }

  return blocks;
}

/**
 * Parse a docs markdown file into navigable sections.
 * - `# Title` → document title
 * - First paragraphs before any `##` → description
 * - `## Section` → sidebar section
 * - `### Article` → subsection cards within a section
 *
 * Supported blocks inside articles:
 * paragraphs, lists, GFM tables, images `![alt](src)`, code fences,
 * blockquotes, horizontal rules, #### headings.
 */
export interface ParseDocsOptions {
  /** Rewrites link and image targets, e.g. to resolve paths relative to the file. */
  resolveUrl?: (url: string, kind: "link" | "image") => string;
}

export function parseDocsMarkdown(markdown: string, options: ParseDocsOptions = {}): ParsedDocs {
  const { resolveUrl } = options;
  if (resolveUrl) {
    markdown = markdown
      .replace(/(!?)\[([^\]]*)\]\(([^)\s]+)/g, (_, bang: string, label: string, url: string) =>
        `${bang}[${label}](${resolveUrl(url, bang ? "image" : "link")}`
      )
      .replace(/(<img\s[^>]*src=["'])([^"']+)/gi, (_, prefix: string, url: string) => prefix + resolveUrl(url, "image"));
  }
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const usedIds = new Set<string>();

  let title = "Documentation";
  const preamble: string[] = [];
  const sections: DocsSection[] = [];

  let currentSection: DocsSection | null = null;
  let currentArticle: DocsArticle | null = null;
  let buffer: string[] = [];

  const flushBuffer = () => {
    if (!buffer.length) return;
    const blocks = parseBlocks(buffer);
    buffer = [];
    if (!blocks.length) return;

    if (currentArticle) {
      currentArticle.blocks.push(...blocks);
    } else if (currentSection) {
      currentSection.intro.push(...blocks);
    } else {
      // preamble paragraphs become description
      for (const b of blocks) {
        if (b.type === "p" && b.text) preamble.push(b.text);
      }
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    // Document title
    if (trimmed.startsWith("# ") && !trimmed.startsWith("##")) {
      flushBuffer();
      title = trimmed.slice(2).trim();
      continue;
    }

    // Section
    if (trimmed.startsWith("## ") && !trimmed.startsWith("###")) {
      flushBuffer();
      currentArticle = null;
      const sectionTitle = trimmed.slice(3).trim();
      currentSection = {
        id: uniqueId(slugify(sectionTitle), usedIds),
        title: sectionTitle,
        articles: [],
        intro: [],
      };
      sections.push(currentSection);
      continue;
    }

    // Article within section
    if (trimmed.startsWith("### ")) {
      flushBuffer();
      if (!currentSection) {
        currentSection = {
          id: uniqueId("overview", usedIds),
          title: "Overview",
          articles: [],
          intro: [],
        };
        sections.push(currentSection);
      }
      const articleTitle = trimmed.slice(4).trim();
      currentArticle = {
        id: uniqueId(slugify(articleTitle), usedIds),
        title: articleTitle,
        blocks: [],
      };
      currentSection.articles.push(currentArticle);
      continue;
    }

    buffer.push(lines[i]);
  }

  flushBuffer();

  return {
    title,
    description: preamble.join(" "),
    sections,
  };
}
