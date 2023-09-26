<script>
	import { fly, fade } from 'svelte/transition';
	import { clickOutside } from '$lib/clickOutside';
	import { quintOut } from 'svelte/easing';

	//Booleans
	let showMenu = false;

	// Booleans
	let showMobileNav = false;

	// Variables
	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<nav
	class="fixed top-0 left-0 w-full pt-3 lg:pt-5 pb-3 lg:pb-5 z-50 transition-all duration-300 {y <
	30
		? 'bg-transparent shadow-none'
		: 'bg-white opacity-[0.98] shadow-md'} px-5"
>
	<div class="relative container_xl">
		<div class="relative flex flex-row items-center justify-between">
			<div class="flex-1">
				{#if y < 30}
					<a href="/">
						<img src="/ccl_logo_white.png" alt="Connie Chadwick Law" class="h-12 lg:h-16" />
					</a>
				{:else}
					<a href="/">
						<img src="/ccl_logo2.png" alt="Connie Chadwick Law" class="h-12 lg:h-16" />
					</a>
				{/if}
			</div>
			<div class="relative flex-1 hidden lg:block">
				<ul class="relative flex items-center justify-end">
					<li use:clickOutside on:click_outside={() => (showMenu = false)} class="relative">
						<a
							on:click|preventDefault={() => (showMenu = !showMenu)}
							href="."
							class={y < 30 ? 'text-white' : 'text-black'}
						>
							Practice Areas <i
								class="transition-all duration-500 fa-light fa-angle-down {y < 30
									? 'text-white'
									: 'text-black'} {showMenu ? 'rotate-180' : 'rotate-0'}"
							/></a
						>
						{#if showMenu}
							<div
								transition:fade={{ duration: 300 }}
								class="bg-white rounded-xl p-5 shadow-xl absolute top-10 left-0 w-[230px]"
							>
								<ul>
									<li class="text-sm leading-relaxed">
										<a
											on:click={() => (showMenu = false)}
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/estate-planning"
										>
											Estate Planning
										</a>
									</li>
									<li class="text-sm leading-relaxed">
										<a
											on:click={() => (showMenu = false)}
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/business-services"
										>
											Business Services
										</a>
									</li>
									<li class="text-sm leading-relaxed">
										<a
											on:click={() => (showMenu = false)}
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/divorce"
										>
											Divorce
										</a>
									</li>
									<li class="text-sm leading-relaxed">
										<a
											on:click={() => (showMenu = false)}
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/real-estate"
										>
											Real Estate
										</a>
									</li>
									<li class="text-sm leading-relaxed">
										<a
											on:click={() => (showMenu = false)}
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/human-resources-and-labor-issues"
										>
											Human Resources & Labor Issues
										</a>
									</li>
									<li class="text-sm leading-relaxed">
										<a
											on:click={() => (showMenu = false)}
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/contact-consultation"
										>
											Contract Consultation
										</a>
									</li>
								</ul>
							</div>
						{/if}
					</li>

					<li class="text-base ml-10">
						<a href="/about" class={y < 30 ? 'text-white' : 'text-black'}> About </a>
					</li>
					<li class="text-base ml-10">
						<a href="/contact" class={y < 30 ? 'text-white' : 'text-black'}> Contact </a>
					</li>
					<li class="ml-10 text-base {y < 30 ? 'text-white' : 'text-black'}">
						<a href="tel:6154172129">
							<i class="fa-light fa-phone-rotary mr-1" />
							615-417-2129
						</a>
					</li>
				</ul>
			</div>
			<div class="block lg:hidden">
				<a on:click|preventDefault={() => (showMobileNav = true)} href="." class="ml-3">
					<i class="fa-regular fa-bars text-3xl {y < 30 ? 'text-white' : 'text-black'}" />
				</a>
			</div>
		</div>
	</div>
</nav>

{#if showMobileNav}
	<div class="fixed top-0 bottom-0 left-0 w-full flex justify-center items-center">
		<ul>
			<li class="text-center font-montserrat font-light text-xl leading-loose">
				<a href="/" class="text-white">Home</a>
			</li>
			<li class="text-center font-montserrat font-light text-xl leading-loose">
				<a href="/about" class="text-white">About</a>
			</li>
			<li class="text-center font-montserrat font-light text-xl leading-loose">
				<a href="/contact" class="text-white">Contact</a>
			</li>
			<li class="text-center font-montserrat font-light text-xl leading-loose">
				<a href="/contact" class="text-white">Services</a>
				<ul>
					<li class="text-center font-montserrat font-light text-lg leading-loose">
						<a href="/estate-planning" class="text-white">Estate Planning</a>
					</li>
					<li class="text-center font-montserrat font-light text-lg leading-loose">
						<a href="/business-services" class="text-white">Business Services</a>
					</li>
					<li class="text-center font-montserrat font-light text-lg leading-loose">
						<a href="/real-estate" class="text-white">Real Estate</a>
					</li>
					<li class="text-center font-montserrat font-light text-lg leading-loose">
						<a href="/divorce" class="text-white">Divorce</a>
					</li>
					<li class="text-center font-montserrat font-light text-lg leading-loose">
						<a href="/human-resources-and-labor-issues" class="text-white"
							>Human Resources and Labor Issues</a
						>
					</li>
					<li class="text-center font-montserrat font-light text-lg leading-loose">
						<a href="/contract-consultation" class="text-white">Contact Consultation</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
{/if}

<style>
	li {
		@apply font-montserrat font-normal;
	}
</style>
