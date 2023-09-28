<script>
	import { Form } from '$components';
	import { animateScroll } from 'svelte-scrollto-element';

	// Variables
	let defaultService = 'LLC';
	let services = ['LLC', 'DBA', 'Coporation', 'Partnership'];

	// Booleans
	let showDetails = false;

	// Meta
	let pageTitle = '';
	let pageDescription = '';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<section class="relative bg-brandDarkBlue pt-32 lg:pt-16 pb-0">
	<img src="/ccl_name.png" alt="" class="bg_name" />
	<div class="relative container_xl container_padding flex flex-col lg:flex-row items-center">
		<div class="relative w-full lg:w-1/2">
			<h1 class="font-oregon font-medium text-white text-5xl lg:text-6xl mb-3 lg:mb-6">
				Form your LLC
			</h1>
			<p class="font-montserrat font-normal text-xl text-white mb-6">
				We make launching and growing your business quick, easy, and affordable. Leave it to us to
				check if your company name is available and file all the required forms. Save time and money
				with our free LLC formation service so you can focus on building and growing your business.
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
				Fill out the form to get started!
			</p>
		</div>
		<div id="form" class="relative w-full lg:flex-1 pl-0 lg:pl-28">
			<div class="translate-y-20"><Form {defaultService} {services} /></div>
		</div>
	</div>
</section>

<section class="pt-40 lg:pt-32 pb-12 lg:pb-28">
	<div class="container_xl container_padding">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-10 lg:mb-16">
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">What is an LLC?</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					A limited liability company (LLC) is a type of business entity you can register in your
					state. The main purpose of an LLC company is to limit the personal liability of its
					owners—like a corporation—but it also allows the business to operate with simpler, more
					flexible tax requirements.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">Do I need an LLC?</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					An LLC isn’t always required, but many small business owners form an LLC for personal
					liability protection. Having an LLC can also help you open bank accounts, enter into
					contracts, hire employees, and get necessary business licenses and permits.
				</p>
			</div>
		</div>
		<h2 class="font-oregon font-medium text-4xl lg:text-5xl text-black mb-8">
			3 reasons for creating an LLC
		</h2>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-20">
			<div class="relative">
				<!-- <div
					class="number_bg w-20 h-20 rounded-full bg-brandOrange flex justify-center items-center"
				>
					<p class="text-white">1</p>
				</div> -->

				<h2 class="relative font-oregon font-medium text-3xl text-brandOrange">
					1-Protect your assets
				</h2>
				<p class="relative font-montserrat font-normal text-base text-black mb-5">
					By forming an LLC and keeping your personal finances separate, your personal assets are
					protected from business liabilities.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-3xl text-brandOrange">2-Make things easier</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					Compared to corporations, LLCs are typically easier to start and have simpler rules for
					things like record-keeping.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-3xl text-brandOrange">3-Get tax flexibility</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					You get to decide how you’re taxed—as an LLC or a corporation—to maximize your potential
					savings and minimize tax liability.
				</p>
			</div>
		</div>

		<div class="flex justify-start lg:justify-start items-center mt-10 container_padding">
			<a
				on:click|preventDefault={() =>
					animateScroll.scrollTo({ element: '#form', duration: 1000, offset: -50 })}
				href="."
				class="btn_hero border border-brandOrange bg-transparent text-brandOrange hover:bg-brandOrange hover:text-white transition-all duration-200"
				>Start my LLC</a
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
