<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';

	import IconCircle from '~icons/ic/baseline-circle';

	gsap.registerPlugin(ScrollTrigger);

	export let slice: Content.TechListSlice;
	// slice.items[0];

	let component: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: component,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 4,
				// markers: true
			}
		});

		tl.fromTo(
			'.tech-row',
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400);
				}
			},
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400);
				},
				ease: 'power1.inOut'
			}
		);
	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="overflow-hidden"
	bind:this={component}
>
	<Bounded as="div">
		<Heading size="lg" tag="h2" class="mb-8">
			<div>{slice.primary.heading}</div>
		</Heading>
	</Bounded>

	{#each slice.primary.item as { tech_name, tech_color }, idx}
		<div
			class="tech-row flex items-center justify-center gap-4 text-slate-700 mb-8"
			aria-label={tech_name || 'undfeined'}
		>
			{#each Array(15) as _, index}
				<span
					class={`tech-item text-8xl font-extrabold tracking-tighter ${tech_name === 'pH' || tech_name === 'Ω(aragonite)' ? '' : 'uppercase'}`}
					style="color: {index === 7 && tech_color ? tech_color : 'inherit'}"
				>
					{tech_name}
				</span>
				<span class="text-3xl">
					<IconCircle />
				</span>
			{/each}
		</div>
	{/each}
</section>

