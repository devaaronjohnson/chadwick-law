<script>
	// Meta
	let pageTitle = '';
	let pageDescription = '';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<section class="pt-40 pb-40">
	<div class="w-full max-w-screen-xl mx-auto">
		<h1 class="font-oregon font-medium text-5xl text-black w-1/2">
			Help protect your family's future with an estate plan
		</h1>
		<!-- <p class="font-montserrat font-normal text-xl text-black">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</p> -->
	</div>
</section>

<section class="bg-gray-200 pt-28 pb-28">
	<div class="w-full max-w-screen-xl mx-auto">
		<h2 class="font-oregon font-medium text-4xl text-black w-1/2">
			Choose what is right for your business.
		</h2>
		<p class="font-montserrat font-normal text-black text-base text-left mb-3">
			Decide what happens to your property and who raises your children.
		</p>
		<div class="grid grid-cols-3 gap-5 mt-10">
			<div class="shadow-xl p-12 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<h3 class="font-oregon font-medium text-black text-3xl text-left mb-3">LLC</h3>
				<p class="font-montserrat font-medium text-black text-base text-left">
					Limited Liability Company
				</p>
				<p class="font-montserrat font-normal text-black text-sm text-left">
					Starts at $0 + filing fees
				</p>
				<p class="font-montserrat font-normal text-black text-sm text-left mb-3">
					Start up costs are often tax deductible
				</p>
				<p class="font-montserrat font-normal text-black text-base text-left mb-3">
					Going solo or teaming up? Make sure you're not on the hook for business liabilities with
					an LLC. Get yours started for free—just pay state filing fees.
				</p>
				<p class="font-montserrat font-bold text-black text-lg mb-4 text-left">
					From $0 + filing fees
				</p>
				<div class="flex justify-start items-center">
					<a
						href="/personal/estate-planning/last-will"
						class="inline-block border border-black bg-transparent rounded-full px-8 py-2 font-montserrat font-medium text-sm"
						>Start my LLC</a
					>
				</div>
				<div class="mt-6">
					<p class="font-montserrat font-bold text-base">How it's unique</p>
					<ul class="list-disc pl-6">
						<li class="font-montserrat font-normal text-base">
							Better for max flexibility in how you manage and run your business; board of directors
							not required
						</li>
						<li class="font-montserrat font-normal text-base">
							Unlimited owners (aka "members") allowed
						</li>
					</ul>

					<p class="font-montserrat font-bold text-base">Protections and taxations</p>
					<ul class="list-disc pl-6">
						<li class="font-montserrat font-normal text-base">
							You're <span class="italic">not</span> personally on the hook for business liabilities
						</li>
						<li class="font-montserrat font-normal text-base">
							Taxed once or twice; you're free to choose which can help minimize taxes
						</li>
					</ul>

					<p class="font-montserrat font-bold text-base">Drawbacks to consider</p>
					<ul class="list-disc pl-6">
						<li class="font-montserrat font-normal text-base">
							Ongoing filings and fees to stay in compliance
						</li>
						<li class="font-montserrat font-normal text-base">LLC's can't go public</li>
						<li class="font-montserrat font-normal text-base">
							Not recognized globally; you may be taxed as a corporation in other countries
						</li>
					</ul>
				</div>
			</div>
			<div class="shadow-xl p-12 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<h3 class="font-oregon font-medium text-black text-3xl text-left mb-3">DBA</h3>
				<p class="font-montserrat font-medium text-black text-base text-left">Doing Business As</p>
				<p class="font-montserrat font-normal text-black text-sm text-left mb-3">
					Starts at $99 + filing fees
				</p>

				<p class="font-montserrat font-normal text-black text-base text-left mb-3">
					Go by a different business name without creating a new company. Over half of our DBA
					customers are sole proprietors.
				</p>
				<p class="font-montserrat font-bold text-black text-lg mb-4 text-left">
					From $99 + filing fees
				</p>
				<div class="flex justify-start items-center">
					<a
						href="/personal/estate-planning/last-will"
						class="inline-block border border-black bg-transparent rounded-full px-8 py-2 font-montserrat font-medium text-sm"
						>Start my DBA</a
					>
				</div>
				<div class="mt-6">
					<p class="font-montserrat font-bold text-base">How it's unique</p>
					<ul class="list-disc pl-6">
						<li class="font-montserrat font-normal text-base">
							Better for max flexibility in how you manage and run your business; board of directors
							not required
						</li>
						<li class="font-montserrat font-normal text-base">
							Unlimited owners (aka "members") allowed
						</li>
					</ul>

					<p class="font-montserrat font-bold text-base">Protections and taxations</p>
					<ul class="list-disc pl-6">
						<li class="font-montserrat font-normal text-base">
							You're <span class="italic">not</span> personally on the hook for business liabilities
						</li>
						<li class="font-montserrat font-normal text-base">
							Taxed once or twice; you're free to choose which can help minimize taxes
						</li>
					</ul>

					<p class="font-montserrat font-bold text-base">Drawbacks to consider</p>
					<ul class="list-disc pl-6">
						<li class="font-montserrat font-normal text-base">
							Ongoing filings and fees to stay in compliance
						</li>
						<li class="font-montserrat font-normal text-base">LLC's can't go public</li>
						<li class="font-montserrat font-normal text-base">
							Not recognized globally; you may be taxed as a corporation in other countries
						</li>
					</ul>
				</div>
			</div>

			<div class="shadow-xl p-12 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<h3 class="font-oregon font-medium text-black text-3xl text-left">INC</h3>
				<p class="font-montserrat font-medium text-black text-base text-left">
					Corperation (S or C Corp)
				</p>
				<p class="font-montserrat font-normal text-black text-sm text-left">
					Starts at $149 + filing fees
				</p>
				<p class="font-montserrat font-normal text-black text-sm text-left mb-3">
					Start up costs are often tax deductible
				</p>
				<p class="font-montserrat font-normal text-black text-base text-left mb-3">
					Plan to issue shares, go public, or go global? Go further as a corporation.
				</p>
				<p class="font-montserrat font-bold text-black text-lg mb-4 text-left">
					From $149 + filing fees
				</p>
				<div class="flex justify-start items-center">
					<a
						href="/personal/estate-planning/last-will"
						class="inline-block border border-black bg-transparent rounded-full px-8 py-2 font-montserrat font-medium text-sm"
						>Start my Inc</a
					>
				</div>
				<div class="mt-6">
					<p class="font-montserrat font-bold text-base">How it's unique</p>
					<ul class="list-disc pl-6">
						<li class="font-montserrat font-normal text-base">
							Better for max flexibility in how you manage and run your business; board of directors
							not required
						</li>
						<li class="font-montserrat font-normal text-base">
							Unlimited owners (aka "members") allowed
						</li>
					</ul>

					<p class="font-montserrat font-bold text-base">Protections and taxations</p>
					<ul class="list-disc pl-6">
						<li class="font-montserrat font-normal text-base">
							You're <span class="italic">not</span> personally on the hook for business liabilities
						</li>
						<li class="font-montserrat font-normal text-base">
							Taxed once or twice; you're free to choose which can help minimize taxes
						</li>
					</ul>

					<p class="font-montserrat font-bold text-base">Drawbacks to consider</p>
					<ul class="list-disc pl-6">
						<li class="font-montserrat font-normal text-base">
							Ongoing filings and fees to stay in compliance
						</li>
						<li class="font-montserrat font-normal text-base">LLC's can't go public</li>
						<li class="font-montserrat font-normal text-base">
							Not recognized globally; you may be taxed as a corporation in other countries
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
