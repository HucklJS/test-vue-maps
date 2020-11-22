<template>
  <div id="app">
    <info-bar :clicked-coords="clickedCoords"/>
    <yandex-map
      :coords="clickedCoords || [55.752441, 37.617697]"
      style="width: 100%; height: 100vh;"
      zoom="10"
      @click="onMapClick"
    />
  </div>
</template>

<script>
  import { yandexMap} from 'vue-yandex-maps'
  import InfoBar from "./components/InfoBar.vue"

export default {
  name: 'App',
  data() {
    return {
      clickedCoords: null
    }
  },
  components: {
    yandexMap,
    InfoBar
  },
  methods: {
    onMapClick(e) {
      const coords = this._getCoords(e)
      this._saveCoords(coords)
    },

    _getCoords(e) {
      return e.get('coords')
    },
    _saveCoords(coords) {
      this.clickedCoords = coords
    }
  }
  // other options
}
</script>
