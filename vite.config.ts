import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";

/**
 * Laster .asset.json-filer (CDN-pekere fra lovable-assets) som JSON-moduler
 * slik at de kan importeres med `import asset from "./fil.png.asset.json"`.
 */
function assetJsonPlugin() {
  return {
    name: "lovable-asset-json",
    enforce: "pre" as const,
    resolveId(id: string) {
      if (id.endsWith(".asset.json")) {
        // Sørg for at Vite kjenner igjen filtypen og ikke prøver å resolve den som en vanlig modul
        return id;
      }
    },
    load(id: string) {
      if (id.endsWith(".asset.json") && fs.existsSync(id)) {
        const content = fs.readFileSync(id, "utf-8");
        return `export default ${content};`;
      }
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [assetJsonPlugin()],
  },
});
