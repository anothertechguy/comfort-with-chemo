import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import type { Plugin } from "vite";

// Remove crossorigin attribute from script/link tags in the built HTML.
// GitHub Pages doesn't send Access-Control-Allow-Origin headers, so browsers
// silently block ES modules that have crossorigin="anonymous" set.
function removeCrossorigin(): Plugin {
  return {
    name: "remove-crossorigin",
    apply: "build",
    transformIndexHtml(html: string) {
      return html
        .replace(/<script([^>]*?) crossorigin([^>]*)>/g, "<script$1$2>")
        .replace(/<link([^>]*?) crossorigin([^>]*)>/g, "<link$1$2>");
    },
  };
}

export default defineConfig({
  base: "/comfort-with-chemo/",
  resolve: {
    alias: { "@": "/src" },
  },
  build: {
    modulePreload: false,
  },
  plugins: [
    react(),
    tailwindcss(),
    removeCrossorigin(),
  ],
});
