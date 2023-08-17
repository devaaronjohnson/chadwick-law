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
					<p>Connie Chadwick Law`</p>
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
					<li>About</li>
					<li>Contact</li>
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
		class="w-full absolute top-16 left-0 w-full bg-gray-200 pt-10 pb-10"
	>
		<div class="w-full max-w-screen-xl mx-auto">
			<div class="grid grid-cols-4 gap-10">
				<div>
					<p class="font-montserrat font-bold text-base">Wills and trusts</p>
					<ul>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/last-will"
							>
								Last will and testament
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
					<p class="font-montserrat font-bold text-base">Family</p>
					<ul>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/last-will"
							>
								Divorce
							</a>
						</li>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/living-trust"
							>
								Name Change
							</a>
						</li>
					</ul>
				</div>
				<div>
					<p class="font-montserrat font-bold text-base">Real Estate</p>
					<ul>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/last-will"
							>
								Residential Lease
							</a>
						</li>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/living-trust"
							>
								Property deed transfer
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
		class="w-full absolute top-16 left-0 w-full bg-gray-400 pt-10 pb-10"
	>
		<div class="w-full max-w-screen-xl mx-auto">
			<div class="grid grid-cols-4 gap-10">
				<div>
					<p class="font-montserrat font-bold text-base">Wills and trusts</p>
					<ul>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/last-will"
							>
								Last will and testament
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
					<p class="font-montserrat font-bold text-base">Family</p>
					<ul>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/last-will"
							>
								Divorce
							</a>
						</li>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/living-trust"
							>
								Name Change
							</a>
						</li>
					</ul>
				</div>
				<div>
					<p class="font-montserrat font-bold text-base">Real Estate</p>
					<ul>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/last-will"
							>
								Residential Lease
							</a>
						</li>
						<li>
							<a
								on:click={() => (showPersonalMenu = false)}
								href="/personal/estate-planning/living-trust"
							>
								Property deed transfer
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
