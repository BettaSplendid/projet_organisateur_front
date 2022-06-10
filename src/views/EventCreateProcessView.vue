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
      </div>

      <div>-</div>
      <div>Progress here:

        <div id="progress_indicator_1" class="unfinished_button_color"> aaaaaaaaaaaaa </div>
        <div id="progress_indicator_2" class="unfinished_button_color"> bbbbbbbbbbbb </div>
        <div id="progress_indicator_3" class="unfinished_button_color"> cccccccccccc </div>
        <div id="progress_indicator_4" class="unfinished_button_color"> dddddddddddd </div>
      </div>
      <div>-</div>


      <div class="input_container">
        <div class="mini_element_container" v-if="current_focus == 1">
          <input type="text" v-model="event_name" name="" id="" placeholder="Nom evenement" />
        </div>
        <div class="mini_element_container" v-if="current_focus == 2">
          <input class="mini_element" v-model="event_start_date" type="datetime-local" name="start_date" id="" />
          <input class="mini_element" v-model="event_end_date" type="datetime-local" name="end_date" id="" />
        </div>
        <div class="mini_element_container" v-if="current_focus == 3">
          <input class="mini_element" v-model="event_city" type="text" name="" id="" placeholder="ville" />
          <input class="mini_element" v-model="event_postal_code" type="text" name="" id="" placeholder="code postal" />
          <input class="mini_element" v-model="event_street" type="text" name="" id="" placeholder="rue" />

        </div>
        <div v-if="current_focus == 4">Texte presentation</div>
      </div>
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
function cycle_button() {
  if (current_focus.value >= 4) {
    current_focus.value = 1;
  } else {
    current_focus.value++;
  }
  // progress_indicator()
}

// function progress_indicator() {
//   switch (current_focus.value) {
//     case 1:
//       document.getElementById("progress_indicator_1").classList.add("unfinished_button_color");
//       break;
//     case 2:
//       document.getElementById("progress_indicator_1").classList.remove("unfinished_button_color");
//       document.getElementById("progress_indicator_1").classList.add("done_button_color");
//       break;
//     case 3:
//       document.getElementById("progress_indicator_2").classList.remove("unfinished_button_color");
//       document.getElementById("progress_indicator_2").classList.add("done_button_color");
//       break;
//     case 4:
//       document.getElementById("progress_indicator_3").classList.remove("unfinished_button_color");
//       break;
//   }
// }

</script>

<style>
.main_container {
  display: flex;
  flex-direction: column;
  padding: 1vh;
  align-items: center;
  box-shadow: 0 0 10px #000;
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

.unfinished_button_color {
  background-color: red
}

.done_button_color {
  background-color: blue
}
</style>