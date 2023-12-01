<script>
	// Components
	import { Form } from '$components';
	import { animateScroll } from 'svelte-scrollto-element';

	// Variables
	let services = ['Living Trust', 'Living Will', 'Power of Attorney', 'Living Trust'];
	let defaultService = 'Estate Planning';

	// Meta
	let pageTitle = 'Connie Chadwick Law | Estate Planning';
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

<section class="relative bg-brandDarkBlue pt-32 lg:pt-16 pb-0">
	<img src="/ccl_name.png" alt="" class="bg_name" />
	<div class="relative container_xl container_padding flex flex-col lg:flex-row items-center">
		<div class="relative w-full lg:w-1/2">
			<h1 class="font-oregon font-medium text-white text-6xl mb-6">
				Help protect your family's future with an estate plan
			</h1>
			<p class="font-montserrat font-normal text-xl text-white mb-6">
				Fill out the form or call me at <a
					class="underline underline-offset-4"
					href="tel:6154172129">615-417-2129</a
				> to get started.
			</p>
			<!-- <p class="font-montserrat font-normal text-black text-xl mb-3">
				Legal services do not need to be complicated or expensive. Let me help walk you through your
				legal needs in a timely manner at a reasonable fee.
			</p> -->
			<div class="flex justify-start lg:justify-start items-center">
				<a
					on:click|preventDefault={() =>
						animateScroll.scrollTo({ element: '#services', duration: 1000, offset: -150 })}
					href="."
					class="btn_hero border border-brandOrange bg-brandOrange text-white hover:bg-brandOrange hover:text-white"
					>View Services</a
				>
			</div>
		</div>
		<div class="relative w-full lg:flex-1 pl-0 lg:pl-28 z-10">
			<div class="translate-y-20"><Form {defaultService} {services} /></div>
		</div>
	</div>
</section>

<!-- <section class="pt-40 pb-40">
	<div class="w-full max-w-screen-xl mx-auto">
		<h1 class="font-oregon font-medium text-5xl text-black w-1/2">
			Help protect your family's future with an estate plan
		</h1>
		<p class="font-montserrat font-normal text-xl text-black">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</p>
	</div>
</section> -->

<section class="relative bg-white pt-44 lg:pt-28 pb-12 lg:pb-28">
	<div class="relative container_lg container_padding">
		<h2
			id="ep_heading"
			class="relative font-oregon font-medium text-black text-3xl lg:text-5xl mb-12 text-center lg:text-left"
		>
			Estate Planning Services
		</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
			<div id="services" class="shadow-xl p-8 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<h3 class="font-oregon font-medium text-black text-3xl text-left mb-3">
					Last Will & Testament
				</h3>

				<p class="font-montserrat font-normal text-black text-sm text-left mb-3">
					Decide what happens to your property and who raises your children (subject to court
					approval).
				</p>
				<p class="font-montserrat font-medium text-black text-3xl text-left mb-4">$349</p>

				<!-- <p class="font-montserrat font-bold text-black text-lg mb-4 text-left">From $89</p> -->

				<div class="flex justify-start items-center">
					<a
						href="/estate-planning/last-will"
						class="btn_sm border border-brandOrange bg-transparent font-montserrat hover:border-brandOrange hover:bg-brandOrange text-brandOrange hover:text-white transition-all duration-200"
						>Learn More</a
					>
				</div>
			</div>

			<div class="shadow-xl p-8 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<h3 class="font-oregon font-medium text-black text-3xl text-left mb-3">Living Will</h3>
				<p class="font-montserrat font-normal text-black text-sm text-left mb-3">
					Make your health care wishes known now in case you're unable to communicate them later.
				</p>

				<p class="font-montserrat font-medium text-black text-3xl text-left mb-4">$99</p>

				<!-- <p class="font-montserrat font-bold text-black text-lg mb-4 text-left">From $89</p> -->

				<div class="flex justify-start items-center">
					<a
						href="/estate-planning/living-will"
						class="btn_sm border border-brandOrange bg-transparent font-montserrat hover:border-brandOrange hover:bg-brandOrange text-brandOrange hover:text-white transition-all duration-200"
						>Learn More</a
					>
				</div>
			</div>

			<div class="shadow-xl p-8 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<h3 class="font-oregon font-medium text-black text-3xl text-left mb-2">
					Power of Attorney
				</h3>
				<p class="font-montserrat font-normal text-black text-sm text-left mb-3">
					Appoint someone to make health care and/or financial decisions for you in case you're
					incapacitated.
				</p>
				<p class="font-montserrat font-medium text-black text-3xl text-left mb-4">$99</p>
				<!-- <p class="font-montserrat font-bold text-black text-lg mb-4 text-left">From $89</p> -->

				<div class="flex justify-start items-center">
					<a
						href="/estate-planning/power-of-attorney"
						class="btn_sm border border-brandOrange bg-transparent font-montserrat hover:border-brandOrange hover:bg-brandOrange text-brandOrange hover:text-white transition-all duration-200"
						>Learn More</a
					>
				</div>
			</div>

			<div class="shadow-xl p-8 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<h3 class="font-oregon font-medium text-black text-3xl text-left mb-3">Living Trusts</h3>

				<p class="font-montserrat font-normal text-black text-sm text-left mb-3">
					Preserve your assets for your loved ones, provide creditor protection, and help avoid
					additional delays and expenses with the court later by taking control now.
				</p>
				<p class="font-montserrat font-medium text-black text-3xl text-left mb-4">$499</p>
				<!-- <p class="font-montserrat font-bold text-black text-lg mb-4 text-left">From $89</p> -->

				<div class="flex justify-start items-center">
					<a
						href="/estate-planning/living-trust"
						class="btn_sm border border-brandOrange bg-transparent font-montserrat hover:border-brandOrange hover:bg-brandOrange text-brandOrange hover:text-white transition-all duration-200"
						>Learn More</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* #ep_heading:after {
		@apply bg-brandOrange;
		position: absolute;
		bottom: -10px;
		left: 0;
		height: 3px;
		width: 75px;
		content: '';
	} */
	.bg_name {
		position: absolute;
		right: 0px;
		bottom: 0;
		opacity: 0.1;
		height: 200px;
	}
</style>
