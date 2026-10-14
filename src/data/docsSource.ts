/**
 * Where the Resources page reads documentation from: a public GitHub repo.
 *
 * Expected layout (one folder per release):
 *
 *   versions.json          ← list of versions, newest first (see DocsVersion)
 *   v2.0/index.md          ← overview shown when no app is selected
 *   v2.0/crm.md            ← one file per app, named by app id (see data/apps.ts)
 *   v2.0/images/…          ← images referenced relatively from the markdown
 *
 * Set VITE_DOCS_BASE_URL to point somewhere else (e.g. a local folder server).
 */
export const docsRepo = {
  owner: "flewops",
  repo: "turbine-docs",
  branch: "main",
};

export const DOCS_BASE_URL: string =
  import.meta.env.VITE_DOCS_BASE_URL ??
  `https://raw.githubusercontent.com/${docsRepo.owner}/${docsRepo.repo}/${docsRepo.branch}`;

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

export const docsUrl = (path: string) => `${DOCS_BASE_URL}/${path}`;
