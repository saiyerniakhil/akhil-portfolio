import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from "@astrojs/netlify";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  output: "server",
  adapter: netlify()
});