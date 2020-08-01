import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false
import PortalVue from 'portal-vue'
Vue.use(PortalVue)
// Import TailwindCSS
import "./assets/css/main.css";

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
