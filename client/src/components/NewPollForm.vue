<template>
    <form @submit="createPoll">
        <div class="form-group">
            <label for="pollName">Question</label>
            <input
                v-model="question"
                type="text"
                class="form-control"
                id="pollName"
                name="pollName">
        </div>
        <div
            v-for="(option, idx) in options"
            :key="idx"
            class="form-group">
            <label :for="'option' + idx">
                Option {{ idx + 1 }}
                <a
                    @click="removeOption(idx)"
                    v-if="idx > 0"
                    href="javascript:void(0)"
                    class="text-danger">
                    (remove)
                </a>
            </label>
            <input
                v-model="options[idx]"
                type="text"
                class="form-control"
                :id="'option' + idx"
                :name="'option' + idx">
        </div>
        <button
            :disabled="isLoading"
            type="submit" 
            class="btn btn-primary">
            Start Poll
        </button>
        <button
            :disabled="isLoading"
            @click="addOption"
            type="button"
            class="btn btn-success float-right">
            Add Option
        </button>
    </form>
</template>

<script>
    export default {
        name: 'NewPollForm',
        data: function () {
            return {
                isLoading: false,
                question: null,
                options: ['']
            };
        },
        methods: {
            addOption: function () {
                this.options.push('');
            },
            removeOption: function(idx) {
                this.options.splice(idx, 1);
            },
            createPoll: function (e) {
                e.preventDefault();
                // You'd normally want to do some kind of form validation

                // Disable the submit button
                this.isLoading = true;

                // Grab our model data
                const { question, options } = this;
                const wsMessage = JSON.stringify({
                    type: 'newPoll',
                    payload: { question, options }
                });
                this.$socket.send(wsMessage);
            }
        }
    };
</script>