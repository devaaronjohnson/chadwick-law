<script>
	// Booleans
	let showDetails = false;

	// Meta
	let pageTitle = '';
	let pageDescription = '';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<section class="pt-40 pb-40 bg-gray-200">
	<div class="w-full max-w-screen-xl mx-auto">
		<h1 class="font-oregon font-medium text-5xl text-black w-1/2 mb-5">
			Let a living will speak for you when you can't.
		</h1>
		<p class="font-montserrat font-normal text-xl text-black w-1/2 mb-6">
			Take control of your health care with a living will that takes minutes to complete. Need legal
			help? Schedule a call with our network attorneys today. Living will starts at $39.
		</p>
		<a
			href="."
			class="inline-block border border-black bg-black text-white font-montserrat font-medium text-base rounded-full px-6 py-3"
			>Start my living will</a
		>
	</div>
</section>

<section class="pt-28 pb-28">
	<div class="w-full max-w-screen-xl mx-auto">
		<div class="flex flex-row items-start">
			<div class="flex-1 pr-16">
				<img src="/living_will.jpg" alt="Last will and testament" class="w-full" />
			</div>
			<div class="w-1/2">
				<h2 class="font-oregon font-medium text-4xl text-black">What is a living will?</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					A living will, also known as an advance healthcare directive or advance directive, is a
					legal document that outlines an individual's preferences and wishes regarding medical
					treatment in case they become unable to communicate or make decisions about their medical
					care. It serves as a way to ensure that a person's medical treatment aligns with their
					personal values and beliefs, even when they are no longer able to express their wishes due
					to illness, injury, or incapacitation.
				</p>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					It's important to note that laws and regulations around living wills vary by jurisdiction,
					so it's advisable to consult legal counsel or relevant resources in your area to ensure
					that your living will is properly executed and recognized. Creating a living will provides
					peace of mind to individuals and their loved ones by ensuring that medical decisions are
					made in accordance with their wishes and values, even when they cannot express them
					directly.
				</p>
				<!-- <a on:click|preventDefault={() => (showDetails = !showDetails)} href="."
					>Show {showDetails ? 'less' : 'more'}</a
				> -->
				<!-- {#if showDetails} -->
				<!-- <ol class="list-decimal mb-5 pl-5 mt-5">
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
				</ol> -->
				<!-- <p class="font-montserrat font-normal text-base mb-2 text-black mb-5">
					It's important to note that while living trusts offer advantages, they also come with
					certain complexities and costs, including the initial setup of the trust and ongoing
					maintenance. Consulting with legal and financial professionals is essential when
					considering whether a living trust is the right choice for your individual circumstances.
				</p> -->
				<!-- {/if} -->
			</div>
		</div>
	</div>
</section>
