<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';

	let username = '';
	let password = '';

	const login = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password
			})
		});

		const resJson = await response.json();

		if (response.ok) {
			// goto('/products', {
			// 	invalidateAll: true
			// });
			invalidateAll(); // because we already managed in the load function to redirect to that url
		} else {
			alert(resJson.message);
		}
	};
</script>

<form on:submit|preventDefault={login}>
	<input bind:value={username} id="username" name="username" placeholder="Username" /><br /><br />
	<input
		bind:value={password}
		id="password"
		name="password"
		placeholder="Password"
		type="password"
	/>
	<br /><br />
	<button type="submit">Login</button>
</form>
