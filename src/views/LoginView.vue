<template>
  <div>
    <div id="connect_container">
      <div>Here is the login</div>
      <button @click="change_connect_type()">Change login type</button>
      <div v-if="connect_type">
        <!-- Login here -->
        <h4>Login:</h4>
        <form @submit.prevent>
          <input type="text" name="username" placeholder="username or email" />
          <input type="password" name="password" placeholder="password" />
          <button @click="start_login()" type="submit">Submit</button>
        </form>
      </div>
      <div v-else>
        <!-- Register here -->
        <h4>Register:</h4>
        <form @submit.prevent>
          <input type="text" name="username" placeholder="username or email" />
          <input type="password" name="password" placeholder="password" />
          <button @click="start_register()" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const connect_type = ref(true);

function change_connect_type() {
  connect_type.value = !connect_type.value;
}

function start_login() {
  console.log("Login");
  router.push("/")
}

function start_register() {
  console.log("Register");
}
</script>

<style>
#connect_container {
  display: flex;
  flex-direction: column;
  padding: 1vh;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>