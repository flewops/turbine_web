import { useEffect, useState } from "react";
import { parseDocsMarkdown, type ParsedDocs } from "../lib/parseDocsMarkdown";
import { resolveDocsBase, type DocsIndex } from "../data/docsSource";

interface RemoteState<T> {
  /** URL this result belongs to — anything else means "still loading". */
  url: string | null;
  data: T | null;
  error: string | null;
}

interface RemoteResult<T> {
  data: T | null;
  loading: boolean;
  /** "not-found" when the file doesn't exist, otherwise a readable message. */
  error: string | null;
  reload: () => void;
}

/** Fetches `url` and parses the body; re-fetches whenever the URL changes. */
function useRemote<T>(url: string | null, parse: (text: string, url: string) => T): RemoteResult<T> {
  const [state, setState] = useState<RemoteState<T>>({ url: null, data: null, error: null });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!url) return;
    let cancelled = false;

    fetch(url, { cache: "no-cache" })
      .then(async (res) => {
        if (!res.ok) throw new Error(res.status === 404 ? "not-found" : `Request failed (${res.status})`);
        return res.text();
      })
      .then((text) => {
        if (!cancelled) setState({ url, data: parse(text, url), error: null });
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ url, data: null, error: err.message || "Request failed" });
      });

    return () => {
      cancelled = true;
    };
    // `parse` is a module-level function at every call site.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, tick]);

  const current = url !== null && state.url === url;
  return {
    data: current ? state.data : null,
    loading: url !== null && !current,
    error: current ? state.error : null,
    reload: () => {
      setState({ url: null, data: null, error: null });
      setTick((t) => t + 1);
    },
  };
}

/** Base URL of the docs files (pinned to the latest commit); null until resolved. */
function useDocsBase() {
  const [base, setBase] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    resolveDocsBase().then((b) => {
      if (!cancelled) setBase(b);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  return base;
}

const parseIndex = (text: string): DocsIndex => {
  const json = JSON.parse(text) as Partial<DocsIndex>;
  if (!Array.isArray(json.versions)) throw new Error("versions.json is missing a \"versions\" list");
  return { versions: json.versions.filter((v) => v && typeof v.id === "string").map((v) => ({ ...v, apps: v.apps ?? [] })) };
};

/**
 * Rewrites links/images in a docs file:
 * - `crm.md`, `../1.1/index.md` → in-site routes (/resources?version=…&app=…)
 * - other relative paths (images) → absolute URLs next to the file
 */
function docsUrlResolver(fileUrl: string) {
  // Docs files live at <base>/<version>/<file>.md
  const base = fileUrl.replace(/\/[^/]+\/[^/]+$/, "");
  return (url: string, kind: "link" | "image") => {
    if (/^([a-z][a-z\d+.-]*:|#|\/)/i.test(url)) return url; // absolute, anchor or site path
    const absolute = new URL(url, fileUrl).href;

    if (kind === "link") {
      const [path, hash = ""] = absolute.split("#");
      const match = path.startsWith(base + "/") && path.slice(base.length + 1).match(/^([^/]+)\/([^/]+)\.md$/);
      if (match) {
        const [, version, file] = match;
        const params = new URLSearchParams({ version });
        if (file !== "index") params.set("app", file);
        return `/resources?${params}${hash ? `#${hash}` : ""}`;
      }
    }
    return absolute;
  };
}

const parseDoc = (text: string, url: string): ParsedDocs =>
  parseDocsMarkdown(text, { resolveUrl: docsUrlResolver(url) });

/** Loads `versions.json` from the docs repo. */
export function useDocsIndex() {
  const base = useDocsBase();
  const remote = useRemote(base ? `${base}/versions.json` : null, parseIndex);
  return { ...remote, loading: remote.loading || base === null };
}

/** Loads one markdown file (`<version>/<file>.md`) from the docs repo; pass null to skip. */
export function useDocs(path: string | null) {
  const base = useDocsBase();
  const remote = useRemote(base && path ? `${base}/${path}` : null, parseDoc);
  return { ...remote, loading: remote.loading || (path !== null && base === null) };
}
