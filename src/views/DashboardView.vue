<template>
  <div class="main_body">
    <div>Dashboard</div>
    <div>Here are your current events :</div>

    <div>
      <div>
        <div v-for="foo in events_store.events" :key="foo" class="event_box">
          <div>Id: {{ foo.id }}</div>
          <div>Name : {{ foo.name }}</div>
          <div>Description : {{ foo.description }}</div>
          <div>Start date : {{ foo.start_date }}</div>
          <div>End date : {{ foo.end_date }}</div>
          <div>Location : {{ foo.location }}</div>
          <div>Acceptation invitation : {{ foo.auto_accept }}</div>
          <div>Visibility : {{ foo.visibility }}</div>
          <div>Creation date : {{ foo.created_at }}</div>
          <div>Updated at : {{ foo.updated_at }}</div>
        </div>
      </div>
    </div>
    If there are no events, this place needs to be have a message to say that there are no events.
    <br>
    <router-link to="/event/create">Create a new event</router-link>
  </div>

</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import * as http_func from '../functions/http_functions';
import { useUserStore } from "../stores/user";

import { useEventsStore } from "../stores/events";
const events_store = useEventsStore()


const user_store = useUserStore()

onMounted(() => {
  console.log("DashboardView mounted");
  http_func.get_events_server(user_store.token, user_store.refresh_token)
})

</script>

<style scoped>
.main_body {
  padding: 1vh;
  /* background-color: #DEB95D; */
  height: 100%;
  border-radius: 5px;
  /* margin-left: 0; */
  width: 100vw;
}

.event_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  align-items: left;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #fdd00f;
}
</style>