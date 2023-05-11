import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
	integrations: [
		sitemap(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
	],
	site: "https://www.mirthpeddlers.com/",
});
