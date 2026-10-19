import type { PageLoad } from './$types';
import { allPosts } from 'content-collections';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const post = allPosts.find((post) => post.slug == params.slug);
	if (!post) {
		error(404, `Could not find ${params.slug}`);
	}
	const module = await import(`../../../content/posts/${post._meta.filePath}`);
	return {
		post,
		content: module
	};
};
