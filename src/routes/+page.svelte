<script>
	import Map from "./Map.svelte";

	export let data;
	console.log('Data loaded...');
	console.log(data);
	const taxiCount = data['item']['features'][0]['properties']['taxi_count'];
	const timestamp = data['item']['features'][0]['properties']['timestamp'];
</script>

<div class="main">
	<div class="title">
		<h1>Taxi Visualiser</h1>
	</div>
	<div class="data-info">
		<p><b>Data retrieved:</b> {timestamp}</p>
		<p><b>Taxi count:</b> {taxiCount}</p>
	</div>
    <div class="map">
        <Map />
    </div>
	<a href="./about">about</a>
</div>

<style>
	:global(body) {
		background-color: #000000;
		font-family: 'Courier New', Courier, monospace;
		color: whitesmoke;
	}

	.main {
		display: flex;
		flex-flow: column wrap;
		justify-content: space-evenly;
		flex-grow: 1;
		align-items: center;
	}

	.title > h1 {
		font-weight: bold;
		font-size: 76px;
		text-align: center;
	}

	.data-info {
		display: flex;
		flex-flow: row wrap;
		flex-grow: 1;
		justify-content: space-around;
		max-width: 500px;
		text-align: center;
		padding: 10px 10px;
		margin: 10px 10px;
		gap: 10px;
	}
	a:hover {
		color: gold;
	}
</style>
