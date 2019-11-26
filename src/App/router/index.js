
/**
 * Setup & export VueRouter.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import StyleGuideApp from './vues/StyleGuideApp.vue';
// import RegulationMap from '../../vues/RegulationMap.vue';

export default new VueRouter({
    routes: [
        // {
        //     path: '/',
        //     name: 'EC4P Style Guide',
        //     component: require('../vues/StyleGuideApp.vue')
        // },
        // {
        //     path: '/map',
        //     name: 'EC4P Regulation Map',
        //     component: require('../vues/RegulationMap.vue')
        // }
    ]
});
