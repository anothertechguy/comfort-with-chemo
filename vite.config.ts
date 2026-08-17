import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import type { Plugin } from "vite";

// Custom plugin to strip crossorigin attributes from built HTML.
// GitHub Pages can have CORS issues loading local modules with crossorigin,
// causing a silent white screen crash on some browsers.
function removeCrossorigin(): Plugin {
  return {
    name: "remove-crossorigin",
    apply: "build",
    transformIndexHtml(html: string) {
      return html
        .replace(/ crossorigin=""/g, "")
        .replace(/ crossorigin/g, "");
    },
  };
}

export default defineConfig({
  // Must be an absolute path (not "./") so the router can derive its basename
  // from BASE_URL. Defaults to a root-domain deploy (Cloudflare); the GitHub
  // Pages project-path demo overrides it via VITE_BASE (see build:ghpages).
  base: process.env.VITE_BASE ?? "/",
  resolve: {
    alias: { "@": "/src" },
  },
  build: {
    outDir: "docs", // Output to docs/ for easy GitHub Pages serving from main branch
    emptyOutDir: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    removeCrossorigin(),
  ],
});
