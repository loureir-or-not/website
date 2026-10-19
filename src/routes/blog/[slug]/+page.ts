import type { PageLoad } from './$types';
import { allPosts } from 'content-collections';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const posts = await import.meta.glob("../../../content/posts/**/*.md");
	const post = allPosts.find((post) => post.slug == params.slug);
	const path = `../../../content/posts/${post._meta.filePath}`;
	if (!posts[path]) {
		error(404, `Could not find ${params.slug}`);
	}
	const module = posts[path];
	return {
		post,
		content: await module()
	};
};
