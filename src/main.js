import Vue from 'vue'
import App from './App.vue'
// import YmapPlugin from 'vue-yandex-maps'
// import settings from './settings'


// Vue.use(YmapPlugin, settings)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
