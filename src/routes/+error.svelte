<script lang="ts">
	import { page } from '$app/state';
</script>

<section class="flex size-full flex-col items-center justify-center">
	{#if page.status == 404}
		<h1>Can't find the page you are looking for.</h1>
		<p>Maybe this page doesn't exist?</p>
	{:else}
		<h1>Got {page.status}'d.</h1>
		<p>No idea what error you got -- {page.error.message}</p>
	{/if}
</section>
