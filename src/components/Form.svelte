<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { clickOutside } from '$lib/clickOutside';

	export let services = ['Last will', 'Living will', 'Power of attorney', 'Living trust'];

	export let defaultService;

	// Booleans
	let showServiceList = false;

	// Variables
	let fullName,
		phone,
		email,
		message,
		service = defaultService;

	let fullNameClicked,
		phoneClicked,
		emailClicked,
		serviceClicked = '';

	function submitForm() {}
</script>

<div class="relative bg-white px-5 lg:px-10 py-10 lg:py-10 rounded-3xl shadow-2xl">
	<h3 class="text-center font-oregon font-medium text-3xl text-black mb-3">Get Started</h3>
	<p class="text-center font-montserrat font-light text-base text-black mb-5 px-0 lg:px-10">
		Fill out the form below and I will get back to you within 24 hours.
	</p>
	<form on:submit|preventDefault={submitForm} class="relative">
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
			<i class="fa-solid fa-caret-down absolute right-3 top-3 text-gray-400 z-10 text-2xl" />
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
				rows="4"
				id="message"
				class="border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full focus:outline-none"
				placeholder="Message"
				bind:value={message}
			/>
		</div>
		<button
			class="w-full font-montserrat font-normal uppercase text-white text-base rounded-full px-8 py-3 border border-brandOrange bg-brandOrange"
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
