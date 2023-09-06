<script>
	// Components
	import { Header, Footer } from '$components';

	// Tailwind
	import '../styles/tailwind-output.css';

	// Webfonts
	import '../styles/all.css';
</script>

<Header />
<slot />
<Footer />
