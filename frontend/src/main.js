import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import RouterButton from './components/RouterButton.vue'
import "leaflet/dist/leaflet.css"

import VueToLeaflet from 'vue2-leaflet'
Vue.use(VueToLeaflet);
Vue.use(require('vue-moment'));
Vue.config.productionTip = false
Vue.component("router-btn", RouterButton);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
