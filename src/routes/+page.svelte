<script>
	// Components
	import { Form } from '$components';

	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	// Default theme
	import '@splidejs/svelte-splide/css';

	// Meta
	let pageTitle = 'Connie Chadwick Law';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<section class="bg pt-16 pb-0">
	<div class="w-full max-w-screen-xl mx-auto flex flex-row items-center">
		<div class="w-1/2">
			<h1 class="font-oregon font-medium text-white text-6xl leading-none mb-2">
				Legal expertise without the headaches.
			</h1>
			<p class="font-montserrat font-normal text-white text-xl mb-5">
				Legal services do not need to be complicated or expensive. Let me help walk you through your
				legal needs in a timely manner at a reasonable fee.
			</p>
			<div class="flex justify-center lg:justify-start items-center">
				<a
					href="."
					class="border orange font-montserrat font-medium text-white text-base px-10 py-3 rounded-full transition-all duration-300 hover:bg-brandGreen hover:text-black inline-block"
					>Get Started</a
				>
			</div>
		</div>
		<div class="flex-1 pl-28">
			<div class="translate-y-20"><Form /></div>
		</div>
	</div>
</section>

<section class="bg-white pt-32 pb-32">
	<div class="w-full max-w-screen-xl mx-auto">
		<h2 class="font-oregon font-medium text-black text-5xl mb-12">What I Can Help You With?</h2>
		<div class="grid grid-cols-3 gap-12">
			<div class="bg-gray-200 p-12 rounded-xl shadow-xl">
				<div class="flex justify-center items-center mb-5">
					<img src="/home.svg" alt="Estate Planning" class="h-12 w-auto" />
				</div>
				<h3 class="font-oregon font-medium text-black text-3xl text-center mb-3">
					Estate Planning
				</h3>
				<p class="font-montserrat font-normal text-black text-sm text-center mb-5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis.
				</p>
				<div class="flex justify-center items-center">
					<a
						href="/estate-planning"
						class="font-montserrat font-medium text-sm bg-gray-500 border border-gray-500 rounded text-white px-6 py-2"
						>Get Started</a
					>
				</div>
			</div>
			<div class="bg-gray-200 p-12 rounded-xl">
				<div class="flex justify-center items-center mb-5">
					<img src="/business.svg" alt="Estate Planning" class="h-12 w-auto" />
				</div>
				<h3 class="font-oregon font-medium text-black text-3xl text-center mb-3">
					Business Services
				</h3>
				<p class="font-montserrat font-normal text-black text-sm text-center mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis.
				</p>
				<div class="flex justify-center items-center">
					<a
						href="/business-services"
						class="font-montserrat font-medium text-sm bg-gray-500 border border-gray-500 rounded text-white px-6 py-2"
						>Get Started</a
					>
				</div>
			</div>
			<div class="bg-gray-200 p-12 rounded-xl">
				<div class="flex justify-center items-center mb-5">
					<img src="/divorce.svg" alt="Estate Planning" class="h-12 w-auto" />
				</div>
				<h3 class="font-oregon font-medium text-black text-3xl text-center mb-3">Family</h3>
				<p class="font-montserrat font-normal text-black text-sm text-center mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis.
				</p>
				<div class="flex justify-center items-center">
					<a
						href="/family"
						class="font-montserrat font-medium text-sm bg-gray-500 border border-gray-500 rounded text-white px-6 py-2"
						>Get Started</a
					>
				</div>
			</div>
			<div class="bg-gray-200 p-12 rounded-xl">
				<div class="flex justify-center items-center mb-5">
					<i class="fa-regular fa-sign-hanging text-5xl" />
				</div>
				<h3 class="font-oregon font-medium text-black text-3xl text-center mb-3">Real Estate</h3>
				<p class="font-montserrat font-normal text-black text-sm text-center mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis.
				</p>
				<div class="flex justify-center items-center">
					<a
						href="/real-estate"
						class="font-montserrat font-medium text-sm bg-gray-500 border border-gray-500 rounded text-white px-6 py-2"
						>Get Started</a
					>
				</div>
			</div>
			<div class="bg-gray-200 p-12 rounded-xl">
				<div class="flex justify-center items-center mb-5">
					<i class="fa-light fa-chair-office text-5xl" />
				</div>
				<h3 class="font-oregon font-medium text-black text-3xl text-center mb-3">
					Human Resources & Labor Issues
				</h3>
				<p class="font-montserrat font-normal text-black text-sm text-center mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis.
				</p>
				<div class="flex justify-center items-center">
					<a
						href="/human-resources-and-labor"
						class="font-montserrat font-medium text-sm bg-gray-500 border border-gray-500 rounded text-white px-6 py-2"
						>Get Started</a
					>
				</div>
			</div>
			<div class="bg-gray-200 p-12 rounded-xl">
				<div class="flex justify-center items-center mb-5">
					<!-- <img src="/divorce.svg" alt="Estate Planning" class="h-12 w-auto" /> -->
					<i class="fa-light fa-file-contract text-5xl" />
				</div>
				<h3 class="font-oregon font-medium text-black text-3xl text-center mb-3">
					Contract Consultation
				</h3>
				<p class="font-montserrat font-normal text-black text-sm text-center mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis.
				</p>
				<div class="flex justify-center items-center">
					<a
						href="/contract-consultation"
						class="font-montserrat font-medium text-sm bg-gray-500 border border-gray-500 rounded text-white px-6 py-2"
						>Get Started</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-gray-100 pt-32 pb-32">
	<div class="w-full max-w-screen-xl mx-auto">
		<div class="grid grid-cols-2 gap-12">
			<div>
				<div class="flex justify-center items-center mb-5">Image Here</div>
			</div>
			<div>
				<h3 class="font-oregon font-medium text-black text-5xl mb-3">About Connie</h3>
				<p class="font-montserrat font-normal text-black text-lg mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eveniet consequatur quia aspernatur eaque optio officiis. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Eveniet consequatur quia aspernatur eaque optio officiis.
				</p>
				<p class="font-montserrat font-normal text-black text-lg mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eveniet consequatur quia aspernatur eaque optio officiis. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Eveniet consequatur quia aspernatur eaque optio officiis.
				</p>
				<p class="font-montserrat font-normal text-black text-lg mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eveniet consequatur quia aspernatur eaque optio officiis. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Eveniet consequatur quia aspernatur eaque optio officiis.
				</p>
				<!-- <div class="flex justify-center items-center">
					<a
						href="."
						class="font-montserrat font-medium text-sm bg-brandGreen border border-brandGreen rounded text-black px-6 py-2"
						>Get Started</a
					>
				</div> -->
			</div>
		</div>
	</div>
