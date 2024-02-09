<template>
  <div>
    <div id="connect_container">
      <div>Here is the login</div>
      <button @click="change_connect_type()">Change login type</button>
      <div v-if="connect_type">
        <!-- Login here -->
        <h4>Login:</h4>
        <form @submit.prevent class="login_box">
          <input v-model="user_data.identifier" type="text" name="username" placeholder="Username or email" />
          <input v-model="user_data.password" type="password" name="password" placeholder="Password" />
          <button @click="start_login()" type="submit">Submit</button>
        </form>
      </div>
      <div v-else>
        <!-- Register here -->
        <h4>Register:</h4>
        <form @submit.prevent class="register_box">
          <input v-model="user_data.email" type="text" name="email" placeholder="Email" />
          <input v-model="user_data.password" type="password" name="password" placeholder="Password" />
          <input v-model="user_data.country" type="text" name="country" placeholder="France">
          <p> - </p>
          Optional information : 
          <input v-model="user_data.username" type="text" name="username" placeholder="Username">
          <input v-model="user_data.first_name" type="text" name="firstname" placeholder="Firstname">
          <input v-model="user_data.last_name" type="text" name="lastname" placeholder="Lastname">
          <input v-model="user_data.city" type="text" name="city" placeholder="city">
          <button @click="start_register()" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import * as http_func from '../functions/http_functions';

import { useRouter } from "vue-router";

const router = useRouter();
const connect_type = ref(true);

const user_data = ref({
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  country: "",
  city: "",
  identifier: ""
});



function change_connect_type() {
  connect_type.value = !connect_type.value;
}

function start_login() {
  http_func.login_user(user_data.value);
}

async function start_register() {
  await http_func.register_user(user_data.value)
  // If the return is code 200, we redirect to the home page
  // router.push("dashboard")
}
</script>

<style>
#connect_container {
  display: flex;
  flex-direction: column;
  padding: 1vh;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  margin-top: 2vh;
}

.register_box {
  display: flex;
  flex-direction: column;
  padding: 1vh;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.login_box{
  display: flex;
  flex-direction: column;
  padding: 1vh;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

</style>