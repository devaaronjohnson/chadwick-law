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
							Services <i
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
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/estate-planning"
										>
											Estate Planning
										</a>
									</li>
									<li class="text-sm leading-relaxed">
										<a
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/business-services"
										>
											Business Services
										</a>
									</li>
									<li class="text-sm leading-relaxed">
										<a
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/family"
										>
											Family
										</a>
									</li>
									<li class="text-sm leading-relaxed">
										<a
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/real-estate"
										>
											Real Estate
										</a>
									</li>
									<li class="text-sm leading-relaxed">
										<a
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/about"
										>
											Human Resources & Labor Issues
										</a>
									</li>
									<li class="text-sm leading-relaxed">
										<a
											class="text-black hover:text-brandOrange transition-all duration-300 font-normal"
											href="/about"
										>
											Contract Consultation
										</a>
									</li>
								</ul>
							</div>
						{/if}
					</li>

					<li class="pl-10 text-base ml-6">
						<a href="/about" class={y < 30 ? 'text-white' : 'text-black'}> About </a>
					</li>
					<li class="pl-10 text-base ml-6">
						<a href="/contact" class={y < 30 ? 'text-white' : 'text-black'}> Contact </a>
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

<style>
	li {
		@apply font-montserrat font-normal;
	}
</style>
