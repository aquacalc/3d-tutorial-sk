<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Scene from './Scene.svelte';

	export let slice: Content.HeroSlice;
</script>

<section
	class="px-4 md:px-6"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="mx-auto w-full max-w-7xl">
		<div class="grid min-h-[65vh] grid-cols-1 items-center md:grid-cols-2">
			<div
				class="relative z-10 row-span-1 row-start-1 -my-10 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0 bg-yellow-400 bg-opacity-55 text-red-900"
			>
				<Scene />
			</div>

			<div class="md:col-start-1 md:row-start-1">
				<h2
					class="mb-2 md:mb-8 text-[clamp(3rem,20vmin,13rem)] font-extrabold leading-none tracking-tighter text-no-wrap"
				>
					<span class="block text-slate-400">
						{slice.primary.first_name}
					</span>
					<span class="block text-slate-500 -mt-[.2em]">
						{slice.primary.last_name}
					</span>
				</h2>
				<span
					class="block tracking-[.2em] md:text-4xl text-xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500"
				>
					{slice.primary.tag_line}
				</span>
			</div>
		</div>
	</div>
</section>
