import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
Vue.directive('size',{
  bind(el,binding){
    if(binding.value === 'small')
    {
      el.style.fontSize = '10px'
    }
    else if (binding.value == 'big')
    {
      el.style.fontSize = '100px'
    }
    else {
      el.style.fontSize = '30px'
    }
  }
})



Vue.config.productionTip = false

new Vue({

  render: h => h(App),
}).$mount('#app')








// Vue.filter('Ucase',function (val) {
//   return val.toUpperCase()
// })
// Vue.filter('Lcase',function(val){
//   return val.toLowerCase()
// })
// Vue.filter('Cconvert',function(val){
//   return val * 70;
// })