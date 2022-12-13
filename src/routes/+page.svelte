<script>
    export let data;
    console.log("Data loaded...");
    console.log(data);

    const taxiCount = data['item']['features'][0]['properties']['taxi_count'];
</script>

<h1>Welcome to Taxi Visualiser</h1>
<p>Taxi count: {taxiCount}</p>

<a href="./about">about</a>

<style>
    a:hover {
        color:gold;
    }
</style>