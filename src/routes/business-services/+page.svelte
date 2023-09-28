<script>
	import { Form } from '$components';
	import { animateScroll } from 'svelte-scrollto-element';

	// Variables
	let services = ['DBA', 'LLC', 'Corporation', 'Partnership'];

	// Meta
	let pageTitle = '';
	let pageDescription = '';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<!-- <section class="bg-gray-300 pt-0 b-40">
	<div class="w-full max-w-screen-xl mx-auto flex flex-row items-center">
		<div class="w-1/2">
			<h1 class="font-oregon font-medium text-5xl text-black mb-6">Get down to business</h1>
			<p class="font-montserrat font-normal text-xl text-black mb-4">
				There’s more than one way to officially set up a business. We’re here to help make sense of
				these different structures so you can start on the right path—or scale to the next level.
				We’ll check if your company name is available, and file all the required forms. Together,
				let’s make your business official.
			</p>
			<p class="font-montserrat font-normal text-xl text-black">
				LLC formation starts at <span class="font-bold">$0 + state filing fees</span>. Entity
				startup costs are often tax deductible.
			</p>
		</div>
		<div id="form" class="flex-1 pl-28">
			<div class="translate-y-20"><Form {services} /></div>
		</div>
	</div>
</section> -->

<section class="relative bg-brandDarkBlue pt-32 lg:pt-16 pb-0">
	<img src="/ccl_name.svg" alt="" class="bg_name" />
	<div class="relative container_xl container_padding flex flex-col lg:flex-row items-center">
		<div class="relative w-full lg:w-1/2">
			<h1 class="font-oregon font-medium text-white text-5xl lg:text-6xl mb-6">
				Get down to business
			</h1>
			<p class="font-montserrat font-normal text-white text-xl mb-6">
				There’s more than one way to officially set up a business. We’re here to help make sense of
				these different structures so you can start on the right path—or scale to the next level.
				We’ll check if your company name is available, and file all the required forms. Together,
				let’s make your business official.
			</p>
			<div class="flex justify-start lg:justify-start items-center">
				<a
					on:click|preventDefault={() =>
						animateScroll.scrollTo({ element: '#services', duration: 1000, offset: -140 })}
					href="."
					class="btn_hero border border-brandOrange bg-brandOrange text-white hover:bg-brandOrange hover:text-white"
					>View Services</a
				>
			</div>
		</div>
		<div class="relative w-full lg:flex-1 pl-0 lg:pl-28">
			<div class="translate-y-20"><Form {services} /></div>
		</div>
	</div>
</section>

