/**
 * Where the Resources page reads documentation from: a public GitHub repo.
 *
 * Expected layout (one folder per release):
 *
 *   versions.json          ← list of versions, newest first (see DocsVersion)
 *   1.0/index.md           ← overview shown when no app is selected
 *   1.0/crm.md             ← one file per app, named by app id (see data/apps.ts)
 *   1.0/images/…           ← images referenced relatively from the markdown
 *
 * Set VITE_DOCS_BASE_URL to point somewhere else (e.g. a local folder server).
 */
export const docsRepo = {
  owner: "flewops",
  repo: "turbine_resources_docs",
  branch: "main",
};

const rawUrl = (ref: string) => `https://raw.githubusercontent.com/${docsRepo.owner}/${docsRepo.repo}/${ref}`;

let docsBase: Promise<string> | null = null;

/**
 * Base URL for the docs files, pinned to the latest commit on the branch.
 *
 * raw.githubusercontent.com caches files by branch name and some cache nodes
 * can keep serving an old copy after a push. Loading files by commit id gives
 * every push fresh, immutable URLs. One GitHub API call per visit (limit:
 * 60/hour per visitor); if it fails, falls back to the branch URL.
 */
export function resolveDocsBase(): Promise<string> {
  const override = import.meta.env.VITE_DOCS_BASE_URL;
  if (override) return Promise.resolve(override);

  docsBase ??= fetch(`https://api.github.com/repos/${docsRepo.owner}/${docsRepo.repo}/commits/${docsRepo.branch}`, {
    headers: { Accept: "application/vnd.github.sha" },
  })
    .then((res) => (res.ok ? res.text() : Promise.reject(new Error(`GitHub API ${res.status}`))))
    .then((sha) => (/^[0-9a-f]{40}$/.test(sha.trim()) ? rawUrl(sha.trim()) : rawUrl(docsRepo.branch)))
    .catch(() => rawUrl(docsRepo.branch));
  return docsBase;
}

/** Link to the repo itself, for "edit on GitHub". */
export const DOCS_REPO_URL = `https://github.com/${docsRepo.owner}/${docsRepo.repo}`;

export interface DocsVersion {
  /** Folder name in the repo, e.g. "v2.0". */
  id: string;
  /** Display name; defaults to id. */
  label?: string;
  /** Release date, e.g. "2026-09-01". */
  released?: string;
  /** App ids that have a <id>.md file in this version's folder. */
  apps: string[];
}

export interface DocsIndex {
  /** Newest first — the first entry is selected by default. */
  versions: DocsVersion[];
}

