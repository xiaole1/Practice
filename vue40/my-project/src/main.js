// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Practice from './components/practice.vue'

Vue.config.productionTip = false

Vue.component('my-component',{
  template:"<p>I am a globel component1</p>"
})

var info={template:"<p>I am the part component two!</p>"}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App ,
    Practice,
    "my-children":info
  },
  template: '<div><App/><my-component /><Practice /><my-children /></div>'
})
