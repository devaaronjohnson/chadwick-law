<script>
	import { fade } from 'svelte/transition';
	import { clickOutside } from '$lib/clickOutside';
	//Booleans
	let showPersonalMenu = false;
	let showBusinessMenu = false;
</script>

<nav class="relative pt-5 pb-5">
	<div class="w-full max-w-screen-xl mx-auto">
		<div class="flex flex-row items-center justify-between">
			<div class="flex-1">
				<a href="/">
					<img src="/ccl_logo2.png" alt="Connie Chadwick Law" class="h-16" />
				</a>
			</div>
			<div id="nav" class="flex-1">
				<ul class="flex items-center justify-end">
					<li>
						<a on:click|preventDefault={() => (showBusinessMenu = true)} href=".">
							Business <i class="fa-light fa-angle-down" /></a
						>
					</li>
					<li>
						<a on:click|preventDefault={() => (showPersonalMenu = true)} href=".">
							Personal <i class="fa-light fa-angle-down" /></a
						>
					</li>
					<li>
						<a href="/about"> About </a>
					</li>
					<li>
						<a href="/contact"> Contact </a>
					</li>
				</ul>
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

<style>
	#nav li {
		@apply font-montserrat font-normal text-base ml-10;
	}
</style>
