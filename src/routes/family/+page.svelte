<script>
	// Meta
	let pageTitle = '';
	let pageDescription = '';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<section>
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
</section>
