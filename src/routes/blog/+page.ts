import type { PageLoad } from './$types';
import { allPosts } from 'content-collections';

export const load: PageLoad = async () => {
	const posts = allPosts.filter((post) => post.published);
	return {
		posts,
	};
};
