<template>
  <div>
    <div>Dashboard</div>
    <div>Here are your current events :</div>

    <div>
      <div>
        <div>Event 1</div>
        <div>Event 2</div>
        <div>Event 3</div>
      </div>
    </div>
    If there are no events, this place needs to be have a message to say that there are no events.
  </div>
  <br>
  <router-link to="/event/create">Create a new event</router-link>
  
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import * as http_func from '../functions/http_functions';
import { useUserStore } from "../stores/user";


const user_events = ref([]);
const user_store = useUserStore()

onMounted(() => {
  console.log("DashboardView mounted");

  // We need to fetch the events, and display them there. 
  // It is better to fetch too many times than to risk the events not updating properly.

  http_func.get_events_server(user_store.token, user_store.refresh_token)
})

</script>