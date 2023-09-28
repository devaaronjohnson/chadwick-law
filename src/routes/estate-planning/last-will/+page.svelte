<script>
	import { Form } from '$components';
	import { animateScroll } from 'svelte-scrollto-element';

	// Booleans
	let showDetails = false;

	// Variables
	let services = ['Last Will', 'Living Will', 'Living Trust', 'Power of Attorney'];
	let defaultService = 'Last Will';

	// Meta
	let pageTitle = '';
	let pageDescription = '';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<!-- <section class="pt-40 pb-40 bg-gray-200">
	<div class="container_xl container_padding">
		<h1 class="font-oregon font-medium text-5xl text-black w-1/2 mb-5">
			Protect your family with a last will and testament
		</h1>
		<p class="font-montserrat font-normal text-xl text-black w-1/2 mb-6">
			Build your last will and testament from the comfort of your home in under 15 minutes. Get
			access to step-by-step help from experienced attorneys. Last wills start at $89.
		</p>
		<a
			href="."
			class="inline-block border border-black bg-black text-white font-montserrat font-medium text-base rounded-full px-6 py-3"
			>Start my last will</a
		>
	</div>
</section> -->

<section class="relative bg-brandDarkBlue pt-32 lg:pt-16 pb-0">
	<img src="/ccl_name.png" alt="" class="bg_name" />
	<div class="relative container_xl container_padding flex flex-col lg:flex-row items-center">
		<div class="relative w-full lg:w-1/2">
			<h1 class="font-oregon font-medium text-white text-5xl lg:text-6xl mb-3 lg:mb-6">
				Protect your family with a last will and testament
			</h1>
			<p class="font-montserrat font-normal text-xl text-white mb-6">
				Build your last will and testament from the comfort of your home in under 15 minutes. Get
				access to step-by-step help from experienced attorneys. Last wills start at $89.
			</p>
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
			<!-- <div class="flex justify-start lg:justify-start items-center">
				<a
					href="."
					class="btn_hero border border-brandOrange bg-brandOrange text-white hover:bg-brandOrange hover:text-white"
					>Get Started</a
				>
			</div> -->
		</div>
		<div id="form" class="relative w-full lg:flex-1 pl-0 lg:pl-28">
			<div class="translate-y-20"><Form {defaultService} {services} /></div>
		</div>
	</div>
</section>

<section class="pt-40 lg:pt-32 pb-12 lg:pb-28">
	<div class="container_xl">
		<div class="flex flex-col lg:flex-row items-start">
			<div class="w-full lg:flex-1 pr-0 lg:pr-16 mb-8 lg:mb-0">
				<img
					src="/family_last_will.jpg"
					alt="Last will and testament"
					class="hidden lg:block w-full"
				/>
				<img
					src="/family_last_will_mobile.png"
					alt="Last will and testament"
					class="block lg:hidden w-full"
				/>
			</div>
			<div class="w-full lg:w-1/2 container_padding">
				<h2 class="font-oregon font-medium text-3xl lg:text-4xl text-black mb-1 lg:mb-0">
					What is a last will and testament?
				</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					A last will and testament, commonly referred to as a "will," is a legal document that
					outlines a person's wishes and instructions regarding the distribution of their assets,
					properties, and possessions after their death. It serves as a means to ensure that a
					person's wishes are carried out and that their property is distributed according to their
					desires. A will typically includes the following components:
				</p>
				<!-- <a on:click|preventDefault={() => (showDetails = !showDetails)} href="."
					>Show {showDetails ? 'less' : 'more'}</a
				> -->
				<!-- {#if showDetails} -->
				<ol class="list-decimal mb-5 pl-5 mt-5">
					<li class="font-montserrat font-normal text-base mb-2">
						<span class="font-bold">Executor</span>: The person responsible for carrying out the
						instructions outlined in the will. This individual is often appointed by the person
						creating the will and is responsible for managing the distribution of assets, paying
						debts and taxes, and handling any other administrative tasks.
					</li>
					<li class="font-montserrat font-normal text-base mb-2">
						<span class="font-bold">Beneficiaries</span>: These are the individuals or entities who
						are designated to receive specific assets or portions of the estate according to the
						terms of the will. Beneficiaries can include family members, friends, charities, or
						other organizations.
					</li>
					<li class="font-montserrat font-normal text-base mb-2">
						<span class="font-bold">Assets and Property</span>: The will specifies which assets and
						properties are to be distributed and to whom. This can include real estate, financial
						accounts, personal belongings, and more.
					</li>
					<li class="font-montserrat font-normal text-base mb-2">
						<span class="font-bold">Guardianship</span>: If the person creating the will has minor
						children, the will can also specify who will become the legal guardian of these children
						in the event of their death.
					</li>
					<li class="font-montserrat font-normal text-base mb-2">
						<span class="font-bold">Debts and Taxes</span>: The will may include instructions for
						how any outstanding debts, expenses, and taxes are to be paid from the estate before
						distribution to beneficiaries.
					</li>
					<li class="font-montserrat font-normal text-base mb-2">
						<span class="font-bold">Residual Clause</span>: Also known as a "residuary clause," this
						portion of the will addresses the distribution of any remaining assets that are not
						explicitly mentioned earlier in the document.
					</li>
					<li class="font-montserrat font-normal text-base mb-2">
						<span class="font-bold">Witnesses and Legal Requirements</span>: Wills are subject to
						legal requirements that vary by jurisdiction. Generally, the will must be signed by the
						person creating the will (the testator) and witnessed by a specific number of
						individuals who are not beneficiaries and are not otherwise closely related to the
						testator.
					</li>
				</ol>
				<p class="font-montserrat font-normal text-base mb-2 text-black mb-5">
					It's important to note that laws and regulations related to wills can vary significantly
					from one jurisdiction to another. Due to these legal complexities, it's advisable to
					consult with a legal professional or an estate planning attorney when creating or
					modifying a will to ensure that it accurately reflects your wishes and adheres to the
					relevant legal requirements.
				</p>
				<!-- {/if} -->
			</div>
		</div>
		<div class="flex justify-start lg:justify-start items-center mt-10 container_padding">
			<a
				on:click|preventDefault={() =>
					animateScroll.scrollTo({ element: '#form', duration: 1000, offset: -50 })}
				href="."
				class="btn_hero border border-brandOrange bg-transparent text-brandOrange hover:bg-brandOrange hover:text-white transition-all duration-200"
				>Start my Last Will</a
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
