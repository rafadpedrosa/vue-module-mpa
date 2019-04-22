import Vue from 'vue'
import App from './App.vue'
import Counter from '../shared/counter.vue'

Vue.component(Counter.name, Counter);

new Vue({
    el: "#app",
    render: h => h(App)
})