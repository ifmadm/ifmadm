<template>
  <div id="app">
      <Mark>
    </Mark>
  </div>
</template>

<script>
    import Mark from "./components/Mark.vue"
export default {
  name: 'app',
  data () {
    return {
    }
  },
    components:{
        Mark
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
