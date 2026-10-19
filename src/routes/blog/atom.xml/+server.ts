import type { RequestHandler } from './$types';
import { allPosts } from "content-collections";
import MarkdownIt from "markdown-it";

export const GET: RequestHandler = () => {
	const md = new MarkdownIt();
	const posts = allPosts
		.filter((post) => post.published)
		.toSorted((a, b) => Date(b.date) - Date(a.date));
	const feed = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
	<id>https://www.loureir-or-not.is-a.dev/blog</blog>
	<title>loureir-or-not</title>
	<updated>${Date(posts[0].date)}</updated>
	<author>
		<name>Renato Loureiro</name>
		<uri>https://www.loureir-or-not.is-a.dev</uri>
	</author>
	<link rel="self" href="/blog/atom.xml" />
	${posts.map((post) => {
		return `<entry>
		<id>https://www.loureir-or-not.is-a.dev/blog/${post.slug}</id>
		<title>${post.title}</title>
		<updated>${Date(post.date)}</updated>
		<link rel="alternate" href="/blog/${post.slug}" />
		<content type="html">
${md.render(post.content)}
		</content>
	</entry>`;
	})}
</feed>`;
	return new Response(feed);
};
