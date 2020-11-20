<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <yandex-map
      :coords="[55.752441, 37.617697]"
      style="width: 100%; height: 100vh;"
      zoom="10"
      @map-was-initialized="initHandler"
    />
  </div>
</template>

<script>
  import { yandexMap, /*ymapMarker*/ } from 'vue-yandex-maps'
  import settings from "./settings"

export default {
  name: 'App',
  data() {
    return {
      settings
    }
  },
  components: {
    yandexMap,
    // ymapMarker
  },
  methods: {
    initHandler() {
      console.log('map-was-initialized')
    }
  }
  // other options
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
