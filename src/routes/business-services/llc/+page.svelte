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
		<h1 class="font-oregon font-medium text-5xl text-black w-1/2 mb-5">Form your LLC</h1>
		<p class="font-montserrat font-normal text-xl text-black w-1/2 mb-6">
			We make launching and growing your business quick, easy, and affordable. Leave it to us to
			check if your company name is available and file all the required forms. Save time and money
			with our free LLC formation service so you can focus on building and growing your business.
		</p>
		<p class="font-montserrat font-normal text-xl text-black w-1/2 mb-6">
			Starts at <span class="font-bold">$0</span> + state filing fees.
		</p>
		<!-- <a
			href="."
			class="inline-block border border-black bg-black text-white font-montserrat font-medium text-base rounded-full px-6 py-3"
			>Start my last will</a
		> -->
	</div>
</section>

<section class="pt-28 pb-28">
	<div class="w-full max-w-screen-xl mx-auto">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
		</div>
		<h2 class="font-oregon font-medium text-5xl text-black mb-5">3 reasons for creating an LLC</h2>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-20">
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">Protect your assets</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					By forming an LLC and keeping your personal finances separate, your personal assets are
					protected from business liabilities.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">Make things easier</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					Compared to corporations, LLCs are typically easier to start and have simpler rules for
					things like record-keeping.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">Get tax flexibility</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					You get to decide how you’re taxed—as an LLC or a corporation—to maximize your potential
					savings and minimize tax liability.
				</p>
			</div>
		</div>
	</div>
</section>
