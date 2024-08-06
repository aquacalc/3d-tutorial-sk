<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import * as THREE from 'three';
	// import { exp } from 'three/webgpu';

	export let position: [number, number, number] = [0, 0, 0];
	export let geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(3);
	export let rate = 0.5;

	const material = new THREE.MeshStandardMaterial({
		color: 'cornflowerblue',
		roughness: 0.1,
		metalness: 0.5
	});
</script>

<Threlte.Mesh {geometry} {material}></Threlte.Mesh>
