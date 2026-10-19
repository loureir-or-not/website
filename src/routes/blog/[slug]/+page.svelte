<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const { post, module } = data;
</script>

<article class="flex flex-col gap-4">
	<header class="flex flex-col gap-2">
		<h1>{post.title}</h1>
		<p>{post.description} - {post.date}</p>
	</header>
	<svelte:component this={module} />
</article>
