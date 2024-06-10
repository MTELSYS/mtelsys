<script lang="ts">
  import { Avatar, Badge, Button, Card, Popover } from 'flowbite-svelte'
	import type { LayoutData } from '../$types';
  export let data: LayoutData;

  const avatarStackLimit = 4

  let isDown = false
  let topicsContainer: HTMLDivElement
  let startX: number
  let scrollLeft: number

  const handleMouseDown = (event: MouseEvent) => {
    isDown = true
    startX = event.pageX - topicsContainer.offsetLeft
    scrollLeft = topicsContainer.scrollLeft
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDown) return
    const x = event.pageX - topicsContainer.offsetLeft
    const walk = (x - startX) * 3
    topicsContainer.scrollLeft = scrollLeft - walk
    console.log(walk)
  } 
  </script>

<section id="header" class="w-full flex flex-col justify-center text-center gap-y-1 md:gap-y-4">
  <h2 class="text-black font-bold">Toolset</h2>
</section>

<section id="grid" class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each data.repos as repo}
    <Card href={!!repo.homepage ? repo.homepage : repo.html_url} class="flex justify-between">
      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{repo.name}</h5>
        <p class="font-normal lg:text-sm text-gray-700 dark:text-gray-400 leading-tight">{repo.description ?? 'Missing description'}</p>
        
        <div id="topics" class="w-full mt-2">
          {#each repo.topics.slice(0, 3) as topic}
            <Badge color="blue" border rounded class="px-2.5 py-0.5 inline-block me-1.5">
                {topic}
            </Badge>
          {/each}
        </div>
      </div>
      
      {#if !!repo.contributors}
        <div id="avatars" class="flex justify-start mx-2 mt-3">
          {#each repo.contributors as { avatar_url, html_url, login }, i}
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

          {#if repo.contributors.length > avatarStackLimit}
            <Avatar stacked class="bg-gray-700 text-white hover:bg-gray-600 text-sm">+{data.members.length - avatarStackLimit}</Avatar>
          {/if}
        </div>
      {:else}
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">No contributors</p>
      {/if}
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

  #topics::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
</style>