<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import { resolve } from '$app/paths';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="w-full p-4">
	<nav class="flex items-center justify-center gap-4">
		<p><a href={resolve('/')}>Home</a></p>
		<p><a href={resolve('/blog')}>Blog</a></p>
		<p><a href={resolve('/contact')}>Contact</a></p>
	</nav>
</header>
<main class="flex min-h-screen w-full justify-center p-4">
	<div id="content" class="flex flex-col gap-4 w-3xl">
		{@render children()}
	</div>
</main>
<footer class="flex justify-center p-3">
	<p>
		<a href="https://github.com/loureir-or-not/website">
			This project is licenced under the ISC licence. The source code can be found here.
		</a>
	</p>
</footer>
