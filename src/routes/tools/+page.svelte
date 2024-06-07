<script lang="ts">
  import { Avatar, Card } from 'flowbite-svelte'
	import type { LayoutData } from '../$types';
  export let data: LayoutData;

  async function getContributors(repo: any) {
    const response = await fetch(repo.contributors_url)
    const contributors = await response.json()

    return contributors
  }
  
  const avatarStackLimit = 4
</script>

<section id="header" class="w-full flex flex-col justify-center text-center gap-y-1 md:gap-y-4">
  <h2 class="text-black font-bold">Toolset</h2>
</section>

<section id="grid" class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
  {#each data.repos as repo}
    <Card href={repo.homepage ?? repo.html_url} class="flex justify-between">
      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{repo.name}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{repo.description ?? 'Missing description'}</p>
      </div>
      
      {#await getContributors(repo) then contributors}
        <div id="avatars" class="flex justify-start mx-2 mt-4">
          {#each contributors as { avatar_url }, i}
            {#if i < avatarStackLimit}
              <Avatar src={avatar_url} stacked />
            {/if}
          {/each}

          {#if contributors.length > avatarStackLimit}
            <Avatar stacked class="bg-gray-700 text-white hover:bg-gray-600 text-sm">+{data.members.length - avatarStackLimit}</Avatar>
          {/if}
        </div>
      {:catch error}
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Failed to fetch contributors</p>
      {/await}
    </Card>
  {/each}
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