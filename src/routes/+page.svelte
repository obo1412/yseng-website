<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import { onMount } from 'svelte';

	let images = [];

	onMount(async () => {
		const res = await fetch('/api/images');
		if (res.ok) {
			images = await res.json();
		}
	});
</script>

<Carousel {images} />
