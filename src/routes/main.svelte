<script lang="ts">
	import Header from "../components/Header.svelte";
	import Navigation from "../components/Navigation.svelte";
	import SearchContainer from "../components/SearchContainer.svelte";
	import TopicContainer from "../components/TopicContainer.svelte";


	// LOGIC FOR TOPICS

</script>

<div class="wrapper">
	<Header/>
<!-- 	<div class="space"></div>
	<Navigation/> -->
	<div class="space"></div>
	<SearchContainer/>
	<div class="space"></div>
	<TopicContainer/>
</div>

<style>
	.wrapper {
        height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		overflow-y: auto;
	}

	.space {
		min-height: 0.25em;
	}

	@media (min-width: 640px) {

	}
</style>