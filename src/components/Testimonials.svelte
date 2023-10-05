<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	// Default theme
	import '@splidejs/svelte-splide/css';
</script>

<section class="bg-brandDarkBlue pt-12 lg:pt-28 pb-12 lg:pb-28">
	<div class="container_xl">
		<h2 class="font-oregon font-medium text-white text-3xl lg:text-5xl mb-5 lg:mb-12 text-center">
			What people are saying
		</h2>

		<Splide
			options={{
				type: 'loop',
				perPage: 1,
				perMove: 1,
				arrows: true,
				padding: '0rem',
				speed: 1000,
				autoHeight: true
			}}
		>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-white text-base lg:text-lg mb-4 text-center">
						I found her to be compassionate to my needs and concerns, timely and efficient, fair in
						pricing with a true desire to settle as fairly and quickly as possible without selling
						you out. She'll fight your cause. She is knowledgeable in ethics and procedures, with
						true concerns on how your situation is affecting you.
					</p>
					<p class="font-montserrat font-normal text-white text-base lg:text-lg mb-4 text-center">
						- Mike
					</p>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-white text-base lg:text-lg mb-4 text-center">
						Connie Chadwick goes over and above her line of duty! She is very thorough in what she
						does and is always prepared. She relates to you on a personal level, not just a client.
						My opinion would be if you are looking for this character, and intellect she is the one!
					</p>
					<p class="font-montserrat font-normal text-white text-base lg:text-lg mb-4 text-center">
						- Dawn
					</p>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-white text-base lg:text-lg mb-4 text-center">
						I hired Connie Chadwick to work on my civil case. Connie has a drive to perform the task
						at hand. Works hard to achieve the best possible results. Communication is open, work
						quick response. Truthful with the facts. I'm very happy with Connie Chadwick and will
						always reference her to handle any other matters that may arise.
					</p>
					<p class="font-montserrat font-normal text-white text-base lg:text-lg mb-4 text-center">
						- Andrew
					</p>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="testimonial">
					<p class="font-montserrat font-normal text-white text-base lg:text-lg mb-4 text-center">
						Connie did an amazing job of walking me through the difficult process of my divorce. She
						was very knowledgable and offered great advice. I could not imagine things going more
						smoothly. She was professional, trustworthy. I would recommend her to anyone facing the
						same ordeal.
					</p>
					<p class="font-montserrat font-normal text-white text-base lg:text-lg mb-4 text-center">
						- Aaron
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
		padding: 20px 200px;
	}
	:global(.splide__slide) {
		width: 100% !important;
	}
	.bg {
		background: #3d405b;
	}
	.orange {
		background: #e07a5f;
		border-color: #e07a5f;
	}
	.bg_green {
		background: #81b29a;
	}
	@media screen and (max-width: 767px) {
		.testimonial {
			width: 100%;
			height: 100%;
			padding: 20px 50px;
		}
	}
</style>
