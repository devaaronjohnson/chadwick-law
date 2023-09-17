<script>
	import { fly, fade } from 'svelte/transition';
	import { clickOutside } from '$lib/clickOutside';
	import { quintOut } from 'svelte/easing';

	//Booleans
	let showPersonalMenu = false;
	let showBusinessMenu = false;

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
	<div class="container_xl">
		<div class="flex flex-row items-center justify-between">
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
			<div class="flex-1 hidden lg:block">
				<ul class="flex items-center justify-end">
					<li>
						<a
							on:click|preventDefault={() => (showBusinessMenu = true)}
							href="."
							class={y < 30 ? 'text-white' : 'text-black'}
						>
							Business <i
								class="fa-light fa-angle-down {y < 30 ? 'text-white' : 'text-black'}"
							/></a
						>
					</li>
					<li class="pl-10">
						<a
							on:click|preventDefault={() => (showPersonalMenu = true)}
							href="."
							class={y < 30 ? 'text-white' : 'text-black'}
						>
							Personal <i
								class="fa-light fa-angle-down {y < 30 ? 'text-white' : 'text-black'}"
							/></a
						>
					</li>
					<li class="pl-10">
						<a href="/about" class={y < 30 ? 'text-white' : 'text-black'}> About </a>
					</li>
					<li class="pl-10">
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

