<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let isLoading = false;
</script>

<form
	method="POST"
	action="?/login"
	use:enhance={({ formElement, formData, action, cancel }) => {
		isLoading = true;

		console.log(formElement, formData, action, cancel);

		return ({ result, update }) => {
			if (result.type === 'redirect') {
				applyAction(result);
			} else if (result.type === 'error') {
				// do something
			} else {
				isLoading = false;

				update();
			}
		};
	}}
>
	<input id="username" name="username" placeholder="Username" value={form?.username || ''} />
	{#if form?.usernameMissing}
		<p style="margin-bottom: 0;">Username is required</p>
	{/if}
	<br /><br />
	<input
		id="password"
		name="password"
		placeholder="Password"
		type="password"
		value={form?.password || ''}
	/>
	{#if form?.passwordMissing}
		<p style="margin-bottom: 0;">Password is required</p>
	{/if}
	<br /><br />

	<button type="submit" disabled={isLoading}>Login</button>
</form>
