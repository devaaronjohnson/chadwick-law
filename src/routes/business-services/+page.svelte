<script>
	import { Form } from '$components';
	import { animateScroll } from 'svelte-scrollto-element';

	// Meta
	let pageTitle = '';
	let pageDescription = '';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<section class="bg-gray-300 pt-0 b-40">
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
		<div class="flex-1 pl-28">
			<div class="translate-y-20"><Form /></div>
		</div>
	</div>
</section>

<section class="pt-28 pb-28">
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
					From $299 + filing fees
				</p>
				<div class="flex justify-start items-center">
					<a
						href="/business-services/llc"
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
						href="/business-services/dba"
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
						href="/business-services/inc"
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
