<template>
    <div class="jumbotron">
        <h1 class="display-4 text-center">Create A New Poll</h1>
        <new-poll-form/>
    </div>
</template>

<script>
    import NewPollForm from '@/components/NewPollForm.vue';

    export default {
        name: 'NewPoll',
        components: {
            NewPollForm
        }
    }
</script>