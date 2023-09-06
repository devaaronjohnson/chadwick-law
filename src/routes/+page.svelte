<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	// Default theme
	import '@splidejs/svelte-splide/css';

	// Meta
	let pageTitle = 'Connie Chadwick Law';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<section class="bg-white pt-40 pb-40">
	<div class="w-full max-w-screen-xl mx-auto">
		<h1 class="font-oregon font-medium text-black text-6xl w-1/2">
			Legal expertise without the headaches.
		</h1>
		<p class="font-montserrat font-normal text-black text-xl w-1/2 mb-3">
			Legal services do not need to be complicated or expensive. Let me help walk you through your
			legal needs in a timely manner at a reasonable fee.
		</p>
		<a
			href="."
			class="border border-brandGreen bg-transparent font-montserrat font-medium text-brandGreen text-base px-10 py-3 rounded-full transition-all duration-300 hover:bg-brandGreen hover:text-black inline-block"
			>Get Started</a
		>
	</div>
</section>

<section class="bg-white pt-28 pb-28">
	<div class="w-full max-w-screen-xl mx-auto">
		<h2 class="font-oregon font-medium text-black text-4xl mb-12 text-center">
			What I Can Help You With
		</h2>
		<div class="grid grid-cols-3 gap-12">
			<div class="bg-gray-200 p-12 rounded-xl">
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
						href="/personal/estate-planning"
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
					Business Formation
				</h3>
				<p class="font-montserrat font-normal text-black text-sm text-center mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis.
				</p>
				<div class="flex justify-center items-center">
					<a
						href="."
						class="font-montserrat font-medium text-sm bg-gray-500 border border-gray-500 rounded text-white px-6 py-2"
						>Get Started</a
					>
				</div>
			</div>
			<div class="bg-gray-200 p-12 rounded-xl">
				<div class="flex justify-center items-center mb-5">
					<img src="/divorce.svg" alt="Estate Planning" class="h-12 w-auto" />
				</div>
				<h3 class="font-oregon font-medium text-black text-3xl text-center mb-3">
					Marriage & Divorce
				</h3>
				<p class="font-montserrat font-normal text-black text-sm text-center mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis.
				</p>
				<div class="flex justify-center items-center">
					<a
						href="/personal/divorce"
						class="font-montserrat font-medium text-sm bg-gray-500 border border-gray-500 rounded text-white px-6 py-2"
						>Get Started</a
					>
				</div>
			</div>
			<div class="bg-gray-200 p-12 rounded-xl">
				<div class="flex justify-center items-center mb-5">
					<img src="/divorce.svg" alt="Estate Planning" class="h-12 w-auto" />
				</div>
				<h3 class="font-oregon font-medium text-black text-3xl text-center mb-3">
					Marriage & Divorce
				</h3>
				<p class="font-montserrat font-normal text-black text-sm text-center mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis.
				</p>
				<div class="flex justify-center items-center">
					<a
						href="/personal/divorce"
						class="font-montserrat font-medium text-sm bg-gray-500 border border-gray-500 rounded text-white px-6 py-2"
						>Get Started</a
					>
				</div>
			</div>
			<div class="bg-gray-200 p-12 rounded-xl">
				<div class="flex justify-center items-center mb-5">
					<img src="/divorce.svg" alt="Estate Planning" class="h-12 w-auto" />
				</div>
				<h3 class="font-oregon font-medium text-black text-3xl text-center mb-3">
					Marriage & Divorce
				</h3>
				<p class="font-montserrat font-normal text-black text-sm text-center mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
					aspernatur eaque optio officiis.
				</p>
				<div class="flex justify-center items-center">
					<a
						href="/personal/divorce"
						class="font-montserrat font-medium text-sm bg-gray-500 border border-gray-500 rounded text-white px-6 py-2"
						>Get Started</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-white pt-40 pb-40">
	<div class="w-full max-w-screen-xl mx-auto">
		<div class="grid grid-cols-2 gap-12">
			<div>
				<div class="flex justify-center items-center mb-5">Image Here</div>
			</div>
			<div>
				<h3 class="font-oregon font-medium text-black text-3xl mb-3">About Connie</h3>
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
		<h2 class="font-oregon font-medium text-black text-4xl mb-12 text-center">
			What people are saying
		</h2>

		<Splide
			options={{
				type: 'loop',
				perPage: 1,
				height: '100px',
				perMove: 1,
				arrows: true,
				padding: '0rem'
			}}
		>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
						aspernatur eaque optio officiis.
					</p>
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						- Lorem ipsum
					</p>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
						aspernatur eaque optio officiis.
					</p>
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						- Lorem ipsum
					</p>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
						aspernatur eaque optio officiis.
					</p>
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						- Lorem ipsum
					</p>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur quia
						aspernatur eaque optio officiis.
					</p>
					<p class="font-montserrat font-normal text-black text-lg mb-4 text-center">
						- Lorem ipsum
					</p>
				</div>
			</SplideSlide>
		</Splide>
	</div>
</section>

<style>
	.testimonial {
		width: 100%;
		height: 100%;
		padding: 20px 40px;
	}
	:global(.splide__slide) {
		width: 100% !important;
	}
</style>
