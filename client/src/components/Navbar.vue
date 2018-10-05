<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark mb-5">
        <router-link to="/" class="navbar-brand">Poll-Socket</router-link>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link to="/new" class="nav-link">New Poll</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/recent" class="nav-link">Recent</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    };
</script>