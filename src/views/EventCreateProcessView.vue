<template>
  <div>
    <br>
    <div class="main_container">
      <div>Current focus {{ current_focus }}</div>
      <div v-if="current_focus == 1">
        <input type="text" name="" id="" placeholder="Nom evenement">
      </div>
      <div v-if="current_focus == 2">
        <input type="datetime-local" name="start_date" id="">
        <input type="datetime-local" name="end_date" id="">
      </div>
      <div v-if="current_focus == 3">
        <input type="text" name="" id="" placeholder="ville">
        <input type="text" name="" id="" placeholder="code postal">
        <input type="text" name="" id="" placeholder="rue">
        <input type="text" name="" id="" placeholder="informations supplémentaires">
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

const current_thing = ref("name");
const current_focus = ref(1);

function cycle_button() {
  if (current_focus.value >=4 ) {
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