<script>
	import { Form } from '$components';
	import { animateScroll } from 'svelte-scrollto-element';

	// Variables
	let services = ['Divorce'];
	let defaultService = 'Divorce';

	// Meta
	let pageTitle = '';
	let pageDescription = '';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<!-- <section>
	<div class="w-full max-w-screen-xl mx-auto">
		<h1 class="font-oregon font-medium text-5xl text-black">Personal</h1>
		<p class="font-montserrat font-normal text-xl text-black">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</p>

		<div class="grid grid-cols-3 gap-10">
			<div class="shadow-xl p-10 flex flex-col items-center">
				<i class="fa-regular fa-house-heart text-4xl mb-5" />
				<h3 class="font-oregon font-medium text-black text-3xl text-center">Estate Planning</h3>
				<p class="font-montserrat font-normal text-black text-lg text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>
			<div class="shadow-xl p-10 flex flex-col items-center">
				<i class="fa-regular fa-house-heart text-4xl mb-5" />
				<h3 class="font-oregon font-medium text-black text-3xl text-center">Marriage & Divorce</h3>
				<p class="font-montserrat font-normal text-black text-lg text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>
		</div>
	</div>
</section> -->

<section class="relative bg-brandDarkBlue pt-32 lg:pt-16 pb-0">
	<img src="/ccl_name.svg" alt="" class="bg_name" />
	<div class="relative container_xl container_padding flex flex-col lg:flex-row items-center">
		<div class="relative w-full lg:w-1/2">
			<h1 class="font-oregon font-medium text-white text-5xl lg:text-6xl mb-3 lg:mb-6">
				Divorce is hard, it does not have to be expensive.
			</h1>
			<p class="font-montserrat font-normal text-xl text-white mb-6">
				An uncontested divorce does not have to cost you a fortune. I can walk you through the
				process efficiently and economically.
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
			<p class="font-montserrat font-normal text-xl text-white">
				Fill out the form or call me at <a
					class="underline underline-offset-4"
					href="tel:6154172129">615-417-2129</a
				> to get started.
			</p>
		</div>
		<div id="form" class="relative w-full lg:flex-1 pl-0 lg:pl-28">
			<div class="translate-y-20"><Form {defaultService} {services} /></div>
		</div>
	</div>
</section>

