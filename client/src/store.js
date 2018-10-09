import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

// Set up persistence.  This is how we will
// prevent users from voting more than once
// Do note that this is only suitable for a demo,
// and this is easily bypassed.
const persist = new VuexPersist({
    key: 'poll-socket',
    storage: localStorage
});

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [persist.plugin],
    state: {},
    mutations: {},
    actions: {},
    getters: {}
});
