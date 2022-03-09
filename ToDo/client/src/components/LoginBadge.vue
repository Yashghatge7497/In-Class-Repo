<template>
    <div class="buttons" v-if="!session.user">
        <router-link class="button is-primary" to="/signup">
            <strong>Sign up</strong>
        </router-link>
        <router-link class="button is-light" to="/login">
            Log in
        </router-link>
    </div>
    <div class="buttons" v-else>
        <div class="avatar"> 
            <img :src="session.user.pic"/>
            <div>
                <strong> {{session.user.firstname}} {{session.user.email}}  </strong>
                

            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
    import session from '../models/session';
</script>

<style scoped>

</style>