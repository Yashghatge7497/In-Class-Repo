<script setup lang="ts">
import { Login } from '../models/session';


    function relogin()
    {
        Login('Yash', 'toy')
    }
     function login()
    {
        Login('@yash', 'password')
    }
</script>

<template>
    <div class="section">
        <h1 class="title">Login Page</h1>

        <button class="button is-primary" @click="login">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Login</span>
        </button>
<br/>
        <button class="button is-primary" @click="relogin">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>reLogin</span>
        </button>
    </div>
</template>


<style scoped>

</style>