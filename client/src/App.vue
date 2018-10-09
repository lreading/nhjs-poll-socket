<template>
<div id="app">
    <navbar/>
    <div class="container">
        <router-view/>
    </div>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import messageHandler from '@/message-handler.js';

export default {
    name: 'app',
    components: {
        Navbar
    },
    created: function () {
        // Handle incomming messages
        this.$options.sockets.onmessage = messageHandler.handleMessage.bind(this);
    }
};
</script>