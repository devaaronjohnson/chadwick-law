<script>
	import { clickOutside } from '$lib/clickOutside';

	// Props
	export let form;

	// Booleans
	let showServiceList = false;

	// Variables
	let name = '';
	let email = '';
	let phone = '';
	let service = '';
	let message = '';

	let services = [
		'Estate Planning',
		'Business Services',
		'Divorce',
		'Real Estate',
		'Human Resources',
		'Contract Consultaion'
	];

	let nameClicked = false;
	let phoneClicked = false;
	let emailClicked = false;
	let serviceClicked = false;

	// Functions
	function validateEmail(email) {
		var emailRegEx =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegEx.test(String(email).toLowerCase());
	}
	function validatePhone(phone) {
		let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		return regex.test(phone);
	}

	$: isValidEmail = validateEmail(email);
	$: isValidPhone = validatePhone(phone);
	$: isValidName = name.length > 0;
	// $: isValidService = service !== '';
</script>

<section class="relative bg-brandDarkBlue pt-32 lg:pt-36 pb-12 lg:pb-16">
	<img src="/ccl_name.png" alt="" class="bg_name" />
	<div class="relative container_xl container_padding flex flex-col lg:flex-row items-center">
		<div class="relative w-full lg:w-2/3">
			<h1 class="relative font-oregon font-medium text-white text-6xl leading-none mb-2">
				Sometimes you just need to simply talk to an attorney.
			</h1>
		</div>
	</div>
</section>

<section class="pt-12 lg:pt-20 pb-12 lg:pb-24">
	<div class="w-full max-w-screen-lg mx-auto container_padding">
		<p class="font-montserrat font-light text-xl mb-6">
			To schedule a phone consult, please fill out the form below and I will be in touch within 24
			hours.
		</p>
		<form method="POST" action="/phone-consult" class="relative">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
				<div class="w-full mb-3 relative">
					<label for="name"> Name </label>
					<input
						id="name"
						class="border rounded p-3 font-montserrat font-light text-base w-full focus:outline-none {nameClicked &&
						!isValidName
							? 'border-red-500'
							: 'border-gray-300'}"
						placeholder="Name (required)"
						bind:value={name}
						on:blur={() => (nameClicked = true)}
						name="name"
					/>
					{#if nameClicked && !isValidName}
						<div class="mt-1">
							<p class="font-montserrat font-bold text-red-500 opacity-75 text-sm">
								Please enter a valid phone number.
							</p>
						</div>
					{/if}
				</div>
				<div class="w-full mb-3 relative">
					<label for="phone"> Phone </label>
					<input
						id="phone"
						class="border rounded p-3 font-montserrat font-light text-base w-full focus:outline-none {phoneClicked &&
						!isValidPhone
							? 'border-red-500'
							: 'border-gray-300'}"
						placeholder="Phone (required)"
						bind:value={phone}
						on:blur={() => (phoneClicked = true)}
						name="phone"
					/>
					{#if phoneClicked && !isValidPhone}
						<div class="mt-1">
							<p class="font-montserrat font-bold text-red-500 opacity-75 text-sm">
								Please enter a valid phone number.
							</p>
						</div>
					{/if}
				</div>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
				<div class="w-full mb-3 relative">
					<label for="Email"> Email </label>
					<input
						id="email"
						class="border rounded p-3 font-montserrat font-light text-base w-full focus:outline-none {emailClicked &&
						!isValidEmail
							? 'border-red-500'
							: 'border-gray-300'}"
						placeholder="Email (required)"
						bind:value={email}
						on:blur={() => (emailClicked = true)}
						name="email"
					/>
					{#if emailClicked && !isValidEmail}
						<div class="mt-1">
							<p class="font-montserrat font-bold text-red-500 opacity-75 text-sm">
								Please enter a valid email.
							</p>
						</div>
					{/if}
				</div>
				<div
					use:clickOutside
					on:click_outside={() => (showServiceList = false)}
					class="w-full mb-3 relative"
				>
					<i class="fa-solid fa-caret-down absolute right-3 top-9 text-gray-400 z-10 text-2xl" />
					<label for="relative service"> Practice Area (if applicable)</label>
					<input
						id="service"
						name="service"
						class="relative border rounded p-3 font-montserrat font-light text-base w-full focus:outline-none {serviceClicked &&
						!isValidService
							? 'border-red-500'
							: 'border-gray-300'}"
						placeholder="Select a service"
						bind:value={service}
						on:blur={() => {
							serviceClicked = true;
						}}
						on:focus={() => {
							showServiceList = true;
						}}
					/>
					<!-- {#if serviceClicked && !isValidService}
						<div class="mt-1">
							<p class="font-montserrat font-bold text-red-500 opacity-75 text-sm">
								Please select a practice area.
							</p>
						</div>
					{/if} -->
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
					name="message"
					rows="4"
					id="message"
					class="border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full focus:outline-none"
					placeholder="Message"
					bind:value={message}
				/>
			</div>
			<div>
				<button
					class="inline-block font-montserrat font-normal uppercase text-white text-sm rounded-full px-8 py-3 border border-brandOrange bg-brandOrange hover:border-brandDarkBlue hover:bg-brandDarkBlue hover:text-white transition-all duration-200"
				>
					{#if form?.success}
						Form Submitted
					{:else}
						Submit
					{/if}
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
		bottom: 0px;
		opacity: 0.1;
		height: 200px;
	}
</style>
