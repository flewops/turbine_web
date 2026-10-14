import { Link } from "react-router-dom";
import { company } from "../data/company";
import { footerNav } from "../data/navigation";

export default function Footer() {
  return (
    <footer className="border-t-8 border-primary bg-primary text-secondary">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b-2 border-secondary/20 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/images/logo.png"
              alt={company.name}
              className="h-10 w-auto max-h-10 object-contain object-left brightness-0 invert sm:h-11 sm:max-h-11"
            />
            <p className="mt-8 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
              {company.tagline}
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {[
              { title: "Product", items: footerNav.product },
              { title: "Apps", items: footerNav.categories },
              { title: "Company", items: footerNav.company },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-sm font-bold uppercase tracking-wide text-secondary/75">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="text-base font-medium text-secondary/80 transition hover:text-secondary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm font-medium text-secondary/75">
            © {new Date().getFullYear()} {company.name}
          </p>
          <p className="text-sm font-medium text-secondary/75">
            Privacy policy | Cookies | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
