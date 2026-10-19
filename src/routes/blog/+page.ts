import type { PageLoad } from './$types';
import { allPosts } from 'content-collections';

export const load: PageLoad = async () => {
	const posts = allPosts
		.filter((post) => post.published)
		.toSorted((a, b) => Date(b.date) - Date(a.date));
	return {
		posts,
	};
};
