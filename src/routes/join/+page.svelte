<script lang="ts">
  import { GradientButton, Input, Label,  Spinner } from 'flowbite-svelte';
  import { EnvelopeSolid, PaperPlaneSolid, UserSolid } from 'flowbite-svelte-icons';

  import { enhance } from '$app/forms'
  let loading: boolean = false
</script>


<section id="header" class="w-full flex flex-col justify-center text-center gap-y-1 md:gap-y-4">
  <h2 class="text-black font-bold">Join the team</h2>
  <span id="header--subtitle" class="text-black-300">And collaborate on the Elsys toolset</span>
</section>

<section id="form">
  <form method="POST" class="flex flex-col" on:submit={() => loading = true} use:enhance={({formData, action}) => {
    return async ({ result }) => {
      if (result.type === 'success') {
        loading = false
      }
    }
  }}>
    <Label for="username" class="block mb-2">GitHub Username</Label>
    <Input required id="username" name="username" type="text" placeholder="olanordmann">
      <UserSolid slot="left" class="w-5 h-5 text-gray-400 dark:text-gray-400" />
    </Input>

    <Label for="email" class="block mb-2 mt-6">GitHub Email</Label>
    <Input required id="email" name="email" type="email" placeholder="kari@nordmann.no">
      <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-400 dark:text-gray-400" />
    </Input>

    <GradientButton class="mt-6" color="greenToBlue" type="submit">
      {#if loading}
        <Spinner class="me-3" size={5}/>
      {:else}
        <PaperPlaneSolid class="me-3"/>
      {/if}
      Request Invite
    </GradientButton>
  </form>
</section>

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

</style>