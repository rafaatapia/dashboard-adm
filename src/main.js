import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueResource from 'vue-resource'
import VueGoogleCharts from 'vue-google-charts'
import vViewer from 'v-viewer'
import JsonExcel from 'vue-json-excel'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueGoogleCharts)
Vue.use(vViewer)
 
Vue.component('downloadExcel', JsonExcel)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
