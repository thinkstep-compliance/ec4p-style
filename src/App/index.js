// Bootstrap program
require('./bootstrap');

// Style guide root
Vue.component('style-guide-app', require('./vues/StyleGuideApp.vue').default);

// Maps
Vue.component('map1', require('./map/Map1.vue').default);
Vue.component('map2', require('./map/Map2.vue').default);
Vue.component('regulation-map', require('./map/RegulationMap.vue').default);

// Global components
Vue.component('on-click-outside', require('./components/OnClickOutside.vue').default);
Vue.component('notification-toast', require('./components/NotificationToast.vue').default);
Vue.component('spin-three-bounce', require('./components/SpinThreeBounce.vue').default);
Vue.component('spin-double-bounce', require('./components/SpinDoubleBounce.vue').default);
Vue.component('overlay-spinner', require('./components/OverlaySpinner.vue').default);

// Router
import router from './router';

// Start the Vue app :)
const app = new Vue({
	el: '#styleGuideApp',

    router
})
