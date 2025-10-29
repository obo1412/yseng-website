
<script>
  import { onMount, onDestroy } from 'svelte';

  export let images = [];
  let currentImageIndex = 0;
  let interval;

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  }

  onMount(() => {
    interval = setInterval(showNextImage, 3000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="carousel">
  <div class="carousel-inner">
    {#each images as image, index}
      <div class="carousel-item" style="transform: translateX({-100 * currentImageIndex}%);">
        <img src={image} alt="Carousel image {index + 1}" />
      </div>
    {/each}
  </div>

  <button class="carousel-control prev" on:click={showPreviousImage}>&#10094;</button>
  <button class="carousel-control next" on:click={showNextImage}>&#10095;</button>
</div>

<style>
  .carousel {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    background-color: #000;
  }

  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
    height: 100%;
  }

  .carousel-item {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
  }

  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
  }

  .carousel-control.prev {
    left: 1rem;
  }

  .carousel-control.next {
    right: 1rem;
  }
</style>
