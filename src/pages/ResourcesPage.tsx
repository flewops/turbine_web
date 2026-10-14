import { useEffect, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import DocsViewer from "../components/DocsViewer";
import Icon from "../components/IconMap";
import { useDocs, useDocsIndex } from "../hooks/useDocs";
import { getAppById } from "../data/apps";
import { DOCS_REPO_URL, docsRepo, type DocsVersion } from "../data/docsSource";

const appName = (id: string) =>
  getAppById(id)?.name ?? id.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const versionLabel = (v: DocsVersion) => v.label ?? v.id;

/**
 * Documentation is read from the GitHub docs repo (see data/docsSource.ts).
 * A release version is always selected (latest by default); picking an app is
 * optional — without one, the version's overview (index.md) is shown.
 * Both live in the URL: /resources?version=v2.0&app=crm
 */
export default function ResourcesPage() {
  const [params, setParams] = useSearchParams();
  const index = useDocsIndex();
  const versions = index.data?.versions ?? [];

  const versionParam = params.get("version");
  const appParam = params.get("app");
  const version = versions.find((v) => v.id === versionParam) ?? versions[0];
  const appAvailable = !!version && !!appParam && version.apps.includes(appParam);
  const docPath = version && (!appParam || appAvailable) ? `${version.id}/${appAvailable ? appParam : "index"}.md` : null;
  const doc = useDocs(docPath);

  // Version is mandatory: put the default (latest) into the URL so links are explicit.
  useEffect(() => {
    if (version && versionParam !== version.id) {
      const next = new URLSearchParams(params);
      next.set("version", version.id);
      setParams(next, { replace: true });
    }
  }, [version, versionParam, params, setParams]);

  const select = (changes: { version?: string; app?: string | null }) => {
    const next = new URLSearchParams(params);
    if (changes.version) next.set("version", changes.version);
    if (changes.app !== undefined) {
      if (changes.app) next.set("app", changes.app);
      else next.delete("app");
    }
    setParams(next);
  };

  const versionsWithApp = appParam ? versions.filter((v) => v.apps.includes(appParam)) : [];
  const title = appAvailable
    ? `${appName(appParam)} documentation`
    : doc.data?.title || "Documentation";
  const githubFile = docPath && `${DOCS_REPO_URL}/blob/${docsRepo.branch}/${docPath}`;

  return (
    <>
      <SEO
        title={appAvailable && version ? `${appName(appParam)} docs ${versionLabel(version)}` : "Resources & Documentation"}
        description={
          doc.data?.description ||
          "Turbine documentation by release — getting started, platform overview, and guides for every app."
        }
        path="/resources"
        keywords="Turbine documentation, ERP documentation, release notes, Turbine app guides, Turbine resources"
      />

      <section className="border-b-8 border-primary bg-primary px-4 py-16 text-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow={version ? `Resources · ${versionLabel(version)}` : "Resources"}
            title={title}
            description={
              doc.data?.description ||
              "Pick a release version, then an app to jump straight to its guide."
            }
            light
            large
          />
        </div>
      </section>

      {/* Version (required) + app (optional) selectors */}
      <div className="border-b-2 border-primary bg-secondary">
        <div className="mx-auto grid max-w-[1600px] gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-[minmax(0,320px)_minmax(0,320px)_1fr] lg:items-end lg:px-8">
          <label className="block">
            <span className="font-display text-xs font-bold uppercase tracking-[0.1em] text-primary/80">
              Release version <span aria-hidden="true">*</span>
            </span>
            <select
              required
              disabled={!versions.length}
              value={version?.id ?? ""}
              onChange={(e) => select({ version: e.target.value })}
              className="mt-2 w-full border-2 border-primary bg-secondary px-3 py-2.5 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {!versions.length && <option value="">Loading versions…</option>}
              {versions.map((v, i) => (
                <option key={v.id} value={v.id}>
                  {versionLabel(v)}
                  {i === 0 ? " (latest)" : ""}
                  {v.released ? ` — ${v.released}` : ""}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="font-display text-xs font-bold uppercase tracking-[0.1em] text-primary/80">
              App <span className="font-sans normal-case tracking-normal text-primary/60">(optional)</span>
            </span>
            <select
              disabled={!version}
              value={appParam ?? ""}
              onChange={(e) => select({ app: e.target.value || null })}
              className="mt-2 w-full border-2 border-primary bg-secondary px-3 py-2.5 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <option value="">All apps — overview</option>
              {appParam && !appAvailable && <option value={appParam}>{appName(appParam)} (not in this version)</option>}
              {[...(version?.apps ?? [])]
                .sort((a, b) => appName(a).localeCompare(appName(b)))
                .map((id) => (
                  <option key={id} value={id}>
                    {appName(id)}
                  </option>
                ))}
            </select>
          </label>

          {githubFile && (
            <a
              href={githubFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 justify-self-start text-sm font-semibold text-primary/80 hover:text-primary lg:justify-self-end lg:pb-3"
            >
              View source on GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {(index.loading || doc.loading) && <Message title="Loading documentation…" />}

      {index.error && (
        <Message
          title="Could not load the list of versions"
          body={`Check that versions.json exists in ${docsRepo.owner}/${docsRepo.repo} on the ${docsRepo.branch} branch.`}
          onRetry={index.reload}
        />
      )}

      {/* App picked that isn't documented in this version */}
      {version && appParam && !appAvailable && (
        <Message
          title={`${appName(appParam)} has no docs in ${versionLabel(version)}`}
          body={
            versionsWithApp.length
              ? "It is documented in these versions:"
              : "Choose another app, or view this version's overview."
          }
        >
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {versionsWithApp.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => select({ version: v.id })}
                className="border-2 border-primary px-4 py-2 text-sm font-bold hover:bg-primary hover:text-secondary"
              >
                {versionLabel(v)}
              </button>
            ))}
            <button
              type="button"
              onClick={() => select({ app: null })}
              className="border-2 border-primary bg-primary px-4 py-2 text-sm font-bold text-secondary"
            >
              {versionLabel(version)} overview
            </button>
          </div>
        </Message>
      )}

      {doc.error && doc.error !== "not-found" && (
        <Message title="Could not load this document" body={doc.error} onRetry={doc.reload} />
      )}
      {doc.error === "not-found" && appAvailable && version && (
        <Message
          title="Document missing"
          body={`versions.json lists ${appName(appParam)} for ${versionLabel(version)}, but ${docPath} was not found in the repo.`}
        />
      )}

      {/* Overview: apps documented in this version */}
      {version && !appParam && !index.loading && version.apps.length > 0 && (
        <section className="border-b-2 border-primary px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1600px]">
            <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-primary/80">
              Apps documented in {versionLabel(version)}
            </p>
            <div className="mt-5 grid pl-[2px] pt-[2px] sm:grid-cols-2 lg:grid-cols-4">
              {[...version.apps]
                .sort((a, b) => appName(a).localeCompare(appName(b)))
                .map((id) => {
                  const app = getAppById(id);
                  return (
                    <Link
                      key={id}
                      to={`/resources?version=${encodeURIComponent(version.id)}&app=${encodeURIComponent(id)}`}
                      className="-ml-[2px] -mt-[2px] flex items-center gap-3 border-2 border-primary p-5 font-display font-extrabold transition-colors hover:bg-primary hover:text-secondary"
                    >
                      {app && (
                        <span className="border-2 border-current p-2">
                          <Icon name={app.icon} className="h-4 w-4" />
                        </span>
                      )}
                      {appName(id)}
                      <ArrowUpRight className="ml-auto h-4 w-4 opacity-60" />
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      )}

      {doc.data && <DocsViewer docs={doc.data} />}

      <CTASection />
    </>
  );
}

function Message({
  title,
  body,
  onRetry,
  children,
}: {
  title: string;
  body?: string;
  onRetry?: () => void;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="font-display text-2xl font-bold">{title}</p>
      {body && <p className="mx-auto mt-2 max-w-xl text-primary/80">{body}</p>}
      {children}
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 border-2 border-primary bg-primary px-6 py-3 text-sm font-semibold text-secondary"
        >
          Try again
        </button>
      )}
    </div>
  );
}
