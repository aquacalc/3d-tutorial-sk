<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import { createTransition, Float } from '@threlte/extras';
	import * as THREE from 'three';
	import gsap from 'gsap';
	import { elasticOut } from 'svelte/easing';
	// import { scale } from 'svelte/transition';

	export let position: [number, number, number] = [0, 0, 0];
	export let geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(3);
	export let rate = 0.5;

	let visible = false;

	// const materialParams = [
	// 	{
	// 		color: 'cornflowerblue',
	// 		roughness: 0.1,
	// 		metalness: 0.5
	// 	},
	// 	{
	// 		color: 'rebeccapurple',
	// 		roughness: 0.8
	// 	},
	// 	{
	// 		color: 'yellow',
	// 		roughness: 0.3
	// 	}
	// ];

	const materialParams = [
		{ color: 0x2ecc71, roughness: 0 },
		{ color: 0xf1c40f, roughness: 0.4 },
		{ color: 0xe74c3c, roughness: 0.1 },
		{ color: 0x8e44ad, roughness: 0.1 },
		{ color: 0x1abc9c, roughness: 0.1 },
		{ color: 0x2980b9, roughness: 0, metalness: 0.5 },
		{ color: 0x2c3e50, roughness: 0.1, metalness: 0.5 }
	];

	const getRandomMaterial = () => new THREE.MeshStandardMaterial(gsap.utils.random(materialParams));

	const handleClick = (evt: MouseEvent) => {
		if ('object' in evt && evt.object instanceof THREE.Mesh)
			evt.object.material = getRandomMaterial();

		gsap.to(evt.object.rotation, {
			x: `+=${gsap.utils.random(0, 3)}`,
			y: `+=${gsap.utils.random(0, 3)}`,
			z: `+=${gsap.utils.random(0, 3)}`,
			duration: 1.3,
			ease: 'elastic.out(1,0.3)',
			yoyo: true
		});
	};

	const bounce = createTransition((ref) => {
		return {
			tick(t) {
				if (t > 0) visible = true;
				ref.scale.set(t, t, t);
			},
			easing: elasticOut,
			duration: gsap.utils.random(800, 1200),
			delay: gsap.utils.random(0, 500),
		};
	});
</script>

<Threlte.Group position={position.map((p) => p * 2)}>
	<Float
		speed={5 * rate}
		rotationSpeed={5 * rate}
		rotationIntensity={6 * rate}
		floatIntensity={5 * rate}
	>
		<Threlte.Mesh
			{visible}
			{geometry}
			material={getRandomMaterial()}
			in={bounce}
			interactive
			on:click={handleClick}
		></Threlte.Mesh>
	</Float>
</Threlte.Group>
