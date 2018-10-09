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
    state: {
        allPolls: [],
        myVotes: []
    },
    mutations: {
        allPolls(state, payload) {
            state.allPolls = payload.allPolls;
        },
        vote(state, payload) {
            state.myVotes = payload.myVotes;
        }
    },
    actions: {
        allPolls: ({ commit }, allPolls) => {
            commit({
                type: 'allPolls',
                allPolls
            });
        },
        vote: ({ commit }, myVotes) => {
            commit({
                type: 'vote',
                myVotes
            });
        }
    },
    getters: {
        allPolls: (state) => () => {
            return state.allPolls
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 10);
        },
        poll: (state) => (id) => {
            const matches = state.allPolls.filter(x => x.id === parseInt(id, 0));
            return matches.length ? matches[0] : null;
        },
        hasVoted: (state) => (pollId) => {
            return state.myVotes.filter(x => x.pollId === parseInt(pollId)).length !== 0;
        }
    }
});
