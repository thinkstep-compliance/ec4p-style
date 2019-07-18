
/**
 * Setup & export VueRouter.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//
// Specific item pages
//
// import ReportPage from '../vues/reporting/ReportPage.vue';
// import SubmissionPage from '../vues/submission/SubmissionPage.vue';

export default new VueRouter({
    routes: [
        // {
        //     path: '/',
        //     name: 'Dashboard'
        // },
        // {
        //     path: '/data-upload',
        //     name: 'Data Upload',
        //     component: DataUploadPage
        // }
    ]
});
