<template>
  <div>
    <div class="main_container">
      <div>Current focus {{ current_focus }}</div>
      <div v-if="current_focus == 1">Nom evenement</div>
      <div v-if="current_focus == 2">Date et heure</div>
      <div v-if="current_focus == 3">Lieu evenement</div>
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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>