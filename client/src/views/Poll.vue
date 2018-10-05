<template>
    <div class="card">
        <div class="card-header">
            Created {{ createdAt | moment('from', 'now') }} | Total Votes: {{ totalVotes }} 
        </div>
        <div class="card-body">
            <h1 class="card-title mb-5">{{ question }}</h1>
            <p class="card-text mb-4">The following is the most up to date results:</p>
            <progress-bar
                v-for="(option, idx) in options"
                :key="idx"
                :option="option.value"
                :percent="option.percent"/>
        </div>
    </div>
</template>

<script>
    import ProgressBar from '@/components/ProgressBar.vue';

    export default {
        name: 'Poll',
        components: {
            ProgressBar
        },
        data: function () {
            return {
                question: null,
                options: [],
                createdAt: null,
                totalVotes: null
            };
        },
        created: function () {
            this.question = 'This is just a test...';
            this.createdAt = new Date();
            this.totalVotes = 82374;
            this.options.push({ value: 'option 1', percent: 21});
            this.options.push({ value: 'option 2', percent: 59});
            this.options.push({ value: 'option 3', percent: 15});
            this.options.push({ value: 'option 4', percent: 5 });
        }
    };
</script>