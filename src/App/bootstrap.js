/**
 * Import and setup Vue and supporting libraries.
 */
import Vue from 'vue';

Vue.use(require('vee-validate')); // https://baianat.github.io/vee-validate/
Vue.use(require('vue-js-modal').default); // https://github.com/euvl/vue-js-modal/
Vue.use(require('vue-notification').default); // https://github.com/euvl/vue-notification

window.Vue = Vue;
