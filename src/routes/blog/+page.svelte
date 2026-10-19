<script lang="ts">
	import type { PageProps } from './$types';
	import { resolve } from '$app/paths';

	let { data }: PageProps = $props();
</script>

<section class="flex flex-col gap-4">
	<p>
		Welcome to my blog. Here you can find a selection of posts from my newest to my oldest. Look at
		the newest ones because the old ones might be bad.
	</p>
	{#each data.posts as post (post.slug)}
		<div class="blog-entry">
			<h2><a href={resolve(`/blog/${post.slug}`)}>{post.title}</a></h2>
			<p>{post.description} - {post.date}</p>
		</div>
	{/each}
</section>