{#if showPersonalMenu}
	<div
		in:fade={{ duration: 300 }}
		use:clickOutside
		on:click_outside={() => (showPersonalMenu = false)}
		class="w-full absolute top-16 left-0 w-full bg-white pt-10 pb-10 shadow-xl"
	>
		<div class="w-full max-w-screen-xl mx-auto">
			<div class="grid grid-cols-4 gap-10">
				<div>
					<p class="font-montserrat font-bold text-base mb-3">
						<a on:click={() => (showPersonalMenu = false)} href="/personal/estate-planning"
							>Estate Planning</a
						>
					</p>
					<ul>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/last-will"
							>
								Last will
							</a>
						</li>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/living-trust"
							>
								Living trust
							</a>
						</li>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/power-of-attorney"
							>
								Power of attorney
							</a>
						</li>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/living-will"
							>
								Living will
							</a>
						</li>
					</ul>
				</div>
				<div>
					<p class="font-montserrat font-bold text-base mb-3">
						<a on:click={() => (showPersonalMenu = false)} href="/personal/family">Family</a>
					</p>
					<ul>
						<li>
							<a on:click={() => (showPersonalMenu = false)} href="/personal/family/divorce">
								Divorce
							</a>
						</li>
						<!-- <li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/living-trust"
							>
								Name Change
							</a>
						</li> -->
					</ul>
				</div>
				<div>
					<p class="font-montserrat font-bold text-base mb-3">
						<a on:click={() => (showPersonalMenu = false)} href="/personal/family">Real Estate</a>
					</p>
					<ul>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/last-will"
							>
								Coming soon!
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
{/if}

{#if showBusinessMenu}
	<div
		in:fade={{ duration: 300 }}
		use:clickOutside
		on:click_outside={() => (showBusinessMenu = false)}
		class="w-full absolute top-16 left-0 w-full bg-white pt-10 pb-10 shadow-xl"
	>
		<div class="w-full max-w-screen-xl mx-auto">
			<div class="grid grid-cols-4 gap-10">
				<div>
					<p class="font-montserrat font-bold text-base mb-3">
						<a on:click={() => (showBusinessMenu = false)} href="/business-formation"
							>Business Formation</a
						>
					</p>
					<ul>
						<li>
							<a on:click={() => (showBusinessMenu = false)} href="/business-formation/llc">
								Limited liability company (LLC)
							</a>
						</li>
						<li>
							<a on:click={() => (showBusinessMenu = false)} href="/business-formation/inc">
								Corporation (C corp, S corp)
							</a>
						</li>
						<li>
							<a on:click={() => (showBusinessMenu = false)} href="/business-formation/dba">
								Doing business as (DBA)
							</a>
						</li>
					</ul>
				</div>
				<div>
					<p class="font-montserrat font-bold text-base mb-3">
						<a on:click={() => (showBusinessMenu = false)} href="/personal/family">Family</a>
					</p>
					<ul>
						<li>
							<a
								on:click={() => (showBusinessMenu = false)}
								href="/personal/estate-planning/last-will"
							>
								Divorce
							</a>
						</li>
						<li>
							<a
								on:click={() => (showBusinessMenu = false)}
								href="/personal/estate-planning/living-trust"
							>
								Name Change
							</a>
						</li>
					</ul>
				</div>
				<div>
					<p class="font-montserrat font-bold text-base mb-3">
						<a on:click={() => (showBusinessMenu = false)} href="/personal/family">Real Estate</a>
					</p>
					<ul>
						<li>
							<a
								on:click={() => (showBusinessMenu = false)}
								href="/personal/estate-planning/last-will"
							>
								Coming soon!
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
{/if}

{#if showMobileNav}
	<div
		in:fly={{ duration: 750, x: 1000, easing: quintOut, opacity: 1 }}
		out:fade={{ duration: 300 }}
		class="fixed top-0 left-0 bottom-0 w-full bg-black z-50 px-8 pt-28 overflow-y-scroll"
	>
		<a href="." on:click|preventDefault={() => (showMobileNav = false)}>
			<i class="fa-regular fa-xmark text-4xl text-white absolute top-5 right-5" />
		</a>
		<ul class="relative flex flex-col items-end w-full">
			<li
				class="font-oregon font-medium text-white text-2xl py-3 transition-all duration-200 hover:text-brandRed"
			>
				<a
					on:click={() => {
						animateScroll.scrollTo({ element: '#top', duration: 1000, offset: -150 });
						showMobileNav = false;
					}}
					href="."
				>
					Home
				</a>
			</li>
			<li
				class="font-oregon font-medium text-white text-2xl py-3 transition-all duration-200 hover:text-brandRed text-right"
			>
				<a
					on:click={() => {
						animateScroll.scrollTo({ element: '#serviceList', duration: 1000, offset: -150 });
						showMobileNav = false;
					}}
					href="."
				>
					Estate Planning
				</a>
				<ul class="mt-2">
					<li class="font-montserrat font-normal text-white text-lg text-right">
						<a
							href="/estate-planning/last-will"
							class="text-white opacity-50 transition-all duration-200 hover:opacity-100"
							>Last Will</a
						>
					</li>
					<li class="font-montserrat font-normal text-white text-lg text-right">
						<a
							href="/estate-planning/living-trust"
							class="text-white opacity-50 transition-all duration-200 hover:opacity-100"
							>Living Trust</a
						>
					</li>
					<li class="font-montserrat font-normal text-white text-lg text-right">
						<a
							href="/estate-planning/living-will"
							class="text-white opacity-50 transition-all duration-200 hover:opacity-100"
							>Living Will</a
						>
					</li>
					<li class="font-montserrat font-normal text-white text-lg text-right">
						<a
							href="/estate-planning/power-of-attorney"
							class="text-white opacity-50 transition-all duration-200 hover:opacity-100"
							>Power of Attorney</a
						>
					</li>
				</ul>
			</li>
			<li
				class="font-oregon font-medium text-white text-2xl py-3 transition-all duration-200 hover:text-brandRed"
			>
				<a
					on:click={() => {
						animateScroll.scrollTo({ element: '#pricing', duration: 1000, offset: -130 });
						showMobileNav = false;
					}}
					href="."
				>
					Business Services
				</a>
			</li>
			<li
				class="font-oregon font-medium text-white text-2xl py-3 transition-all duration-200 hover:text-brandRed"
			>
				<a
					on:click={() => {
						animateScroll.scrollTo({ element: '#form', duration: 1000, offset: -50 });
						showMobileNav = false;
					}}
					href="."
				>
					Family
				</a>
			</li>
			<li
				class="font-oregon font-medium text-white text-2xl py-3 transition-all duration-200 hover:text-brandRed"
			>
				<a
					on:click={() => {
						animateScroll.scrollTo({ element: '#form', duration: 1000, offset: 730 });
						showMobileNav = false;
					}}
					href="."
				>
					Real Estate
				</a>
			</li>
			<li
				class="font-oregon font-medium text-white text-2xl py-3 transition-all duration-200 hover:text-brandRed"
			>
				<a
					on:click={() => {
						animateScroll.scrollTo({ element: '#form', duration: 1000, offset: 730 });
						showMobileNav = false;
					}}
					href="."
				>
					Human Resources & Labor
				</a>
			</li>
			<li
				class="font-oregon font-medium text-white text-2xl py-3 transition-all duration-200 hover:text-brandRed"
			>
				<a
					on:click={() => {
						animateScroll.scrollTo({ element: '#form', duration: 1000, offset: 730 });
						showMobileNav = false;
					}}
					href="."
				>
					Contract Consultation
				</a>
			</li>
		</ul>
	</div>
{/if}

<style>
	#nav li {
		@apply font-montserrat font-normal text-base ml-10;
	}
</style>
