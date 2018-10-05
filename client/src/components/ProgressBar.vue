<template>
    <div class="mb-4">
        <span>{{ option }}</span>        
        <div class="progress">
            <div
                :style="`width: ${percent}%`"
                :aria-valuenow="percent"
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
            option: String,
            percent: Number
        }
    };
</script>