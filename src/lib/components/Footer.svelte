<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import IconGithub from '~icons/fa-brands/github';
  import IconChimp from '~icons/fa-brands/mailchimp'

	export let settings: Content.SettingsDocument;

	// console.log('settings: ', settings, settings.data.social_link_1.url);
</script>

<footer class="text-slate-600">
	<div
		class="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row"
	>
		<div
			class="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-start"
		>
			<a
				href="/"
				class="text-xl font-extrabold tracking-tighter text-slate-100 transition-color durationn-150 hover:text-yellow-400"
				>WQ Map</a
			>
			<span
				class="hidden text-2xl fot-extralight leading-[0] text-slate-400 sm:inline"
				aria-hidden="true">/</span
			>
			<p class="text-sm text-slate-300">
				© {new Date().getFullYear()}
				{settings.data.name}
			</p>
		</div>
		<div class="navigation" aria-label="Footer Navigation">
			<ul class="flex items-center gap-1">
				{#each settings.data.nav_item as { link, label }, index}
					<li>
						<PrismicLink
							field={link}
							class="block px-3 py-1 text-base font-bold text-slate-100 transition-color duration-150 hover:text-yellow-400"
							>{label}</PrismicLink
						>
					</li>
					{#if index < settings.data.nav_item.length - 1}
						<span
							class="hidden text-2xl fot-extralight leading-[0] text-slate-400 sm:inline"
							aria-hidden="true">/</span
						>
					{/if}
				{/each}
			</ul>
		</div>
		<!-- <div class="socials text-slate-100 flex"> -->
		<div class="socials flex justify-center sm:justify-end text-slate-100 flex">
			{#if isFilled.link(settings.data.social_link_1)}
				<PrismicLink field={settings.data.social_link_1} class='p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400' 
        aria-label={settings.data.name + ' on yadda yadda...'}>
					<IconGithub />
				</PrismicLink>
			{/if}

			{#if isFilled.link(settings.data.social_link_2)}
      <PrismicLink field={settings.data.social_link_2} class='p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400' 
      aria-label={settings.data.name + ' on yadda yadda...'}>
        <IconGithub />
      </PrismicLink>
			{/if}

			{#if isFilled.link(settings.data.social_link_3)}
      <PrismicLink field={settings.data.social_link_3} class='p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400' 
      aria-label={settings.data.name + ' on yadda yadda...'}>
        <IconChimp />
      </PrismicLink>
			{/if}
		</div>
	</div>
</footer>
