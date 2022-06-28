<template>
  <div class="page_container">
    Manage the invited people here
    <div class="main_container">
      <!-- Guests -->
      <div v-for="foo in event_guests" :key="foo" class="event_box">
        <div class="box_option">
          <div> Name : {{ foo.name }}</div>
          <div>First Name : {{ foo.first_name }}</div>
          <div>Last Name : {{ foo.last_name }}</div>
          <div>Email : {{ foo.email }}</div>
          <div>Phone 1 : {{ foo.phone1 }}</div>
          <div>Phone 2 : {{ foo.phone2 }}</div>
          <div>Attendance : {{ foo.attendance_status }}</div>
          <div>Application : {{ foo.application_status }}</div>
          <div>Creation Date : {{ foo.created_at }}</div>
          <div>Last Updated at : {{ foo.updated_at }}</div>
          <div>Food restrictions : {{ foo.food_restrictions }}</div>
        </div>
      </div>
      <!-- Restrictions -->
      <!-- <div> 
        Choose your diet restrictions :
        <div class="diet_container">
          <div class="column_1">
            <div class="diet_checkbox">
              <label for="milk">Milk </label>
              <input type="checkbox" id="milk">
            </div>
            <div class="diet_checkbox">
              <label for="meat">Meat </label>
              <input type="checkbox" id="meat">
            </div>
            <div class="diet_checkbox">
              <label for="Alcohol">Alcohol </label>
              <input type="checkbox" id="Alcohol">
            </div>
            <div class="diet_checkbox">
              <label for="Eggs">Eggs </label>
              <input type="checkbox" id="Eggs">
            </div>
            <div class="diet_checkbox">
              <label for="Fish">Fish </label>
              <input type="checkbox" id="Fish">
            </div>
            <div class="diet_checkbox">
              <label for="Nuts">Nuts </label>
              <input type="checkbox" id="Nuts">
            </div>
            <div class="diet_checkbox">
              <label for="Shellfish">Shellfish </label>
              <input type="checkbox" id="Shellfish">
            </div>
            <div class="diet_checkbox">
              <label for="Soy">Soy </label>
              <input type="checkbox" id="Soy">
            </div>
            <div class="diet_checkbox">
              <label for="Wheat">Wheat </label>
              <input type="checkbox" id="Wheat">
            </div>
            <div class="diet_checkbox">
              <label for="Peanut">Peanut </label>
              <input type="checkbox" id="Peanut">
            </div>
            <div class="diet_checkbox">
              <label for="Poultry">Poultry </label>
              <input type="checkbox" id="Poultry">
            </div>
            <div class="diet_checkbox">
              <label for="Red_meat">Red_meat </label>
              <input type="checkbox" id="Red_meat">
            </div>
          </div>
          <div>
            <div class="diet_checkbox">
              <label for="Tree_nuts">Tree nuts </label>
              <input type="checkbox" id="Tree_nuts">
            </div>
            <div class="diet_checkbox">
              <label for="Peanuts">Peanuts </label>
              <input type="checkbox" id="Peanuts">
            </div>
            <div class="diet_checkbox">
              <label for="Sesame">Sesame </label>
              <input type="checkbox" id="Sesame">
            </div>
            <div class="diet_checkbox">
              <label for="Alcohol">Alcohol </label>
              <input type="checkbox" id="Alcohol">
            </div>
            <div class="diet_checkbox">
              <label for="Coconut">Coconut </label>
              <input type="checkbox" id="Coconut">
            </div>
            <div class="diet_checkbox">
              <label for="Sugar">Sugar </label>
              <input type="checkbox" id="Sugar">
            </div>
            <div class="diet_checkbox">
              <label for="Sulfites">Sulfites </label>
              <input type="checkbox" id="Sulfites">
            </div>
            <div class="diet_checkbox">
              <label for="fruit">Fruit </label>
              <input type="checkbox" id="fruit">
            </div>
            <div class="diet_checkbox">
              <label for="Garlic">Garlic </label>
              <input type="checkbox" id="Garlic">
            </div>
            <div class="diet_checkbox">
              <label for="Celery">Celery </label>
              <input type="checkbox" id="Celery">
            </div>
            <div class="diet_checkbox">
              <label for="Mustard">Mustard </label>
              <input type="checkbox" id="Mustard">
            </div>
          </div>

        </div>
        {{ allergies }}
        <button @click="mykey.encode_diet_restrictions(allergies)">Submit choices</button>
        <button @click="mykey.decode_diet_restrictions('0000010000000000000000')">Submit choices</button>
      </div> -->
      <button @click="log_event()">
        What in event guests
      </button>

    </div>
  </div>
</template>

<script setup>
import * as mykey from '../../functions/diet_functions'
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import * as http_func from '@/functions/http_functions';
import { useUserStore } from "@/stores/user";
import { useEventsStore } from "@/stores/events";
import { useRoute } from "vue-router";

const route = useRoute()
const events_store = useEventsStore()
const user_store = useUserStore()

var event_guests = ref()
const page_id = route.params.id - 1

onMounted(async () => {
  console.log('mounted');
  // event_guests = http_func.get_event_guests(route.params.id)
  var test
  test = await http_func.get_event_guests(route.params.id)
  event_guests.value = test
})

function log_event() {
  console.log(event_guests.value);
}


const restrictions_menu = ref(0)

const allergies = ref({
  milk: false,
  meat: false,
  gluten: false,
  eggs: false,
  fish: false,
  nuts: true,
  shellfish: false,
  soy: false,
  wheat: false,
  tree_nuts: false,
  peanuts: false,
  sesame: false,
  alcohol: false,
  coconut: false,
  sugar: false,
  sulfites: false,
  fruit: false,
  garlic: false,
  celery: false,
  mustard: false,
  poultry: false,
  red_meat: false,
});

// console.log(allergies.value);



</script>

<style>
.page_container {
  padding: 1vh;
}

.main_container {
  display: flex;
  flex-direction: column;
  padding: 1vh;
  align-items: center;
  box-shadow: 0 0 10px #000;
  border-radius: 5vh;
  height: 100%;
  border-radius: 5px;
}


.diet_container {
  display: flex;
  flex-direction: column;
}

.diet_checkbox {
  background-color: rgb(245, 73, 245);
  padding: 1vh;
  margin-bottom: 1vh;
  border-radius: 2vh;
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
  display: flex;
  flex-direction: column;
  margin-bottom: 1vh;
}
</style>