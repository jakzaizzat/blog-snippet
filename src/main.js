import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import IdleVue from 'idle-vue'

Vue.config.productionTip = false

// Import TailwindCSS
import "./assets/css/main.css";

//Import Vue Idle

const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 3000, // 3 seconds
  startAtIdle: false
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