<section class="pt-44 lg:pt-32 pb-12 lg:pb-28">
	<div class="container_lg container_padding">
		<h2 class="font-oregon font-medium text-3xl lg:text-5xl text-black w-full lg:w-3/4">
			Choose what is right for your business.
		</h2>
		<!-- <p class="font-montserrat font-normal text-black text-lg lg:text-base text-left mb-3">
			Decide what happens to your property and who raises your children.
		</p> -->
		<div id="services" class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
			<div class="shadow-xl p-8 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<div class="flex flex-row justify-between items-end mb-3">
					<h3 class="font-oregon font-medium text-black text-3xl text-left">LLC</h3>
					<p class="font-montserrat font-medium text-black text-base text-left">
						Limited Liability Company
					</p>
				</div>
				<!-- <p class="font-montserrat font-normal text-black text-sm text-left mb-3">
					Start up costs are often tax deductible
				</p> -->
				<p class="font-montserrat font-normal text-black text-base text-left mb-3">
					Going solo or teaming up? Make sure you're not on the hook for business liabilities with
					an LLC.
				</p>
				<p class="font-montserrat font-bold text-sm">What's included:</p>
				<ul class="list-disc pl-4 mb-5">
					<li class="font-montserrat font-light text-sm leading-relaxed">
						Busines formation with State of TN
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						IRS application for Federal ID
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						Open TN Department of Revenue account
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						Application for local business licenses
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">Operation Agreement</li>
				</ul>
				<p class="font-montserrat font-medium text-black text-3xl text-left mb-4">$999</p>

				<div class="flex justify-start items-center">
					<a
						href="/business-services/llc"
						class="btn_sm border border-brandOrange bg-transparent text-brandOrange hover:bg-brandOrange hover:text-white transition-all duration-200"
						>Start my LLC</a
					>
				</div>
			</div>
			<div class="shadow-xl p-8 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<div class="flex flex-row justify-between items-end mb-3">
					<h3 class="font-oregon font-medium text-black text-3xl text-left">DBA</h3>
					<p class="font-montserrat font-medium text-black text-base text-left">
						Doing Business As
					</p>
				</div>
				<p class="font-montserrat font-normal text-black text-base text-left mb-3">
					Create a business identity separate from your personal identity.
				</p>
				<p class="font-montserrat font-bold text-sm">What's included:</p>
				<ul class="list-disc pl-4 mb-5">
					<li class="font-montserrat font-light text-sm leading-relaxed">
						Application for business licenses
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						Application for state sales tax account
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						TN Department of Revenue account (if applicable)
					</li>
				</ul>
				<p class="font-montserrat font-medium text-black text-3xl text-left mb-4">$249</p>
				<div class="flex justify-start items-center">
					<a
						href="/business-services/dba"
						class="btn_sm border border-brandOrange bg-transparent text-brandOrange hover:bg-brandOrange hover:text-white transition-all duration-200"
						>Start my DBA</a
					>
				</div>
			</div>

			<div class="shadow-xl p-8 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<div class="flex flex-row justify-between items-end mb-3">
					<h3 class="font-oregon font-medium text-black text-3xl text-left">Corporation</h3>
					<p class="font-montserrat font-medium text-black text-base text-left">(S or C Corp)</p>
				</div>
				<!-- <p class="font-montserrat font-normal text-black text-sm text-left mb-3">
					Start up costs are often tax deductible
				</p> -->
				<p class="font-montserrat font-normal text-black text-base text-left mb-3">
					Plan to issue shares, go public, or go global? Go further as a corporation.
				</p>
				<p class="font-montserrat font-bold text-sm">What's included:</p>
				<ul class="list-disc pl-4 mb-5">
					<li class="font-montserrat font-light text-sm leading-relaxed">
						Busines formation with State of TN
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						IRS application for Federal ID
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						Open TN Department of Revenue account
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						Application for local business licenses
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">Operation Agreement</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						IRS S-Corp Election ($100 additional fee)
					</li>
				</ul>
				<p class="font-montserrat font-medium text-black text-3xl text-left mb-4">$999</p>
				<div class="flex justify-start items-center">
					<a
						href="/business-services/corporation"
						class="btn_sm border border-brandOrange bg-transparent text-brandOrange hover:bg-brandOrange hover:text-white transition-all duration-200"
						>Start my Corporation</a
					>
				</div>
			</div>

			<div class="shadow-xl p-8 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<div class="mb-3">
					<h3 class="font-oregon font-medium text-black text-3xl text-left">Partnership</h3>
					<p class="font-montserrat font-medium text-black text-base text-left" />
				</div>
				<!-- <p class="font-montserrat font-normal text-black text-sm text-left mb-3">
					Start up costs are often tax deductible
				</p> -->
				<p class="font-montserrat font-normal text-black text-base text-left mb-3">
					Planning a joint venture or have a short-term project with more than one person, a
					partnership may be what you're looking for.
				</p>
				<p class="font-montserrat font-bold text-sm">What's included:</p>
				<ul class="list-disc pl-4 mb-5">
					<li class="font-montserrat font-light text-sm leading-relaxed">
						Business formation with State of TN
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						IRS application for Federal ID
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						Open TN Department of Revenue account
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">
						Application for local business licenses
					</li>
					<li class="font-montserrat font-light text-sm leading-relaxed">Partnership Agreement</li>
				</ul>
				<p class="font-montserrat font-medium text-black text-3xl text-left mb-4">$999</p>
				<div class="flex justify-start items-center">
					<a
						href="/business-services/partnership"
						class="btn_sm border border-brandOrange bg-transparent text-brandOrange hover:bg-brandOrange hover:text-white transition-all duration-200"
						>Start my Partnership</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.bg_name {
		position: absolute;
		right: 100px;
		bottom: 0;
		opacity: 0.1;
		height: 200px;
	}
</style>
