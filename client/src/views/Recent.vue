<template>
    <div>
        <h2 class="mb-5">Recent Polls</h2>
        <recent-polls :polls="polls"/>
    </div>
</template>

<script>
    import RecentPolls from '@/components/RecentPolls.vue';

    export default {
        name: 'Recent',
        components: {
            RecentPolls
        },
        data: function () {
            return {
                polls: []
            };
        },
        created: function () {
            this.polls.push({ question: 'What is the best movie ever?', id: 1, totalVotes: 23 });
            this.polls.push({ question: 'Which commedian is the funniest?', id: 2, totalVotes: 921 });
            this.polls.push({ question: 'How old were you when you lost your first tooth?', id: 3, totalVotes: 59 });
            this.polls.push({ question: 'Why can I not think of better test data?', id: 4, totalVotes: 8934 });
            this.polls.push({ question: 'Who thought it would be a good idea to let Leo present?', id: 5, totalVotes: 293 });
        }
    };
</script>