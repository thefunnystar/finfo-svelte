<script>
	import '../app.sass';
	// Enlarge this to work better on desktop.
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style lang="sass">
	.app
		height: 800px
		width: 360px
		background-color: antiquewhite
		position: fixed
</style>