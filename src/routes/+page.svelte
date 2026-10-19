<script lang="ts">
	import pfp from '#lib/assets/pfp.png';
</script>

<svelte:head>
	<title>loureir-or-not</title>
	<meta name="description" content="This is the homepage for loureir-or-not's website." />
</svelte:head>

<section id="hero" class="flex w-full flex-col justify-center gap-4 md:flex-row">
	<div id="hero-text" class="flex flex-col gap-2">
		<h1>renato loureiro - he/him</h1>
		<p>
			I'm an autistic Portuguese person, enthusiastic about computers and creativity in general.
		</p>
		<p>
			I develop software, write documentation and contribute to open source software. I'm
			particularly interested in Fedora Linux, GNOME and Python.
		</p>
		<p>
			My website here serves various purposes. One is to provide my contact information, two is to
			provide more about me, and finally I also have a blog here which I may write to.
		</p>
		<p>I'm currently being taken up by college, so I won't do much with my blog until then.</p>
	</div>
	<div id="hero-photo" class="min-w-fit p-4">
		<img src={pfp} alt="loureir-or-not" width="256" height="256" class="rounded-sm" />
	</div>
</section>
