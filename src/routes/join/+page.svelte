<script lang="ts">
	import { GradientButton, Input, Label, Spinner, Toast } from 'flowbite-svelte';
	import {
		PaperPlaneOutline,
		CloseCircleSolid,
		EnvelopeSolid,
		UserSolid
	} from 'flowbite-svelte-icons';

	import { enhance } from '$app/forms';
	let loading: boolean = false;

	type ToastType = 'success' | 'error';
	let showToast: boolean = false;
	let toastType: ToastType;
	let toastTimeOutSeconds = 5;

	const timeout: any = () => {
		if (--toastTimeOutSeconds > 0) return setTimeout(timeout, 1000);
		showToast = false;
	};
</script>

<section id="header" class="flex w-full flex-col justify-center gap-y-1 text-center md:gap-y-4">
	<h2 class="font-bold text-black">Join the team</h2>
	<span id="header--subtitle" class="text-black-300">And collaborate on the Elsys toolset</span>
</section>

<section id="form">
	<form
		method="POST"
		class="flex flex-col"
		on:submit={() => (loading = true)}
		use:enhance={() => {
			return async ({ result }) => {
				loading = false;
				showToast = true;
				toastTimeOutSeconds = 5;
				timeout();
				if (result.type === 'error' || result.type === 'failure') {
					console.error('Failed to authenticate user');
					toastType = 'error';
				} else if (result.type === 'success') {
					toastType = 'success';
				}
			};
		}}
	>
		<Label for="username" class="mb-2 block">GitHub Username</Label>
		<Input required id="username" name="username" type="text" placeholder="olanordmann">
			<UserSolid slot="left" class="h-5 w-5 text-gray-400 dark:text-gray-400" />
		</Input>

		<Label for="email" class="mb-2 mt-6 block">GitHub Email</Label>
		<Input required id="email" name="email" type="email" placeholder="kari@nordmann.no">
			<EnvelopeSolid slot="left" class="h-5 w-5 text-gray-400 dark:text-gray-400" />
		</Input>

		{#if !showToast}
			<GradientButton class="mt-6" color="greenToBlue" type="submit">
				{#if loading}
					<Spinner class="me-3" size={5} />
				{:else}
					<PaperPlaneOutline class="me-3" />
				{/if}
				Request Invite
			</GradientButton>
		{:else}
			<span class="mt-6 w-full text-center text-danger">Retry in {toastTimeOutSeconds}s</span>
		{/if}
	</form>
</section>

{#if showToast && toastType === 'success'}
	<Toast color="green" class="fixed bottom-5 right-5 z-10">
		<svelte:fragment slot="icon">
			<PaperPlaneOutline class="h-5 w-5" />
			<span class="sr-only">Check icon</span>
		</svelte:fragment>
		Application sent
		<span class="ml-1 text-black-100">(Closing in {toastTimeOutSeconds}s)</span>
	</Toast>
{:else if showToast && toastType === 'error'}
	<Toast dismissable={false} color="red" class="fixed bottom-5 right-5 z-10">
		<svelte:fragment slot="icon">
			<CloseCircleSolid class="h-5 w-5" />
			<span class="sr-only">Error icon</span>
		</svelte:fragment>
		Non-existing user
		<span class="ml-1 text-black-100">(Closing in {toastTimeOutSeconds}s)</span>
	</Toast>
{/if}

<style lang="scss">
	#header {
		height: 25vh;

		span {
			@include desktop {
				font-size: 20px;
				line-height: 28px;
			}
		}
	}

	#toast {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
</style>
