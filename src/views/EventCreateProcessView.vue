<template>
  <div>
    <br />
    <div class="main_container">
      <div>
        <div>Current focus {{ current_focus }}</div>
        <div>Event name : {{ event_name }}</div>
        <div>Event start date : {{ event_start_date }}</div>
        <div>Event end date : {{ event_end_date }}</div>
        <div>Event city : {{ event_city }}</div>
        <div>Event postal code : {{ event_postal_code }}</div>
        <div>Event street : {{ event_street }}</div>
        <div>Event description : {{ event_description }}</div>
      </div>

      <div>-</div>
      <div v-if="current_focus == 1">
        <input
          type="text"
          v-model="event_name"
          name=""
          id=""
          placeholder="Nom evenement"
        />
      </div>
      <div v-if="current_focus == 2">
        <input
          v-model="event_start_date"
          type="datetime-local"
          name="start_date"
          id=""
        />
        <input
          v-model="event_end_date"
          type="datetime-local"
          name="end_date"
          id=""
        />
      </div>
      <div v-if="current_focus == 3">
        <input
          v-model="event_city"
          type="text"
          name=""
          id=""
          placeholder="ville"
        />
        <input
          v-model="event_postal_code"
          type="text"
          name=""
          id=""
          placeholder="code postal"
        />
        <input
          v-model="event_street"
          type="text"
          name=""
          id=""
          placeholder="rue"
        />

        <input
          v-model="event_description"
          type="text"
          name=""
          id=""
          placeholder="informations supplémentaires"
        />
      </div>
      <div v-if="current_focus == 4">Texte presentation</div>
    </div>
    <button @click="cycle_button">Cycle</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const current_focus = ref(1);

const event_name = ref("");
const event_start_date = ref();
const event_end_date = ref();
const event_city = ref("");
const event_postal_code = ref("");
const event_street = ref("");
const event_description = ref("");

function cycle_button() {
  if (current_focus.value >= 4) {
    current_focus.value = 1;
  } else {
    current_focus.value++;
  }
}
</script>

<style>
.main_container {
  display: flex;
  flex-direction: column;
  padding: 1vh;
  align-items: center;
  box-shadow: 0 0 10px #000;
}
</style>