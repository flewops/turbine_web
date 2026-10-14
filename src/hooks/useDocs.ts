import { useEffect, useState } from "react";
import { parseDocsMarkdown, type ParsedDocs } from "../lib/parseDocsMarkdown";

const DOCS_URL = "/docs.md";

interface DocsState {
  docs: ParsedDocs | null;
  loading: boolean;
  error: string | null;
}

interface UseDocsResult extends DocsState {
  reload: () => void;
}

/** Fetches and parses the markdown documentation from `public/docs.md`. */
export function useDocs(url: string = DOCS_URL): UseDocsResult {
  const [state, setState] = useState<DocsState>({
    docs: null,
    loading: true,
    error: null,
  });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;

    fetch(url, { cache: "no-cache" })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Could not load ${url} (${res.status})`);
        return res.text();
      })
      .then((text) => {
        if (cancelled) return;
        setState({ docs: parseDocsMarkdown(text), loading: false, error: null });
      })
      .catch((err: Error) => {
        if (cancelled) return;
        setState({
          docs: null,
          loading: false,
          error: err.message || "Failed to load documentation",
        });
      });

    return () => {
      cancelled = true;
    };
  }, [url, tick]);

  return {
    ...state,
    reload: () => {
      setState((s) => ({ ...s, loading: true, error: null }));
      setTick((t) => t + 1);
    },
  };
}
