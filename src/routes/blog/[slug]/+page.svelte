<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const { post, content } = $derived(data);
	const Content = $derived(content.default);
</script>

<svelte:head>
	<title>{post.title} - loureir-or-not's blog</title>
	<meta name="description" content={post.description} />
</svelte:head>

<article class="flex flex-col gap-4">
	<header class="flex flex-col gap-2">
		<h1>{post.title}</h1>
		<p>{post.description} - {post.date}</p>
	</header>
	<Content />
</article>
