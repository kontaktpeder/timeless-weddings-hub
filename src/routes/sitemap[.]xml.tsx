import { createFileRoute } from "@tanstack/react-router";
import { site } from "../data/site";

const pages = ["/", "/galleri"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = pages
          .map(
            (path) => `  <url>
    <loc>${site.domain}${path}</loc>
    <changefreq>${path === "/" ? "monthly" : "weekly"}</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml" },
        });
      },
    },
  },
});
