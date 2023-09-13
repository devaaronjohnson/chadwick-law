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
			Build your brand with a DBA
		</h1>

		<p class="font-montserrat font-normal text-xl text-black w-1/2 mb-6">
			Whether you’re going solo or looking to expand, your DBA (Doing Business As) can help
			establish your brand, and set your company apart from the competition.
		</p>
		<p class="font-montserrat font-normal text-xl text-black w-1/2 mb-6">
			Starts at $99 + state filing fees. These costs are often tax deductible.
		</p>

		<a
			href="."
			class="inline-block border border-black bg-black text-white font-montserrat font-medium text-base rounded-full px-6 py-3"
			>Start my DBA</a
		>
	</div>
</section>

<section class="pt-28 pb-28">
	<div class="w-full max-w-screen-xl mx-auto">
		<!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
		</div> -->
		<h2 class="font-oregon font-medium text-5xl text-black mb-5">Why a DBA is important</h2>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-20">
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">Legally required</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					In most states, it's a must if you don't plan on using your legal name or official company
					name to do business.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">Set up a business bank account</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					You will need a registered DBA if you want to open a business checking or savings account
					under your DBA name.
				</p>
			</div>
			<div>
				<h2 class="font-oregon font-medium text-4xl text-black">Allows you to expand easily</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					If you already have an LLC or corporation, you can rebrand your company to specific market
					segments or different geographical areas.
				</p>
			</div>
		</div>
	</div>
</section>
