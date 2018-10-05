import Vue from 'vue';
import Router from 'vue-router';

// TODO: Import Views here
import NewPoll from '@/views/NewPoll.vue';
import Poll from '@/views/Poll.vue';
import Recent from '@/views/Recent.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: NewPoll
        },
        {
            path: '/new',
            name: 'new-poll',
            component: NewPoll
        },
        {
            path: '/poll/:id',
            name: 'poll',
            component: Poll
        },
        {
            path: '/recent',
            name: 'recent',
            component: Recent
        }
    ]
});