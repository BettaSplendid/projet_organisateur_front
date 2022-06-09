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
  
  <div @click="event_create()">Create a new event</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function event_create() {
  console.log("Create a new event");
  router.push("new_event")
}
</script>