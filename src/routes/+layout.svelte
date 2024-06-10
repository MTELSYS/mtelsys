<script lang="ts">
	import '../app.css';
	import '$lib/scss/globals.scss';

	import {
    GradientButton,
		Navbar,
		NavHamburger,
		NavUl,
		NavLi,
		NavBrand,
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon
	} from 'flowbite-svelte';
	import { FacebookSolid, GithubSolid, InstagramSolid } from 'flowbite-svelte-icons';
</script>

<Navbar class="px-2 sm:px-4 py-2.5 relative w-full z-20 top-0 start-0 border-b">
	<NavBrand href="/">
		<img src="images/elsys-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Elsys Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold">MTELSYS</span>
	</NavBrand>
  <div class="flex md:order-2">
    <GradientButton href="/join" color="greenToBlue" size="sm">Join the team</GradientButton>
    <NavHamburger />
  </div>
	<NavUl class="order-1 background-none">
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/tools">Tools</NavLi>
		<NavLi href="/about">About</NavLi>
	</NavUl>
</Navbar>

<main>
	<slot />
</main>

<Footer class="absolute bottom-0 w-full" footerType="socialmedia">
  <div class="md:flex md:justify-between">
    <div class="mb-6 md:mb-0">
      <FooterBrand href="/" src="images/elsys-icon-logo.svg" alt="MTELSYS Logo" name="MTELSYS" />
    </div>
    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="https://www.ntnu.no/studier/mtelsys">MTELSYS</FooterLink>
          <FooterLink liClass="mb-4" href="https://www.etdagene.no">E&T-dagene</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="https://github.com/mtelsys">GitHub</FooterLink>
          <FooterLink liClass="mb-4" href="https://www.instagram.com/elsysntnu/">Instagram</FooterLink>
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by="MTELSYS" />
    <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
      <FooterIcon href="https://www.facebook.com/elsysNTNU">
        <FacebookSolid color="primary" class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="https://www.instagram.com/elsysntnu/">
        <InstagramSolid color="primary" class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="https://github.com/mtelsys">
        <GithubSolid color="primary" class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
    </div>
  </div>
</Footer>

<style global lang="scss">
  h1, h2, h3, h4, h5, h6, p, span {
    color: $black;
  }

  main {
		padding-inline: 1rem;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		padding-bottom: 500px;

		@include desktop {
			max-width: 960px;
		}
	}
</style>