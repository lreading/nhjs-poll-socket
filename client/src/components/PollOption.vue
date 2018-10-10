<template>
    <div class="row">
        <div class="col-md-10">
            <progress-bar
                :option="option"/>
        </div>
        <div class="col-md-2">
            <button
                @click="vote()"
                :disabled="hasVoted"
                type="button"
                class="btn btn-success btn-sm vote-btn">
                Vote!
            </button>
        </div>
    </div>
</template>

<style>
    .vote-btn {
        margin-top: 10px;
    }
</style>

<script>
    import ProgressBar from './ProgressBar.vue';

    export default {
        props: {
            option: Object,
            pollId: Number
        },
        computed: {
            hasVoted() {
                return this.$store.getters.hasVoted(this.pollId);
            }
        },
        components: {
            ProgressBar
        },
        methods: {
            vote() {
                const myVotes = this.$store.state.myVotes;
                const vote = {
                    pollId: this.pollId,
                    optionId: this.option.id
                };
                myVotes.push(vote);
                this.$store.dispatch('myVotes', myVotes);
                const wsMessage = JSON.stringify({ type: 'vote', payload: vote});
                this.$socket.send(wsMessage);
            }
        }
    };
</script>