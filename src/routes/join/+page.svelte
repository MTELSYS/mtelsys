<script lang="ts">
  import { GradientButton, Input, Label } from 'flowbite-svelte';
  import { EnvelopeSolid } from 'flowbite-svelte-icons';
</script>


<section id="header" class="w-full flex flex-col justify-center text-center gap-y-1 md:gap-y-4">
  <h2 class="text-black font-bold">Join the team</h2>
  <span id="header--subtitle" class="text-black-300">And collaborate on the Elsys toolset</span>
</section>

<section id="form">
  <form method="POST">
    <Label for="username" class="block mb-2">GitHub username</Label>
    <Input required id="username" name="username" type="text" placeholder="olanordmann">
      <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-400 dark:text-gray-400" />
    </Input>

    <Label for="email" class="block mb-2">GitHub Email</Label>
    <Input required id="email" name="email" type="email" placeholder="kari@nordmann.no">
      <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-400 dark:text-gray-400" />
    </Input>

    <GradientButton>Request invite</GradientButton>
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