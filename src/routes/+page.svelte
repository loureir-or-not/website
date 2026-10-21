<script lang="ts">
	import pfp from '#lib/assets/pfp.png';
</script>

<svelte:head>
	<title>loureir-or-not</title>
	<meta name="description" content="This is the homepage for loureir-or-not's website." />
</svelte:head>

<section id="hero" class="flex w-full flex-col justify-center gap-4 md:flex-row">
	<div id="hero-text" class="flex flex-col gap-2">
		<h1>Renato Loureiro - he/him</h1>
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
<section class="flex flex-col gap-4">
    <h2>My projects</h2>
    <div class="flex flex-col gap-4 md:grid md:grid-cols-3">
	<div class="project">
	    <h3>website</h3>
	    <p>This is what you are currently looking at. It is written in Svelte and TypeScript, using Content Collections and mdsvex.</p>
	    <div class="flex gap-2">
		<p>
		    <a href="https://github.com/loureir-or-not/website">GitHub</a>
		</p>
	    </div>
	</div>
	<div class="project">
	    <h3>sget</h3>
	    <p>Fetch program written in Haskell, written as a task to avoid as much IO as possible while still making a usable program.</p>
	    <div class="flex gap-2">
		<p>
		    <a href="https://github.com/loureir-or-not/sget">GitHub</a>
		</p>
	    </div>
	</div>
	<div class="project">
	    <h3>college-monorepo</h3>
	    <p>Contains projects I was working on for college, has some C# stuff but is pretty desolate otherwise.</p>
	    <div class="flex gap-2">
		<p>
		    <a href="https://github.com/loureir-or-not/college-monorepo">GitHub</a>
		</p>
	    </div>
	</div>
    </div>
</section>
