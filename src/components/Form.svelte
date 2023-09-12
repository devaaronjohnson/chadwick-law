<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';

	// Booleans
	let showServiceList = false;

	// Variables
	let fullName,
		phone,
		email,
		message,
		service = '';

	let fullNameClicked,
		phoneClicked,
		emailClicked,
		serviceClicked = '';

	function submitForm() {}
</script>

<div class="relative bg-white p-10 rounded-3xl shadow-2xl">
	<h3 class="text-center font-oregon font-medium text-3xl text-black mb-3">Get Started</h3>
	<p class="text-center font-montserrat font-light text-base text-black mb-5">
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, optio! Quaerat vitae animi
		recusandae sint.
	</p>
	<form on:submit|preventDefault={submitForm} class="relative">
		<div class="w-full mb-3 relative">
			<label for="name"> Name </label>
			<input
				id="name"
				class="border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full"
				placeholder="Name"
				bind:value={fullName}
				on:focus={() => (fullNameClicked = true)}
			/>
		</div>
		<div class="w-full mb-3 relative">
			<label for="phone"> Phone </label>
			<input
				id="phone"
				class="border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full"
				placeholder="Phone"
				bind:value={phone}
				on:focus={() => (phoneClicked = true)}
			/>
		</div>
		<div class="w-full mb-3 relative">
			<label for="Email"> Phone </label>
			<input
				id="email"
				class="border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full"
				placeholder="Email"
				bind:value={email}
				on:focus={() => (emailClicked = true)}
			/>
		</div>
		<div class="w-full mb-3 relative">
			<label for="relative service"> Service </label>
			<input
				id="service"
				class="relative border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full"
				placeholder="Service"
				bind:value={service}
				on:focus={() => {
					serviceClicked = true;
					showServiceList = true;
				}}
			/>
			{#if showServiceList}
				<div
					class="w-full border border-red-300 bg-red-100 rounded p-5 absolute top-16 left-0 w-full shadow-xl z-10"
				>
					<ul>
						<li>
							<a href=".">Link</a>
						</li>
						<li>
							<a href=".">Link</a>
						</li>
					</ul>
				</div>
			{/if}
		</div>
		<div class="w-full mb-3 relative">
			<label for="message"> Message </label>
			<textarea
				rows="4"
				id="message"
				class="border border-gray-300 rounded p-3 font-montserrat font-light text-base w-full"
				placeholder="Message"
				bind:value={message}
			/>
		</div>
		<button
			class="w-full font-montserrat font-normal uppercase text-white text-base rounded px-8 py-3 border border-black bg-black"
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
