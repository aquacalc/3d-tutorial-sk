<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import type { Content } from '@prismicio/client';
	import Scene from './Scene.svelte';

	export let slice: Content.HeroSlice;

	const first_name_letters = slice.primary.first_name?.split('') ?? '';
	const last_name_letters = slice.primary.last_name?.split('') ?? '';

	onMount(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			'.name-animation',
			{
				x: -100,
				opacity: 0,
				rotate: -10
			},
			{
				x: 0,
				opacity: 1,
				rotate: 0,
				ease: 'elastic.out(1,0.3)',
				duration: 1,
				transformOrigin: 'left top',
				delay: 0.5,
				stagger: {
					each: 0.3,
					from: 'random'
				}
			}
		);

		tl.fromTo(
			'.tag-line',
			{
				y: 20,
				opacity: 0,
				scale: 1.2
			},
			{
				y: 0,
				opacity: 1,
				scale: 1,
				duration: 1,
				delay: 0.1,
				ease: 'elastic.out(1,0.3)'
			}
		);

		tl.fromTo(
			'.tag-line-2',
			{
				x: -100,
				opacity: 0
			},
			{
				x: 0,
				opacity: 1,
				ease: 'elastic.out(1,0.3)',
				duration: 1,
				delay: 0.15
			}
		);
	});
</script>

<section
	class="px-4 md:px-6"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="mx-auto w-full max-w-7xl">
		<div class="grid min-h-[65vh] grid-cols-1 items-center md:grid-cols-2">
			<div
				class="relative z-10 row-span-1 row-start-1 -my-10 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0"
			>
				<Scene />
			</div>

			<div class="md:col-start-1 md:row-start-1">
				{#if first_name_letters.length && last_name_letters.length}
					<h1
						class="mb-2 md:mb-8 text-[clamp(3rem,20vmin,13rem)] font-extrabold leading-none tracking-tighter text-no-wrap"
						aria-label={slice.primary.first_name + ' ' + slice.primary.last_name}
					>
						<span class="block text-slate-400">
							{#each first_name_letters as ltr}
								<span class="name-animation inline-block opacity-0">{ltr}</span>
							{/each}
						</span>
						<span class="block text-slate-500 -mt-[.2em]">
							{#each last_name_letters as ltr}
								<span class="name-animation inline-block opacity-0">{ltr}</span>
							{/each}
						</span>
					</h1>
				{/if}
				<span
					class="tag-line block tracking-[.2em] md:text-4xl text-xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 opacity-0"
				>
					{slice.primary.tag_line}
				</span>
				<span
					class="tag-line-2 block tracking-[.2em] md:text-4xl text-xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-tr from-yellow-700 via-yellow-400 to-yellow-700 opacity-0"
				>
					<em>{slice.primary.tag_line_2}</em>
				</span>
			</div>
		</div>
	</div>
</section>
