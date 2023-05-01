import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://gabrielnascimento.netlify.app",
  integrations: [tailwind(), robotsTxt(), svelte()],
  output: "server",
  adapter: netlify()
});