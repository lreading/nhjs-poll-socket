<template>
    <div class="mb-4">
        <span>{{ option.value }}</span> <span class="badge badge-pill badge-info float-right">{{ option.votes }}</span>        
        <div class="progress">
            <div
                :style="`width: ${option.percent}%`"
                :aria-valuenow="option.percent"
                class="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProgressBar',
        props: {
            option: Object
        }
    };
</script>