</section>

<section class="bg-white pt-28 pb-28">
	<div class="w-full max-w-screen-xl mx-auto">
		<h2 class="font-oregon font-medium text-black text-5xl mb-12 text-center">
			What people are saying
		</h2>

		<Splide
			options={{
				type: 'loop',
				perPage: 1,
				height: '200px',
				perMove: 1,
				arrows: true,
				padding: '0rem'
			}}
		>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						I found her to be compassionate to my needs and concerns, timely and efficient, fair in
						pricing with a true desire to settle as fairly and quickly as possible without selling
						you out. She'll fight your cause. She is knowledgeable in ethics and procedures, with
						true concerns on how your situation is affecting you.
					</p>
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">- Mike</p>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						Connie Chadwick goes over and above her line of duty! She is very thorough in what she
						does and is always prepared. She relates to you on a personal level, not just a client.
						My opinion would be if you are looking for this character, and intellect she is the one!
					</p>
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">- Dawn</p>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						I hired conine Chadwick to work on my civil case. Connie has a drive to perform the task
						at hand. Works hard to achieve the best possible results. Communication is open, work
						quick response. Truthful with the facts. I'm very happy with Connie Chadwick and will
						always reference her to handle any other matters that may arise.
					</p>
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">- Andrew</p>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						Connie did an amazing job of walking me through the difficult process of my divorce. She
						was very knowledgable and offered great advice. I could not imagine things going more
						smoothly. She was professional, trustworthy. I would recommend her to anyone facing the
						same ordeal.
					</p>
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">- Aaron</p>
				</div>
			</SplideSlide>
		</Splide>
	</div>
</section>

<style>
	.testimonial {
		width: 100%;
		height: 100%;
		padding: 20px 200px;
	}
	:global(.splide__slide) {
		width: 100% !important;
	}
	.bg {
		background: #3D405B;
	}
	.orange {
		background: #E07A5F;
		border-color: #E07A5F;
	}
	.bg_green {
		background: #81B29A;
	}
</style>
