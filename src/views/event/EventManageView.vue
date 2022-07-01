<template>
  <div class="main_body">
    <div class="event_box">
      <h3>Manage your event here : </h3>
      <div class="box_option">
        <div>Id: {{ events_store.events[page_id].id }}</div>
        <div>Name : {{ events_store.events[page_id].name }}</div>
        <div>Description : {{ events_store.events[page_id].description }}</div>
        <div>Start date : {{ events_store.events[page_id].start_date }}</div>
        <div>End date : {{ events_store.events[page_id].end_date }}</div>
        <div>Location : {{ events_store.events[page_id].location }}</div>
        <div>Acceptation invitation : {{ events_store.events[page_id].auto_accept }}</div>
        <div>Visibility : {{ events_store.events[page_id].visibility }}</div>
        <div>Creation date : {{ events_store.events[page_id].created_at }}</div>
        <div>Updated at : {{ events_store.events[page_id].updated_at }}</div>
      </div>
      <div class="box_option">
        Manage guests : <router-link :to="{ name: 'event_manage_people', params: { id: events_store.events[page_id].id } }">Guests</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useEventsStore } from "@/stores/events";

const route = useRoute()
const events_store = useEventsStore()


const page_id = route.params.id - 1

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