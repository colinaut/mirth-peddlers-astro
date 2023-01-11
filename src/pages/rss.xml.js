import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = async () => {
	const feed = await rss({
		title: "Mirth Peddlers",
		description: "Games, LARPs, and mirthful shenanigans!",
		site: import.meta.env.SITE,
        stylesheet: "/pretty-feed-v3.xsl"
		items: posts.map((post) => {
			return {
				link: post.url,
				title: post.frontmatter.title,
				pubDate: post.frontmatter.pubDate,
				description: post.frontmatter.description,
				content: sanitizeHtml(post.compiledContent()),
			};
		}),
	});

	console.log(feed);

	return feed;
};
