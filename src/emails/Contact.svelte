<script>
	import { Button, Hr, Html, Text } from 'svelte-email';

	// Props
	export let name;
	export let email;
	export let phone;
	export let service;
	export let message;
</script>

<Html lang="en">
	<Text>Name: {name}</Text>
	<Text>Email: {email}</Text>
	<Text>Phone: {phone}</Text>
	<Text>Service: {service}</Text>
	<Text>Message: {message}</Text>
</Html>
