<template>
  <div>
    miaou
    <br>
    <br>
    <div>Here is a resume of your event</div>
    <div>It has the following stuff :</div>
    <div>
      <div>Title : {{ temp_event["name"] }}</div>
      <div>Start date : {{ temp_event["start_date"] }}</div>
      <div>End date : {{ temp_event["end_date"] }}</div>
      <div>City : {{ temp_event["city"] }}</div>
      <div>Postal code : {{ temp_event["postal_code"] }}</div>
      <div>Street : {{ temp_event["street"] }}</div>
      <div>Description : {{ temp_event["description"] }}</div>
    </div>
    <br>
    You can
    <router-link :to="'/event/manage/' + event_id + '/people_add'"> add people </router-link> to the event, or <router-link to="">look for services.</router-link>
    <br>
    If you are happy with this, you can
    <router-link to="/dashboard">Return to your dashboard</router-link>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { useCreateEventStore } from "../../stores/create_event";
const CreateEventStore = useCreateEventStore();

const temp_event = ref({});

// const idid = ref(0);

onMounted(() => {
  temp_event.value = CreateEventStore.event;
});
</script>

<style>
.main_container {
  display: flex;
  flex-direction: column;
  padding: 1vh;
  align-items: center;
  box-shadow: 0 0 10px #000;
  border-radius: 5vh;
}
</style>