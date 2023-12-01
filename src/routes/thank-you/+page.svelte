<script>
	// Meta
	let pageTitle = 'Connie Chadwick Law | Thanks for Contacting';
	let pageDescription = '';
	let featuredImage = 'https://conniechadwicklaw.com/featured_image.png';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta
		name="robots"
		content="index, follow max-snippet:-1 max-image-preview:large max-video-preview:-1"
	/>
	<!-- Social -->
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:image" content={featuredImage} />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={featuredImage} />
</svelte:head>

<main class="bg-brandDarkBlue">
	<section>
		<div class="container_md flex flex-col justify-center items-center h-screen">
			<p class="font-oregon font-medium text-white text-5xl text-center leading-tight">
				Thanks for contacting me. I will be in touch within 24 hours.
			</p>
			<div class="flex justify-center items-center mt-8">
				<a
					href="/"
					class="btn_hero border border-brandOrange bg-brandOrange bg-opacity-90 text-white hover:text-white hover:bg-brandOrange hover:text-white transition-all duration-200 hover:bg-opacity-100"
				>
					Back Home
				</a>
			</div>
		</div>
	</section>
</main>
