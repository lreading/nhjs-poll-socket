<template>
    <div class="card">
        <ul class="list-group list-group-flush">
            <li
                v-for="(poll, idx) in polls"
                :key="idx"
                class="list-group-item">
                <router-link 
                    :to="`/poll/${poll.id}`">
                    {{ poll.question }}
                    <span class="badge badge-pill badge-info float-right">{{ poll.totalVotes }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'RecentPolls',
        props: [ 'polls' ]
    };
</script>