import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { apps } from "./src/data/apps";
import { industries } from "./src/data/industries";
import { company } from "./src/data/company";

const staticRoutes = ["/", "/apps", "/industries", "/pricing", "/features", "/resources", "/about", "/contact"];

/** Emits dist/sitemap.xml from the route list and the app/industry data, so it never drifts from the site. */
function sitemap(): Plugin {
  return {
    name: "turbine-sitemap",
    apply: "build",
    generateBundle() {
      const routes = [
        ...staticRoutes,
        ...apps.map((a) => `/apps/${a.id}`),
        ...industries.map((i) => `/industries/${i.id}`),
      ];
      const urls = routes.map((r) => `  <url>\n    <loc>${company.website}${r}</loc>\n  </url>`).join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap()],
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000,
  },
});
