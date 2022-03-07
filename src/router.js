import { createRouter, createWebHashHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import ReceiveRequest from './pages/coaches/ReceiveRequest.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id', 
            component: CoachDetail, 
            children: [
            {path: '/contact', component: ContactCoach}// /coaches/c1/contact
        ]},
        {path: '/register', component: CoachRegistration},
        {path: '/request', component: ReceiveRequest},
        {path: '/:notFound(.*)', component: NotFound}
    ]
});

export default router