<template>
  <div id="app">
    <info-bar :clicked-coords="clickedCoords"/>
    <yandex-map
      :coords="clickedCoords || [55.752441, 37.617697]"
      style="width: 100%; height: 100vh;"
      zoom="10"
      @map-was-initialized="initHandler"
      @click="onMapClick"
    />
  </div>
</template>

<script>
import {yandexMap, loadYmap} from 'vue-yandex-maps'
import InfoBar from "./components/InfoBar.vue"
import MKADCoords from "./polygons/MKADCoords"

let ymaps

export default {
  name: 'App',
  data() {
    return {
      clickedCoords: null,
    }
  },
  components: {
    yandexMap,
    InfoBar
  },
  methods: {
    async initHandler(map) {
      await loadYmap();
      ymaps = window.ymaps; // здесь доступен весь функционал ymaps

      const mkad = new ymaps.Polygon([MKADCoords]);
      map.geoObjects.add(mkad)
    },
    onMapClick(mapE) {
      this.clickedCoords = mapE.get('coords')
    }
  }
  // other options
}
</script>
