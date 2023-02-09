import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import { baseUrl } from './js/baseUrl.js'
import proMap from './js/productionMap'
import checkMap from './js/showMap'
// import './js/mock.js'

Vue.config.productionTip = false
Vue.prototype.baseUrl = baseUrl
Vue.prototype.proMap = proMap
Vue.prototype.checkMap = checkMap

Vue.filter('saveTwofloat', function(inputNum) {
  if (inputNum !== '') {
    inputNum = parseFloat(inputNum)
    return inputNum.toFixed(2)
  } else {
    return '--'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
