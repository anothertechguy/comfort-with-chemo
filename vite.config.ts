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
  base: "./",
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
