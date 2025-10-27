<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav>
		<ul>
			<li><a href="/">홈</a></li>
			<li><a href="/about">회사소개</a></li>
			<li><a href="/clients">고객사</a></li>
			<li><a href="/board">게시판</a></li>
		</ul>
	</nav>
</header>

<main>
	{@render children?.()}
</main>

<style>
	header {
		background-color: #f0f0f0;
		padding: 1rem;
	}

	nav ul {
		list-style: none;
		display: flex;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}
</style>