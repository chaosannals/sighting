<template>
    <div id="app">
        <keep-alive v-if="$route.meta.keepAlive">
            <router-view/>
        </keep-alive>
        <router-view v-else/>
    </div>
</template>

<script>

export default {
    name: 'app',
    components: {
    }
}
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

#app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
