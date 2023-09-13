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
			Protect your finances with a durable power of attorney.
		</h1>
		<p class="font-montserrat font-normal text-xl text-black w-1/2 mb-6">
			In your absence, choose someone you trust to be present. Have questions? Schedule a call with
			our network attorneys for advice. POA starts at $35.
		</p>
		<a
			href="."
			class="inline-block border border-black bg-black text-white font-montserrat font-medium text-base rounded-full px-6 py-3"
			>Start my POA</a
		>
	</div>
</section>

<section class="pt-28 pb-28">
	<div class="w-full max-w-screen-xl mx-auto">
		<div class="flex flex-row items-start">
			<div class="flex-1 pr-16">
				<img src="/power_of_attorney.jpg" alt="Last will and testament" class="w-full" />
			</div>
			<div class="w-1/2">
				<h2 class="font-oregon font-medium text-4xl text-black">
					What is a power of attorney (POA)?
				</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					A power of attorney (POA) is a legal document that grants someone, known as an "agent" or
					"attorney-in-fact," the authority to act on behalf of another person, known as the
					"principal." The principal delegates specific powers to the agent, allowing them to make
					decisions and take actions on matters outlined in the document. The scope of these powers
					can vary widely based on the language and terms specified in the power of attorney
					document.
				</p>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					Creating a power of attorney involves specific legal requirements and varies by
					jurisdiction. It's important for both the principal and the agent to fully understand the
					responsibilities and limitations outlined in the document. In some cases, legal advice may
					be sought to ensure that the power of attorney accurately reflects the principal's
					intentions and complies with applicable laws.
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
