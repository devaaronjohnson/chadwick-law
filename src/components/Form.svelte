<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { clickOutside } from '$lib/clickOutside';

	export let services = ['Last will', 'Living will', 'Power of attorney', 'Living trust'];

	export let defaultService;

	// Booleans
	let showServiceList = false;
	let nameClicked = false;
	let phoneClicked = false;
	let emailClicked = false;
	let serviceClicked = false;

	// Variables
	let name = '';
	let phone = '';
	let email = '';
	let service = defaultService;
	let message = '';

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
	$: isValidService = service !== '';
</script>

<div class="relative bg-white px-5 lg:px-10 py-10 lg:py-10 rounded-3xl shadow-2xl">
	<h3 class="text-center font-oregon font-medium text-3xl text-black mb-3">Get Started</h3>
	<p class="text-center font-montserrat font-light text-base text-black mb-5 px-0 lg:px-10">
		Fill out the form below and I will get back to you within 24 hours.
	</p>
	<form method="POST" action="/contact" class="relative">
		<div class="w-full mb-3 relative">
			<label for="name"> Name </label>
			<input
				name="name"
				id="name"
				class="border rounded p-3 font-montserrat font-light text-base w-full focus:outline-none {nameClicked &&
				!isValidName
					? 'border-red-500'
					: 'border-gray-300'}"
				placeholder="Name (required)"
				bind:value={name}
				on:blur={() => (nameClicked = true)}
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
				name="phone"
				id="phone"
				class="border rounded p-3 font-montserrat font-light text-base w-full focus:outline-none {phoneClicked &&
				!isValidPhone
					? 'border-red-500'
					: 'border-gray-300'}"
				placeholder="Phone (required)"
				bind:value={phone}
				on:blur={() => (phoneClicked = true)}
			/>
			{#if phoneClicked && !isValidPhone}
				<div class="mt-1">
					<p class="font-montserrat font-bold text-red-500 opacity-75 text-sm">
						Please enter a valid phone number.
					</p>
				</div>
			{/if}
		</div>
		<div class="w-full mb-3 relative">
			<label for="Email"> Email </label>
			<input
				name="email"
				id="email"
				class="border rounded p-3 font-montserrat font-light text-base w-full focus:outline-none {emailClicked &&
				!isValidEmail
					? 'border-red-500'
					: 'border-gray-300'}"
				placeholder="Email (required)"
				bind:value={email}
				on:blur={() => (emailClicked = true)}
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
			<i class="fa-solid fa-caret-down absolute right-3 top-3 text-gray-400 z-10 text-2xl" />
			<label for="relative service"> Service </label>
			<input
				name="service"
				id="service"
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
			{#if serviceClicked && !isValidService}
				<div class="mt-1">
					<p class="font-montserrat font-bold text-red-500 opacity-75 text-sm">
						Please select a practice area.
					</p>
				</div>
			{/if}
			{#if showServiceList}
				<div class="w-full bg-white rounded p-5 absolute top-12 left-0 shadow-2xl z-10">
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
		<button
			type="submit"
			class="w-full font-montserrat font-normal uppercase text-white text-base rounded-full px-8 py-3 border border-brandOrange bg-brandOrange bg-opacity-90 hover:bg-opacity-100 transition-all duration-200"
		>
			Submit
		</button>
	</form>
</div>

<style>
	label {
		@apply hidden;
	}
</style>
