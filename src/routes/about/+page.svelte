<script>
	// Meta
	let pageTitle = '';
	let pageDescription = '';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<section class="pt-20 pb-20">
	<div class="w-full max-w-screen-xl mx-auto">
		<h1 class="font-oregon font-medium text-5xl text-black w-1/2">A little bit about Connie</h1>
		<!-- <p class="font-montserrat font-normal text-xl text-black">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</p> -->
	</div>
</section>

<section class="pt-0 pb-28">
	<div class="w-full max-w-screen-xl mx-auto">
		<div class="flex flex-row items-start">
			<div class="w-full lg:flex-1 pr-16">
				<img src="/living_will.jpg" alt="Last will and testament" class="w-full" />
			</div>
			<div class="w-full lg:w-1/2">
				<!-- <h2 class="font-oregon font-medium text-4xl text-black">What is a living will?</h2> -->
				<p class="font-montserrat font-normal text-base text-black mb-5" />
				<p class="font-montserrat font-normal text-base text-black mb-5">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
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
