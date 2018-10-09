<template>
    <div v-if="poll" class="card">
        <div class="card-header">
            Created {{ poll.createdAt | moment('from', 'now') }} | Total Votes: {{ poll.totalVotes }} 
        </div>
        <div class="card-body">
            <h1 class="card-title mb-5">{{ poll.question }}</h1>
            <p class="card-text mb-4">The following is the most up to date results:</p>
            <poll-option
                v-for="(option, idx) in poll.options"
                :key="idx"
                :option="option"
                :pollId="poll.id" />
        </div>
    </div>
</template>

<script>
    import PollOption from '@/components/PollOption.vue';

    export default {
        name: 'Poll',
        components: {
            PollOption
        },
        computed: {
            poll() {
                return this.$store.getters.poll(this.$route.params.id);
            }
        }
    };
</script>