<section class="pt-40 lg:pt-32 pb-12 lg:pb-28">
	<div class="container_xl container_padding">
		<div class="grid grid-cols-1 gap-8 mb-10 lg:mb-16">
			<div>
				<h2 class="font-montserrat font-light text-xl text-black mb-10 w-full lg:w-3/4">
					The average contested divorce will cost each party $10,000. For some this is a worthy cost
					for freedom; for others it's a financial burden that takes yearrs to overcome. It does not
					have to be this way. If you can come to an agreement with the other party ahead of time,
					you can save thousands of dollars in legal fees and countless hours in mediation.
				</h2>
				<div class="flex flex-col lg:flex-row items-start">
					<div class="w-full lg:w-[350px] mb-10 lg:mb-0">
						<div class="bg-white rounded-xl shadow-xl overflow-hidden w-full">
							<!-- <div class="flex justify-center items-center mb-5">
								<i class="fa-regular fa-house-heart text-5xl text-brandOrange" />
							</div> -->
							<div class="bg-brandOrange px-12 py-5">
								<h3
									class="bg-brandOrange font-oregon font-medium text-white text-3xl text-center mb-0"
								>
									Basic Divorce
								</h3>
								<p class="font-montserrat font-normal text-white text-sm text-center">
									No real estate or children involved
								</p>
							</div>
							<div class="px-10 pt-6 pb-8">
								<p class="font-montserrat font-medium text-4xl text-center mb-4">$1,500</p>
								<p class="font-montserrat font-medium text-base text-center mb-1">
									Whats included:
								</p>
								<ul class="mb-5">
									<li class="font-montserrat font-light text-sm text-center">
										One hour custom consultation
									</li>
									<li class="font-montserrat font-light text-sm text-center">
										Draft of documents and one revision
									</li>
									<li class="font-montserrat font-light text-sm text-center">
										Representation at final hearing
									</li>
								</ul>
								<!-- <div class="flex justify-center items-center">
									<a
										href="/estate-planning"
										class="font-montserrat font-medium text-sm bg-brandOrange border-brandOrange border rounded-full text-white px-6 py-2"
										>Get Started</a
									>
								</div> -->
							</div>
						</div>
					</div>
					<div class="w-full lg:flex-1 ml-0 lg:ml-20">
						<p class="font-oregon font-normal text-4xl mb-5 border-b border-gray-200 pb-2">
							Additional Costs:
						</p>
						<div class="flex flex-col lg:flex-row items-start">
							<div
								class="w-full lg:w-[350px] bg-white mr-8 border-r border-gray-200 pr-8 mb-10 lg:mb-0"
							>
								<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
								<div class="flex flex-row justify-between items-center">
									<h3 class="font-oregon font-medium text-brandOrange text-3xl text-left mb-3">
										Children
									</h3>
									<p class="font-montserrat font-medium text-black text-3xl text-left mb-4">$500</p>
								</div>
								<p class="font-montserrat font-medium text-black text-lg text-left mb-1">
									Includes:
								</p>
								<ul class="list-disc pl-4">
									<li class="font-montserrat font-light text-base text-black">
										Creation of parenting plan
									</li>
									<li class="font-montserrat font-light text-base text-black">
										Child support worksheet
									</li>
								</ul>

								<!-- <p class="font-montserrat font-bold text-black text-lg mb-4 text-left">From $89</p> -->

								<!-- <div class="flex justify-start items-center">
									<a
										href="/estate-planning/last-will"
										class="btn_sm border border-brandOrange bg-brandOrange font-montserrat hover:border-black hover:bg-black text-white"
										>Learn More</a
									>
								</div> -->
							</div>
							<div class="w-full lg:w-[350px] rounded-xl bg-white">
								<!-- <i class="fa-regular fa-house-heart text-4xl mb-5" /> -->
								<div class="flex flex-row justify-between items-center">
									<h3 class="font-oregon font-medium text-brandOrange text-3xl text-left mb-3">
										Property/Business
									</h3>
									<p class="font-montserrat font-medium text-black text-3xl text-left mb-4">
										$250/<span class="text-base">per</span>
									</p>
								</div>
								<p class="font-montserrat font-medium text-black text-lg text-left mb-1">
									Includes:
								</p>
								<ul class="list-disc pl-4">
									<li class="font-montserrat font-light text-base text-black">Deed transfer</li>
								</ul>

								<!-- <p class="font-montserrat font-bold text-black text-lg mb-4 text-left">From $89</p> -->

								<!-- <div class="flex justify-start items-center">
									<a
										href="/estate-planning/last-will"
										class="btn_sm border border-brandOrange bg-brandOrange font-montserrat hover:border-black hover:bg-black text-white"
										>Learn More</a
									>
								</div> -->
							</div>
						</div>
					</div>
				</div>
				<!-- <p class="font-montserrat font-normal text-base text-black mb-5">
					A limited liability company (LLC) is a type of business entity you can register in your
					state. The main purpose of an LLC company is to limit the personal liability of its
					owners—like a corporation—but it also allows the business to operate with simpler, more
					flexible tax requirements.
				</p> -->
			</div>
			<!-- <div>
				<h2 class="font-oregon font-medium text-4xl text-black">Do I need an LLC?</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					An LLC isn’t always required, but many small business owners form an LLC for personal
					liability protection. Having an LLC can also help you open bank accounts, enter into
					contracts, hire employees, and get necessary business licenses and permits.
				</p>
			</div> -->
		</div>

		<div class="flex justify-start lg:justify-start items-center mt-10">
			<a
				on:click|preventDefault={() =>
					animateScroll.scrollTo({ element: '#form', duration: 1000, offset: -50 })}
				href="."
				class="btn_hero border border-brandOrange bg-brandOrange text-white hover:bg-brandOrange hover:text-white"
				>Start My Divorce</a
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
