import Vue from 'vue'

Vue.filter('transformEmpty', (value, newValue) => value ? value : newValue)
