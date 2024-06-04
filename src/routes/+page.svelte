<script lang="ts">
  import { Avatar, Button, Card, Carousel, GradientButton } from 'flowbite-svelte'
	import { ArrowRightOutline, GithubSolid } from 'flowbite-svelte-icons'
  import type { LayoutData } from './$types';
	import type { HTMLImgAttributes } from 'svelte/elements';
	
	export let data: LayoutData;

  const maximumReposInCarousel = 5
  const parseReposToCarousel = (repositories: any) => {
    const limitedRepos = repositories.slice(0, maximumReposInCarousel)

    const parseEntry = (repo: any) => {
      const { name, html_url } = repo
      const entry = {
        title: name,
        link: html_url,
        src: '/images/elsys-icon-logo.svg',
      }

      return entry
    }
    return limitedRepos.map(parseEntry)
  }

  $: images = parseReposToCarousel(data.repos)

  let currentShownRepo: HTMLImgAttributes;
  const avatarStackLimit = 4
</script>

<section id="hero" class="w-full flex flex-col justify-center text-center">
  <h1 class="text-black font-bold">Welcome Elsys students 👋</h1>
  <span class="text-black-300">To an ensamble of tools created by students, for students</span>
  <div>
    <GradientButton href="/tools" color="greenToBlue" class="mt-12">
      Go to the tools <ArrowRightOutline class="w-5 h-5 ms-2" />
    </GradientButton>
  </div>
</section>

<section id="carousel" class="w-full flex flex-col gap-4 my-8 rounded-lg">
  <h2 class="font-semibold text-center">Popular tools</h2>
  <div class="w-full relative">
    <Carousel images={images} duration={5000} let:Indicators let:Controls on:change={({ detail }) => (currentShownRepo = detail)}>
      <a slot="slide" href={images[index]?.link} target="_blank" let:Slide let:index>
        <Slide image={images[index]} />
        <div id="carousel--card__overlay" class="absolute bottom-0 px-6 py-8 bg-gradient-to-t from-black-700 to-none to-100% flex flex-col justify-end">
          <h1 id="carousel--card__title" class="text-white">
            {currentShownRepo?.title}
          </h1>
        </div>
      </a>
      <Indicators class="z-50"/>
      <Controls />
    </Carousel>
  </div>
</section>

<section id="contributions" class="w-full flex flex-col gap-4 my-8 text-center">
  <h2 class="font-semibold">Contributors</h2>
  <div class="flex justify-center">
    {#each data.members as { avatar_url }, i}
      {#if i < avatarStackLimit}
        <Avatar src={avatar_url} stacked />
      {/if}
    {/each}

    {#if data.members.length > avatarStackLimit}
      <Avatar stacked href="/" class="bg-gray-700 text-white hover:bg-gray-600 text-sm">+{data.members.length - avatarStackLimit}</Avatar>
    {/if}
  </div>
</section>

<section id="join" class="flex gap-4 my-8">
  <Card class="text-center" size="lg" padding="xl">
  <h5 class="mb-2 text-xl md:text-3xl font-bold text-gray-900 dark:text-white">Contribute to the cause</h5>
  <p class="mb-5 text-base text-gray-500 text-sm md:text-md dark:text-gray-400">Share your tools to help other Elsys students get though your previous struggles.</p>
  <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
    <GradientButton href="/join" color="greenToBlue">
      <GithubSolid class="w-6 h-6 me-2" />
      Join the team
    </GradientButton>
  </div>
</Card>
</section>

<style lang="scss">
  #hero {
    height: 50vh;

    @include desktop {
      height: 560px;
    }
  }

  #carousel {
    width: 100%;
    overflow: hidden;

    &--card__overlay {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    &--card__title {
      max-width: 60%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @include desktop {
      max-width: 600px;
    }
  }
</style>