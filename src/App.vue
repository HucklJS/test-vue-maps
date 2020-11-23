<template>
  <div id="app">
    <info-bar :clicked-coords="clickedCoords"/>
    <yandex-map
      :coords="clickedCoords || [55.752441, 37.617697]"
      style="width: 100%; height: 100vh;"
      zoom="10"
      @map-was-initialized="initHandler"
      @click="onMapClick"
    >
      <ymap-marker
        v-if="clickedCoords"
        :coords="clickedCoords"
        marker-id="clicked-marker"
        hint-content="clicked-marker"
      />

      <ymap-marker
        v-if="closestPointCoords"
        :coords="closestPointCoords"
        marker-id="closest-point-coords"
        hint-content="closest-point-coords"
      />
    </yandex-map>
  </div>
</template>

<script>
  import {loadYmap, yandexMap, ymapMarker} from 'vue-yandex-maps'
  import InfoBar from "./components/InfoBar.vue"
  import MKADCoords from "./polygons/MKADCoords"

  let ymaps

export default {
  name: 'App',
  data() {
    return {
      clickedCoords: null,
      closestPointCoords: null
    }
  },
  components: {
    yandexMap,
    ymapMarker,
    InfoBar
  },
  methods: {
    async initHandler(map) {
      await loadYmap();
      ymaps = window.ymaps; // здесь доступен весь функционал ymaps

      this._paintMKADPolygon(map, MKADCoords)
    },
    onMapClick(mapE) {
      this.clickedCoords = mapE.get('coords')

      this.closestPointCoords = this._findClosestPointTo(this.clickedCoords)
    },

    _paintMKADPolygon(map, coords) {
      const mkad = new ymaps.Polygon([coords]);
      map.geoObjects.add(mkad)
    },
    _findClosestPointTo: function ([clickY, clickX]) {
      const distances = MKADCoords.map(
        ([y, x]) => Math.sqrt((y - clickY) ** 2 + (x - clickX) ** 2)
      )
      const minDistance = Math.min(...distances)
      const idOfMinDistance = distances.findIndex(
        distance => distance === minDistance
      )

      return MKADCoords[idOfMinDistance]
    }
  }
  // other options
}
</script>
