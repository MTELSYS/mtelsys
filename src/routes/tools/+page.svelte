<script lang="ts">
  import { Avatar, Button, Card, Popover } from 'flowbite-svelte'
	import type { LayoutData } from '../$types';
  export let data: LayoutData;

  // TODO: Refactor to use octokit instead of fetch
  // async function getContributors(repo: any) {
  //   const response = await fetch(repo.contributors_url)
  //   const contributors = await response.json()
    
  //   return contributors
  // }

  // console.log(data.repos.contributors)
  const avatarStackLimit = 4
</script>

<section id="header" class="w-full flex flex-col justify-center text-center gap-y-1 md:gap-y-4">
  <h2 class="text-black font-bold">Toolset</h2>
</section>

<section id="grid" class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each data.repos as repo}
    <Card href={!!repo.homepage ? repo.homepage : repo.html_url} class="flex justify-between">
      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{repo.name}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{repo.description ?? 'Missing description'}</p>
      </div>
      
      <!-- {#await getContributors(repo)}
        <span>Loading contributors</span>
      {:then contributors}
        <div id="avatars" class="flex justify-start mx-2 mt-4">
          {#each contributors as { avatar_url, html_url, login }, i}
            {#if i < avatarStackLimit}
              <Avatar id={"user" + i} src={avatar_url} stacked />
              <Popover triggeredBy={"#user" + i} class="w-64 text-sm font-light text-gray-500 bg-white dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div class="p-3">
                  <div class="flex justify-between items-center mb-2">
                    <Avatar src={avatar_url} alt={login} />
                    <Button href={html_url} size="xs">View Profile</Button>
                  </div>
                  <div class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                    <a href="/">{login}</a>
                  </div>
                  <div class="mb-3 text-sm font-normal">
                    <a href={html_url} class="hover:underline">@{login}</a>
                  </div>
                </div>
              </Popover>
            {/if}
          {/each}

          {#if contributors.length > avatarStackLimit}
            <Avatar stacked class="bg-gray-700 text-white hover:bg-gray-600 text-sm">+{data.members.length - avatarStackLimit}</Avatar>
          {/if}
        </div>
      {:catch error}
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Failed to fetch contributors</p>
      {/await} -->
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