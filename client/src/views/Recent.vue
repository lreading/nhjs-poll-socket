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
        computed: {
            polls() {
                return this.$store.getters.allPolls();
            }
        }
    };
</script>