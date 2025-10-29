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
			<li><a href="/board">문의</a></li>
		</ul>
	</nav>
</header>

<bottom class="fixed bottom-0 flex w-full bg-gray-800 py-2 pl-4 text-white">
	<ul class="flex flex-col">
		<li>오시는 길 : 경기도 안산시 단원구 능안로 81 안산디지털파크 1097호 영신이앤지(주)</li>
		<li>대표자 : 송귀섭</li>
		<li>연락처 : 031-495-1606</li>
		<li>ⓒ 2024. 영신ENG Inc. All rights reserved.</li>
	</ul>
</bottom>

<main>
	{@render children?.()}
</main>

<style>
	header {
		background-color: #2f4f4f;
		padding: 1rem;
		position: relative;
		z-index: 10;
	}

	nav ul {
		list-style: none;
		display: flex;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}
	nav a {
		color: white;
	}
</style>
