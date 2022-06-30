<template>
  <div>
    <br />
    <div class="main_container">
      <div class="background_debug">
        <h3>- DEBUG VALUES -</h3>
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
      <div>
        <div id="progress_indicator_1" @click="switch_focus(1)" class="progress_button unfinished_button_color"></div>
        <div id="progress_indicator_2" @click="switch_focus(2)" class="progress_button unfinished_button_color"></div>
        <div id="progress_indicator_3" @click="switch_focus(3)" class="progress_button unfinished_button_color"></div>
        <div id="progress_indicator_4" @click="switch_focus(4)" class="progress_button unfinished_button_color"></div>
      </div>
      <div>-</div>

      <div class="input_container">
        <div class="mini_element_container" v-if="current_focus == 1">
          <input type="text" v-model="event_name" @keyup.enter="cycle_button" placeholder="Nom evenement"
            autocomplete="on" required />
        </div>
        <div class="mini_element_container" v-if="current_focus == 2">
          <input class="mini_element" v-model="event_start_date" @keyup.enter="cycle_button" type="datetime-local"
            name="start_date" id="" autocomplete="on" />
          <input class="mini_element" v-model="event_end_date" @keyup.enter="cycle_button" type="datetime-local"
            name="end_date" id="" autocomplete="on" />
        </div>
        <div class="mini_element_container" v-if="current_focus == 3">
          <input class="mini_element" v-model="event_city" @keyup.enter="cycle_button" type="text" placeholder="city"
            autocomplete="on" />
          <input class="mini_element" v-model="event_postal_code" @keyup.enter="cycle_button" type="text"
            placeholder="postal code" autocomplete="on" />
          <input class="mini_element" v-model="event_street" @keyup.enter="cycle_button" type="text" placeholder="rue"
            autocomplete="on" />
        </div>
        <div class="mini_element_container" v-if="current_focus == 4">
          Texte presentation
          <input class="mini_element" v-model="event_description" @keyup.enter="cycle_button" type="text"
            placeholder="Description de l'événement">
        </div>
        <div class="mini_element_container" v-if="current_focus == 5">
          Here is a resume. blablaba
        </div>
        <br>
        <div v-if="current_focus > 3">
          <router-link @click="confirm_event()" to="/event/create/confirm">Finish event</router-link>
          <br />
          <router-link to="/event/create/confirm">Finish event - no confirm</router-link>
          <br />
          <button @click="confirm_event()">
            Confirm event - no page change
          </button>
        </div>
        <button @click="cycle_button">Cycle</button>
      </div>
    </div>
    <br />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCreateEventStore } from "../../stores/create_event";
import * as http_func from '../../functions/http_functions';
const CreateEventStore = useCreateEventStore();



const current_focus = ref(1);
const event_name = ref("");
const event_start_date = ref();
const event_end_date = ref();
const event_city = ref("");
const event_postal_code = ref("");
const event_street = ref("");
const event_description = ref("");


onMounted(() => {
  console.log('Mounted EventCreateProcessView');
  check_values()
})


function check_values() {
  console.log('Checking values');
  if (CreateEventStore.event_name != "") {
    console.log('Store has something. Setting variables to store values');
    event_name.value = CreateEventStore.event.name;
    event_start_date.value = CreateEventStore.event.start_date;
    event_end_date.value = CreateEventStore.event.end_date;
    event_city.value = CreateEventStore.event.city;
    event_postal_code.value = CreateEventStore.event.postal_code;
    event_street.value = CreateEventStore.event.street;
    event_description.value = CreateEventStore.event.description;
  }

}

function cycle_button() {
  if (current_focus.value >= 5) {
    switch_focus(1);
  } else {
    current_focus.value++;
  }
  progress_indicator();
}

function switch_focus(number) {
  current_focus.value = number;
  progress_indicator();
}

function confirm_event() {
  console.log('Event confirmed, submitting to server & store');
  CreateEventStore.event["name"] = event_name.value;
  CreateEventStore.event["start_date"] = event_start_date.value;
  CreateEventStore.event["end_date"] = event_end_date.value;
  CreateEventStore.event["city"] = event_city.value;
  CreateEventStore.event["postal_code"] = event_postal_code.value;
  CreateEventStore.event["street"] = event_street.value;
  CreateEventStore.event["description"] = event_description.value;
  http_func.send_event_server(CreateEventStore.event);
}



function progress_indicator() {
  switch (current_focus.value) {
    case 1:
      document
        .getElementById("progress_indicator_1")
        .classList.remove("done_button_color");
      document
        .getElementById("progress_indicator_2")
        .classList.remove("done_button_color");
      document
        .getElementById("progress_indicator_3")
        .classList.remove("done_button_color");
      document
        .getElementById("progress_indicator_4")
        .classList.remove("done_button_color");
      document
        .getElementById("progress_indicator_1")
        .classList.add("unfinished_button_color");
      document
        .getElementById("progress_indicator_2")
        .classList.add("unfinished_button_color");
      document
        .getElementById("progress_indicator_3")
        .classList.add("unfinished_button_color");
      document
        .getElementById("progress_indicator_4")
        .classList.add("unfinished_button_color");
      break;
    case 2:
      document
        .getElementById("progress_indicator_1")
        .classList.remove("unfinished_button_color");
      document
        .getElementById("progress_indicator_1")
        .classList.add("done_button_color");
      break;
    case 3:
      document
        .getElementById("progress_indicator_2")
        .classList.remove("unfinished_button_color");
      document
        .getElementById("progress_indicator_2")
        .classList.add("done_button_color");
      break;
    case 4:
      document
        .getElementById("progress_indicator_3")
        .classList.remove("unfinished_button_color");
      document
        .getElementById("progress_indicator_3")
        .classList.add("done_button_color");
      break;
    case 5:
      document
        .getElementById("progress_indicator_4")
        .classList.remove("unfinished_button_color");
      document
        .getElementById("progress_indicator_4")
        .classList.add("done_button_color");
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
  border-radius: 5vh;
}

.mini_element_container {
  display: flex;
  flex-direction: column;
  width: 50vw;
}

.mini_element {
  margin-top: 1vh;
  margin-bottom: 1vh;
}

.input_container {
  padding-bottom: 5vh;
}

.progress_button {
  border: none;
  color: black;
  padding: 1.1vh 2.2vh;
  text-align: center;
  display: inline-block;
  margin: 1vh 1vw;
  cursor: pointer;
  border-radius: 16vw;
}

.unfinished_button_color {
  background-color: red;
}

.done_button_color {
  background-color: #0075a2;
}

.background_debug {
  padding: 2vh;
  border-radius: 5vh;
  background-color: rgb(255, 77, 77);
}
</style>