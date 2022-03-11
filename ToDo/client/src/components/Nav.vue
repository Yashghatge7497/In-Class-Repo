<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from "vue-router";
import LoginBadge from './LoginBadge.vue';

const isOpen = ref(false);
</script>

<template>
  <nav class="navbar navbar is-dark"  role="navigation" aria-label="main navigation">
    <div class="container" >
      <div class="navbar-brand">
        &nbsp;&nbsp;
        <a class="navbar-item" >
          <img src="https://cdn-icons-png.flaticon.com/512/1/1560.png" width="85" />
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': isOpen }"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/messages">Messages</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Tasks</a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/assignedtasks">Tasks Assigned</router-link>
              <!--router-link class="navbar-item" to="/viewAllTasks">All Tasks</router-link-->
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/about">About</router-link>
              <a class="navbar-item">Jobs</a>
              <router-link class="navbar-item" to="/contact">Contact</router-link>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <login-badge />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>

          
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
</style>