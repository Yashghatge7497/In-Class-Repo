<script setup lang="ts">
import { Login } from '../models/session';
import { ref } from 'vue'
let userName = ref('');
let password = ref('');
function login() {
    Login(userName.value, password.value)
}
</script>

<template>
<div class="bg-img">
	
    <section class="section"   >      
       <div class="columns">
       <div class="column is-4 is-offset-4">
           <form @submit.prevent="login">
			   <div class="imgcontainer">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar">
    </div>
	
		  <div class="field">
			  <label for="uname"><b>Username</b></label>
		  <p class="control has-icons-left has-icons-right">
		    
		    <input class="input" placeholder="Username" v-model="userName">
		    <span class="icon is-small is-left">
		      <i class="fa fa-envelope"></i>
		    </span>
		    <span class="icon is-small is-right">
		      <i class="fa fa-check"></i>
		    </span>
		  </p>
		</div>
		<div class="field">
			<label for="uname"><b>Password</b></label>
		  <p class="control has-icons-left">
			   
		    <input class="input" type="password" placeholder="Password" v-model="password">
		    <span class="icon is-small is-left">
		      <i class="fa fa-lock"></i>
		    </span>
		  </p>
		</div>
		<div class="field">
		  <p class="control">
		    <button class="button is-success">
		      Login
		    </button>
			
		  </p>
		  
		  <span class="psw" style= "color :black;">Forgot <a href="#">password?</a></span>
		</div>


        </form>
      </div>         
       </div>
      </section>
</div>
</template>


<style >
.bg {
  
  background-image: url("https://www.w3schools.com/howto/img_avatar.png");

  
  height: 100%; 

  /* Center and scale  */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>