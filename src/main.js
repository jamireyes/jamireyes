import './assets/css/app.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.component('side-card', require('./components/side-card.vue').default)
Vue.component('main-card', require('./components/main-card.vue').default)
Vue.component('personal-info', require('./components/personal-info.vue').default)
Vue.component('educational-bg', require('./components/educational-bg.vue').default)
Vue.component('skills', require('./components/skills.vue').default)
Vue.component('projects', require('./components/projects.vue').default)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
