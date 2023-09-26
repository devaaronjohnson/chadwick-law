<script>
	import { Form } from '$components';
	import { animateScroll } from 'svelte-scrollto-element';

	// Booleans
	let showDetails = false;

	// Variables
	let defaultService = 'Corporation';
	let services = ['Corporation', 'LLC', 'DBA', 'Partnership'];

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
				Start your corporation on the right path
			</h1>
			<p class="font-montserrat font-normal text-xl text-white mb-6">
				If you want to make your business official—and attract investors—consider a corporation.
				Incorporating your business allows you to be off the hook personally for its debts and
				liabilities. Plus, you can issue shares and raise capital down the line.
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
			<div class="translate-y-20"><Form {services} /></div>
		</div>
	</div>
</section>

<section class="pt-40 lg:pt-32 pb-12 lg:pb-28">
	<div class="container_xl container_padding">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-10 lg:mb-16">
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">What is a corperation?</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					A corporation is a business entity created by filing formation documents with the state, a
					process also known as incorporation.
				</p>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					Just like an LLC, a corporation is a legal entity that is separate from its owners, which
					can protect you from any business liabilities or debts. However, corporations offer other
					important benefits, like shareholders and the ability to seek outside investors.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">
					What are corporation requirements?
				</h2>
				<p class="font-montserrat font-normal text-base text-black">
					Corporations are typically required to adopt by-laws, hold annual shareholder meetings,
					issue written corporate resolutions for significant decisions, and file annual reports.
					Our service allows you to efficiently form your corporation the right way. We also have
					packages with essential documents and services to meet these corporation requirements and
					keep you in compliance.
				</p>
			</div>
		</div>
		<h2 class="font-oregon font-medium text-4xl lg:text-5xl text-black mb-8">
			What are the advantages of a corporation?
		</h2>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-20">
			<div class="relative">
				<!-- <div
					class="number_bg w-20 h-20 rounded-full bg-brandOrange flex justify-center items-center"
				>
					<p class="text-white">1</p>
				</div> -->

				<h2 class="relative font-oregon font-medium text-3xl text-brandOrange">Attact Investors</h2>
				<p class="relative font-montserrat font-normal text-base text-black mb-5">
					Raise funds by appealing to investors who may prefer corporations for the ability to offer
					stock.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-3xl text-brandOrange">Entice employees</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					Attract and keep top talent by offering competitive benefits packages that include shares
					of your company.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-3xl text-brandOrange">Look more official</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					Corporations are often seen as more credible, which can make it easier to do business with
					other companies.
				</p>
			</div>
		</div>

		<div class="flex justify-start lg:justify-start items-center mt-10 container_padding">
			<a
				on:click|preventDefault={() =>
					animateScroll.scrollTo({ element: '#form', duration: 1000, offset: -50 })}
				href="."
				class="btn_hero border border-brandOrange bg-transparent text-brandOrange hover:bg-brandOrange hover:text-white transition-all duration-200"
				>Start my Corporation</a
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
