<script>
	import { Form } from '$components';
	import { animateScroll } from 'svelte-scrollto-element';

	// Variables
	let services = [
		'Purchase Contracts',
		'Leases',
		'Land Contracts',
		'Liens',
		'Warranties',
		'Builder Forms'
	];

	// Booleans
	let showDetails = false;

	// Meta
	let pageTitle = 'Connie Chadwick Law | Real Estate';
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
			<h1 class="font-oregon font-medium text-white text-5xl lg:text-6xl mb-3 lg:mb-6">
				Navigate your own real estate investments.
			</h1>
			<p class="font-montserrat font-normal text-xl text-white mb-6">
				Our real estate contracts will help you manage your real estate investments and make plans
				for your future with our comprehensive purchase agreements, lease agreements, and TN
				disclosures. Protect your investments today and have peace of mind about the future.
			</p>
			<!-- <p class="font-montserrat font-normal text-black text-xl mb-3">
				Legal services do not need to be complicated or expensive. Let me help walk you through your
				legal needs in a timely manner at a reasonable fee.
			</p> -->
			<!-- <div class="flex justify-start lg:justify-start items-center">
				<a
					href="."
					class="btn_hero border border-brandOrange bg-brandOrange text-white hover:bg-brandOrange hover:text-white"
					>Get Started</a
				>
			</div> -->
			<p class="font-montserrat font-normal text-xl text-white">
				Fill out the form or call me at <a
					class="underline underline-offset-4"
					href="tel:6154172129">615-417-2129</a
				> to get started.
			</p>
		</div>
		<div id="form" class="relative w-full lg:flex-1 pl-0 lg:pl-28">
			<div class="translate-y-20"><Form {services} /></div>
		</div>
	</div>
</section>

<section class="pt-40 lg:pt-32 pb-12 lg:pb-28">
	<div class="container_xl container_padding">
		<div class="grid grid-cols-1 gap-8 mb-10 lg:mb-16">
			<div>
				<h2 class="font-oregon font-medium text-5xl text-black mb-4">Real Estate Services</h2>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-2 w-3/4">
					<div class="flex flex-row items-center">
						<i class="fa-solid fa-caret-right text-2xl text-brandOrange mr-2" />
						<div>
							<p class="font-montserrat font-light text-2xl text-black">
								Purchase Contracts/TN Disclosures
							</p>
						</div>
					</div>
					<div class="flex flex-row items-center">
						<i class="fa-solid fa-caret-right text-2xl text-brandOrange mr-2" />
						<div>
							<p class="font-montserrat font-light text-2xl text-black">Leases</p>
						</div>
					</div>
					<div class="flex flex-row items-center">
						<i class="fa-solid fa-caret-right text-2xl text-brandOrange mr-2" />
						<div>
							<p class="font-montserrat font-light text-2xl text-black">Land Contracts</p>
						</div>
					</div>
					<div class="flex flex-row items-center">
						<i class="fa-solid fa-caret-right text-2xl text-brandOrange mr-2" />
						<div>
							<p class="font-montserrat font-light text-2xl text-black">Liens</p>
						</div>
					</div>
					<div class="flex flex-row items-center">
						<i class="fa-solid fa-caret-right text-2xl text-brandOrange mr-2" />
						<div>
							<p class="font-montserrat font-light text-2xl text-black">Warranties</p>
						</div>
					</div>
					<div class="flex flex-row items-center">
						<i class="fa-solid fa-caret-right text-2xl text-brandOrange mr-2" />
						<div>
							<p class="font-montserrat font-light text-2xl text-black">Builder Contracts</p>
						</div>
					</div>
				</div>
				<!-- <p class="font-montserrat font-normal text-base text-black mb-5">
					A limited liability company (LLC) is a type of business entity you can register in your
					state. The main purpose of an LLC company is to limit the personal liability of its
					owners—like a corporation—but it also allows the business to operate with simpler, more
					flexible tax requirements.
				</p> -->
			</div>
			<!-- <div>
				<h2 class="font-oregon font-medium text-4xl text-black">Do I need an LLC?</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					An LLC isn’t always required, but many small business owners form an LLC for personal
					liability protection. Having an LLC can also help you open bank accounts, enter into
					contracts, hire employees, and get necessary business licenses and permits.
				</p>
			</div> -->
		</div>

		<div class="flex justify-start lg:justify-start items-center mt-10 container_padding">
			<a
				on:click|preventDefault={() =>
					animateScroll.scrollTo({ element: '#form', duration: 1000, offset: -50 })}
				href="."
				class="btn_hero border border-brandOrange bg-brandOrange text-white hover:bg-brandOrange hover:text-white"
				>Get Real Estate Help</a
			>
		</div>
	</div>
</section>

<style>
	.bg_name {
		position: absolute;
		left: 0px;
		bottom: 0;
		opacity: 0.1;
		height: 200px;
	}
</style>
