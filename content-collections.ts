import { defineCollection, defineConfig } from '@content-collections/core';
import { z } from 'zod';

const posts = defineCollection({
	name: 'posts',
	directory: 'src/content/posts',
	include: '**/*.md',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.iso.date(),
		published: z.boolean().optional().default(true),
		content: z.string()
	}),
	transform: (doc) => ({
		...doc,
		slug: doc._meta.path
	})
});

export default defineConfig({
	content: [posts]
});
