import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://allemojipedia.com",
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "always" },
  compressHTML: true,
});
