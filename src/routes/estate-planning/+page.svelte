<script>
	// Components
	import { Form } from '$components';

	// Meta
	let pageTitle = '';
	let pageDescription = '';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<section class="bg-gray-300 pt-0 pb-0">
	<div class="w-full max-w-screen-xl mx-auto flex flex-row items-center">
		<div class="w-1/2">
			<h1 class="font-oregon font-medium text-black text-6xl">
				Help protect your family's future with an estate plan
			</h1>
			<!-- <p class="font-montserrat font-normal text-black text-xl mb-3">
				Legal services do not need to be complicated or expensive. Let me help walk you through your
				legal needs in a timely manner at a reasonable fee.
			</p> -->
			<div class="flex justify-center lg:justify-start items-center">
				<a
					href="."
					class="border border-black bg-black font-montserrat font-medium text-white text-base px-10 py-3 rounded-full transition-all duration-300 hover:bg-brandGreen hover:text-black inline-block"
					>Get Started</a
				>
			</div>
		</div>
		<div class="flex-1 pl-28">
			<div class="translate-y-20"><Form /></div>
		</div>
	</div>
</section>

<!-- <section class="pt-40 pb-40">
	<div class="w-full max-w-screen-xl mx-auto">
		<h1 class="font-oregon font-medium text-5xl text-black w-1/2">
			Help protect your family's future with an estate plan
		</h1>
		<p class="font-montserrat font-normal text-xl text-black">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</p>
	</div>
</section> -->

<section class="bg-white pt-28 pb-28">
	<div class="w-full max-w-screen-xl mx-auto">
		<h2 class="font-oregon font-medium text-black text-5xl mb-12">Estate Planning Services</h2>
		<div class="grid grid-cols-2 gap-16">
			<div class="shadow-xl p-12 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<div class="flex justify-between items-center mb-3">
					<h3 class="font-oregon font-medium text-black text-4xl text-left">Last will</h3>
					<p class="font-montserrat font-medium text-black text-3xl text-left">$89</p>
				</div>
				<p class="font-montserrat font-normal text-black text-base text-left mb-3">
					Decide what happens to your property and who raises your children.
				</p>

				<!-- <p class="font-montserrat font-bold text-black text-lg mb-4 text-left">From $89</p> -->

				<div class="flex justify-start items-center">
					<a
						href="/estate-planning/last-will"
						class="inline-block border border-black bg-transparent rounded-full px-8 py-2 font-montserrat font-medium text-base transition-all duration-200 hover:bg-black hover:text-white"
						>Learn More</a
					>
				</div>
			</div>

			<div class="shadow-xl p-12 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<div class="flex justify-between items-center mb-3">
					<h3 class="font-oregon font-medium text-black text-4xl text-left">Living will</h3>
					<p class="font-montserrat font-medium text-black text-3xl text-left">$89</p>
				</div>
				<p class="font-montserrat font-normal text-black text-base text-left mb-3">
					Make your health care wishes known now in case you're unable to communicate them later.
				</p>

				<!-- <p class="font-montserrat font-bold text-black text-lg mb-4 text-left">From $89</p> -->

				<div class="flex justify-start items-center">
					<a
						href="/estate-planning/last-will"
						class="inline-block border border-black bg-transparent rounded-full px-8 py-2 font-montserrat font-medium text-base transition-all duration-200 hover:bg-black hover:text-white"
						>Learn More</a
					>
				</div>
			</div>

			<div class="shadow-xl p-12 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<div class="flex justify-between items-center mb-3">
					<h3 class="font-oregon font-medium text-black text-4xl text-left">Power of attorney</h3>
					<p class="font-montserrat font-medium text-black text-3xl text-left">$89</p>
				</div>
				<p class="font-montserrat font-normal text-black text-base text-left mb-3">
					Appoint someone to make health care decisions for you in case you're incapacitated.
				</p>

				<!-- <p class="font-montserrat font-bold text-black text-lg mb-4 text-left">From $89</p> -->

				<div class="flex justify-start items-center">
					<a
						href="/estate-planning/last-will"
						class="inline-block border border-black bg-transparent rounded-full px-8 py-2 font-montserrat font-medium text-base transition-all duration-200 hover:bg-black hover:text-white"
						>Learn More</a
					>
				</div>
			</div>

			<div class="shadow-xl p-12 rounded-xl bg-white">
				<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
				<div class="flex justify-between items-center mb-3">
					<h3 class="font-oregon font-medium text-black text-4xl text-left">Living trust</h3>
					<p class="font-montserrat font-medium text-black text-3xl text-left">$89</p>
				</div>
				<p class="font-montserrat font-normal text-black text-base text-left mb-3">
					Preserve your assets for your loved ones, and help avoid any additional delays and
					expenses with the court later by taking control now.
				</p>

				<!-- <p class="font-montserrat font-bold text-black text-lg mb-4 text-left">From $89</p> -->

				<div class="flex justify-start items-center">
					<a
						href="/estate-planning/last-will"
						class="inline-block border border-black bg-transparent rounded-full px-8 py-2 font-montserrat font-medium text-base transition-all duration-200 hover:bg-black hover:text-white"
						>Learn More</a
					>
				</div>
			</div>
		</div>
	</div>
</section>
