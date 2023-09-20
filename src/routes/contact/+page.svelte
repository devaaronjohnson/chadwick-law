<script>
	// Booleans
	let showServiceList = false;

	// Variables
	let fullName,
		phone,
		email,
		message,
		service = '';

	let services = [
		'Estate Planning',
		'Business Services',
		'Divorce',
		'Real Estate',
		'Human Resources',
		'Contract Consultaion'
	];

	let fullNameClicked,
		phoneClicked,
		emailClicked,
		serviceClicked = '';

	// Functions
	async function submitForm() {
		console.log('Submit Form');
	}
</script>

<section class="relative bg-brandDarkBlue pt-0 lg:pt-36 pb-0 lg:pb-24">
	<img src="/ccl_name.svg" alt="" class="bg_name" />
	<div class="container_xl container_padding flex flex-col lg:flex-row items-center">
		<div class="w-full lg:w-2/3">
			<h1 class="font-oregon font-medium text-white text-6xl leading-none mb-2">
				Have specific question or need assistance with something...
			</h1>
			<!-- <p class="font-montserrat font-normal text-white text-xl mb-5">
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
		</div>
		<!-- <div class="w-full lg:flex-1 pl-0 lg:pl-28">
			<div class="translate-y-20"><Form {services} /></div>
		</div> -->
	</div>
</section>

<section class="pt-16 pb-16">
	<div class="w-full max-w-screen-lg mx-auto">
		<form on:submit|preventDefault={submitForm} class="relative">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<div class="w-full mb-3 relative">
					<label for="name"> Name </label>
					<input
						id="name"
						class="border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full focus:outline-none"
						placeholder="Name (required)"
						bind:value={fullName}
						on:focus={() => (fullNameClicked = true)}
					/>
				</div>
				<div class="w-full mb-3 relative">
					<label for="phone"> Phone </label>
					<input
						id="phone"
						class="border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full focus:outline-none"
						placeholder="Phone (required)"
						bind:value={phone}
						on:focus={() => (phoneClicked = true)}
					/>
				</div>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
				<div class="w-full mb-3 relative">
					<label for="Email"> Phone </label>
					<input
						id="email"
						class="border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full focus:outline-none"
						placeholder="Email (required)"
						bind:value={email}
						on:focus={() => (emailClicked = true)}
					/>
				</div>
				<div
					use:clickOutside
					on:click_outside={() => (showServiceList = false)}
					class="w-full mb-3 relative"
				>
					<i class="fa-solid fa-caret-down absolute right-3 top-9 text-gray-400 z-10 text-2xl" />
					<label for="relative service"> Service </label>
					<input
						id="service"
						class="relative border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full focus:outline-none"
						placeholder="Select a service"
						bind:value={service}
						on:focus={() => {
							serviceClicked = true;
							showServiceList = true;
						}}
					/>
					{#if showServiceList}
						<div class="w-full bg-white rounded p-5 absolute top-16 left-0 shadow-2xl z-10">
							<ul>
								{#each services as s, i}
									<li class="font-montserrat font-light">
										<a
											on:click|preventDefault={() => {
												service = s;
												showServiceList = false;
											}}
											href="."
											class="transition-all duration-200 hover:text-brandOrange">{s}</a
										>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			</div>
			<div class="w-full mb-3 relative">
				<label for="message"> Message </label>
				<textarea
					rows="4"
					id="message"
					class="border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full focus:outline-none"
					placeholder="Message"
					bind:value={message}
				/>
			</div>
			<div>
				<button
					class="inline-block font-montserrat font-normal uppercase text-white text-sm rounded-full px-8 py-3 border border-brandOrange bg-brandOrange"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</section>

<style>
	label {
		@apply font-montserrat text-sm font-bold;
	}
	.bg_name {
		position: absolute;
		right: 20px;
		bottom: -30px;
		opacity: 0.1;
		height: 200px;
	}
</style>
