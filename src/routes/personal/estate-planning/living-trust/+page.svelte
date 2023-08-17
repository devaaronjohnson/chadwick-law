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
			Avoid probate court with a living trust
		</h1>
		<p class="font-montserrat font-normal text-xl text-black w-1/2 mb-6">
			Keep your assets with your family and out of the courts. Create your living trust simply and
			affordably—whether that's on your own, or with help from estate planing attorneys in our
			network. Living trusts start at $279.
		</p>
		<a
			href="."
			class="inline-block border border-black bg-black text-white font-montserrat font-medium text-base rounded-full px-6 py-3"
			>Start my living trust</a
		>
	</div>
</section>

<section class="pt-28 pb-28">
	<div class="w-full max-w-screen-xl mx-auto">
		<div class="flex flex-row items-start">
			<div class="flex-1 pr-16">
				<img src="/living_trust.jpg" alt="Last will and testament" class="w-full" />
			</div>
			<div class="w-1/2">
				<h2 class="font-oregon font-medium text-4xl text-black">What is a living trust?</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					A living trust, also known as a revocable living trust or inter vivos trust, is a legal
					arrangement that allows an individual (the "grantor" or "settlor") to place their assets,
					such as property, investments, and other valuable possessions, into a trust during their
					lifetime. The grantor can act as the trustee of the living trust, managing the assets as
					they normally would, while also retaining the ability to make changes or even revoke the
					trust altogether if they wish.
				</p>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					The main purpose of a living trust is to facilitate the efficient and private transfer of
					assets to beneficiaries upon the grantor's death, without the need for probate court
					proceedings. Probate is a legal process through which a deceased person's assets are
					distributed and their debts are settled, which can be time-consuming, expensive, and open
					to public scrutiny. By placing assets in a living trust, the grantor can potentially avoid
					probate and provide a smoother transition of assets to their chosen beneficiaries.
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
				<p class="font-montserrat font-normal text-base mb-2 text-black mb-5">
					It's important to note that while living trusts offer advantages, they also come with
					certain complexities and costs, including the initial setup of the trust and ongoing
					maintenance. Consulting with legal and financial professionals is essential when
					considering whether a living trust is the right choice for your individual circumstances.
				</p>
				<!-- {/if} -->
			</div>
		</div>
	</div>
</section>
