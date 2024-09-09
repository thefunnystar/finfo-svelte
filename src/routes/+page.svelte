<script>
	import { onMount } from 'svelte';
	import { user } from '$stores/user';

	onMount(() => {
		if ($user.isLoggedIn) {
			window.location.href = '/contacts';
		} else {
			window.location.href = '/logged-out';
		}
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
