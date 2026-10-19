import type { PageLoad } from './$types';
import { allPosts } from 'content-collections';

export const load: PageLoad = () => {
	return {
		posts: allPosts.filter((post) => post.published)
	};
};
