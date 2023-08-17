<script>
	// Variables
	let firstName = '';
	let lastName = '';
	let phone = '';
	let email = '';
	let message = '';

	// Functions
	async function submitForm() {
		console.log('Submit Form');
	}
</script>

<section class="pt-40 pb-40">
	<div class="w-full max-w-screen-lg mx-auto">
		<p class="font-oregon font-medium text-4xl text-black mb-10">
			Have specific question or need assistance with something...
		</p>

		<form on:submit|preventDefault={submitForm}>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
				<input
					type="text"
					bind:value={firstName}
					class="border border-gray-300 rounded p-3 w-full"
					placeholder="First name"
				/>
				<input
					type="text"
					bind:value={lastName}
					class="border border-gray-300 rounded p-3 w-full"
					placeholder="Last name"
				/>
				<input
					type="text"
					bind:value={phone}
					class="border border-gray-300 rounded p-3 w-full"
					placeholder="Phone"
				/>
				<input
					type="text"
					bind:value={email}
					class="border border-gray-300 rounded p-3 w-full"
					placeholder="Email"
				/>
			</div>
			<div class="grid-cols-1 mb-2">
				<textarea
					class="border border-gray-300 p-3 w-full"
					placeholder="Message"
					bind:value={message}
				/>
			</div>
			<button
				type="submit"
				class="bg-black border border-black font-montserrat font-medium text-white text-base px-8 py-3 rounded"
				>Submit</button
			>
		</form>
	</div>
</section>
