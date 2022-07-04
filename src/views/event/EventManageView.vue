<template>
  <div class="main_body">
    <div class="event_box">
      <h3>Manage your event here : </h3>
      <div class="box_option">
        {{ events_store.events[0] }}
        <div>Id: {{ current_event.id }}</div>
        <div>Name : {{ current_event.name }}</div>
        <div>Description : {{ current_event.description }}</div>
        <div>Start date : {{ current_event.start_date }}</div>
        <div>End date : {{ current_event.end_date }}</div>
        <div>Location : {{ current_event.location }}</div>
        <div>Acceptation invitation : {{ current_event.auto_accept }}</div>
        <div>Visibility : {{ current_event.visibility }}</div>
        <div>Creation date : {{ current_event.created_at }}</div>
        <div>Updated at : {{ current_event.updated_at }}</div>
      </div>
      <div class="box_option">
        Manage guests : <router-link :to="{ name: 'event_manage_people', params: { id: current_event.id } }">Guests</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useEventsStore } from "@/stores/events";
const events_store = useEventsStore()

const route = useRoute()


const page_id = route.params.id - 1
const current_event = search_result()

function search_result () {
  return events_store.events.find(event => event.id == route.params.id)
}

</script>

<style>
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
  justify-content: space-between;
  width: 90%;
  align-items: left;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #fdd00f;
  /* text-decoration: none; */
  /* color: black; */
}

.box_option {
  margin-bottom: 1vh;
}
</style>