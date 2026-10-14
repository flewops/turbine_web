import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page not found" path="/404" noIndex />
      <div className="flex min-h-[70vh] flex-col items-center justify-center border-b-8 border-primary bg-primary px-5 text-center text-secondary">
        <p className="text-sm font-bold font-display uppercase tracking-[0.1em] text-secondary/75">404</p>
        <h1 className="mt-4 font-display text-6xl font-extrabold tracking-tight">Page not found</h1>
        <p className="mt-4 max-w-md text-secondary/80">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link to="/" className="mt-10 border-2 border-secondary bg-secondary px-7 py-3.5 text-sm font-bold text-primary">
          Back to home
        </Link>
      </div>
    </>
  );
}
