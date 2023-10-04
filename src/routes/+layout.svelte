<script>
	import { page } from '$app/stores';

	// Components
	import { Header, Footer } from '$components';

	// Tailwind
	import '../styles/tailwind-output.css';

	// Webfonts
	import '../styles/all.min.css';
</script>

<Header />
<slot />
{#if $page.url.pathname !== '/thank-you'}
	<Footer />
{/if}
