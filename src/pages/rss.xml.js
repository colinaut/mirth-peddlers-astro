import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
	rss({
		title: "Mirth Peddlers",
		description: "Games, LARPs, and mirthful shenanigans!",
		site: import.meta.env.SITE,
		items: import.meta.glob("./posts/**/*.md"),
	});
