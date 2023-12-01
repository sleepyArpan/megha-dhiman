import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const { SITE_DOMAIN } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: SITE_DOMAIN,
  integrations: [tailwind()],
});
