<template>
    <div class="row">
        <div class="col-md-8">
            <div class="jumbotron">
                <h1 class="display-4 text-center">Create A New Poll</h1>
                <new-poll-form/>
            </div>
        </div>
        <div class="col-md-4">
            <h2 class="text-center">Recent</h2>
            <recent-polls :polls="polls"/>
        </div>
    </div>
</template>

<script>
    import NewPollForm from '../components/NewPollForm.vue';
    import RecentPolls from '../components/RecentPolls.vue';

    export default {
        name: 'NewPoll',
        components: {
            NewPollForm,
            RecentPolls
        },
        computed: {
            polls() {
                return this.$store.getters.allPolls();
            }
        }
    }
</script>