<script>
	import { Form } from '$components';
	import { animateScroll } from 'svelte-scrollto-element';

	// Variables
	let defaultService = 'DBA';
	let services = ['DBA', 'LLC', 'Corporation', 'Partnership'];

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
	<img src="/ccl_name.svg" alt="" class="bg_name" />
	<div class="relative container_xl container_padding flex flex-col lg:flex-row items-center">
		<div class="relative w-full lg:w-1/2">
			<h1 class="font-oregon font-medium text-white text-5xl lg:text-6xl mb-3 lg:mb-6">
				Build your brand with a DBA
			</h1>
			<p class="font-montserrat font-normal text-xl text-white mb-6">
				Whether you’re going solo or looking to expand, your DBA (Doing Business As) can help
				establish your brand, and set your company apart from the competition.
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

<section class="pt-28 pb-28">
	<div class="w-full max-w-screen-xl mx-auto">
		<!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
		</div> -->
		<h2 class="font-oregon font-medium text-4xl text-black mb-8">Why a DBA is important?</h2>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-20">
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">Legally required</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					In most states, it's a must if you don't plan on using your legal name or official company
					name to do business.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">Set up a business bank account</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					You will need a registered DBA if you want to open a business checking or savings account
					under your DBA name.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">Allows you to expand easily</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					If you already have an LLC or corporation, you can rebrand your company to specific market
					segments or different geographical areas.
				</p>
			</div>
		</div>
		<div class="flex justify-start lg:justify-start items-center mt-10">
			<a
				on:click|preventDefault={() =>
					animateScroll.scrollTo({ element: '#form', duration: 1000, offset: -50 })}
				href="."
				class="btn_hero border border-brandOrange bg-transparent text-brandOrange hover:bg-brandOrange hover:text-white transition-all duration-200"
				>Start my DBA</a
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
