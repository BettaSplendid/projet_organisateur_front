<template>
  <div class="page_container">
    Manage the invited people here
    <div class="main_container">
      <!-- Guests -->
      <div class="main_container">
        <p @click="add_some_guests()">
          Invite more people
        </p>
        <div v-if="add_people" class="flex_collumn">
          <input v-model="invitee.name" type="text" name="name" placeholder="Name">
          <input v-model="invitee.first_name" type="text" name="first_name" placeholder="first_name">
          <input v-model="invitee.email" type="text" name="email" placeholder="Email">
          <input v-model="invitee.phone1" type="phone" name="phone1" placeholder="Phone 1">
          <input v-model="invitee.phone2" type="phone" name="phone2" placeholder="Phone 2">
          <button @click="send_new_guest()">Confirm</button>
        </div>
      </div>

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
          <div class="food_box">Food restrictions : {{ mykey.decode_and_present_restrictions(foo.food_restrictions) }}
          </div>
          <button @click="toggle_restr_edit()">Edit restrictions</button>
          <div v-if="editing_restrictions">
            Choose your diet restrictions :
            <div>
              <div class="diet_container">
                <div class="diet_checkbox">
                  <label for="milk">Milk </label>
                  <input v-model="allergies.milk" type="checkbox" id="milk">
                </div>
                <div class="diet_checkbox">
                  <label for="meat">Meat </label>
                  <input v-model="allergies.meat" type="checkbox" id="meat">
                </div>
                <div class="diet_checkbox">
                  <label for="gluten">Gluten </label>
                  <input v-model="allergies.gluten" type="checkbox" id="gluten">
                </div>
                <div class="diet_checkbox">
                  <label for="Eggs">Eggs </label>
                  <input v-model="allergies.eggs" type="checkbox" id="Eggs">
                </div>
                <div class="diet_checkbox">
                  <label for="Fish">Fish </label>
                  <input v-model="allergies.fish" type="checkbox" id="Fish">
                </div>
                <div class="diet_checkbox">
                  <label for="Nuts">Nuts </label>
                  <input v-model="allergies.nuts" type="checkbox" id="Nuts">
                </div>
                <div class="diet_checkbox">
                  <label for="Shellfish">Shellfish </label>
                  <input v-model="allergies.shellfish" type="checkbox" id="Shellfish">
                </div>
                <div class="diet_checkbox">
                  <label for="Soy">Soy </label>
                  <input v-model="allergies.soy" type="checkbox" id="Soy">
                </div>
                <div class="diet_checkbox">
                  <label for="Wheat">Wheat </label>
                  <input v-model="allergies.wheat" type="checkbox" id="Wheat">
                </div>
                <div class="diet_checkbox">
                  <label for="Peanut">Peanut </label>
                  <input v-model="allergies.peanuts" type="checkbox" id="Peanut">
                </div>
                <div class="diet_checkbox">
                  <label for="Poultry">Poultry </label>
                  <input v-model="allergies.poultry" type="checkbox" id="Poultry">
                </div>
                <div class="diet_checkbox">
                  <label for="Red_meat">Red meat </label>
                  <input v-model="allergies.red_meat" type="checkbox" id="Red_meat">
                </div>
              </div>
              <div class="diet_container">
                <div class="diet_checkbox">
                  <label for="Tree_nuts">Tree nuts </label>
                  <input v-model="allergies.tree_nuts" type="checkbox" id="Tree_nuts">
                </div>
                <div class="diet_checkbox">
                  <label for="Peanuts">Peanuts </label>
                  <input v-model="allergies.peanuts" type="checkbox" id="Peanuts">
                </div>
                <div class="diet_checkbox">
                  <label for="Sesame">Sesame </label>
                  <input v-model="allergies.sesame" type="checkbox" id="Sesame">
                </div>
                <div class="diet_checkbox">
                  <label for="Alcohol">Alcohol </label>
                  <input v-model="allergies.alcohol" type="checkbox" id="Alcohol">
                </div>
                <div class="diet_checkbox">
                  <label for="Coconut">Coconut </label>
                  <input v-model="allergies.coconut" type="checkbox" id="Coconut">
                </div>
                <div class="diet_checkbox">
                  <label for="Sugar">Sugar </label>
                  <input v-model="allergies.sugar" type="checkbox" id="Sugar">
                </div>
                <div class="diet_checkbox">
                  <label for="Sulfites">Sulfites </label>
                  <input v-model="allergies.sulfites" type="checkbox" id="Sulfites">
                </div>
                <div class="diet_checkbox">
                  <label for="fruit">Fruit </label>
                  <input v-model="allergies.fruit" type="checkbox" id="fruit">
                </div>
                <div class="diet_checkbox">
                  <label for="Garlic">Garlic </label>
                  <input v-model="allergies.garlic" type="checkbox" id="Garlic">
                </div>
                <div class="diet_checkbox">
                  <label for="Celery">Celery </label>
                  <input v-model="allergies.celery" type="checkbox" id="Celery">
                </div>
                <div class="diet_checkbox">
                  <label for="Mustard">Mustard </label>
                  <input v-model="allergies.mustard" type="checkbox" id="Mustard">
                </div>
              </div>

            </div>

            <button @click="mykey.encode_diet_restrictions(allergies)">Validate</button>
          </div>
        </div>
      </div>

    </div>
    <!-- Restrictions -->

    <button @click="present_restrictions()">
      Debug
    </button>

  </div>

</template>

<script setup>
import * as mykey from '../../functions/diet_functions'
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import * as http_func from '@/functions/http_functions';
import { useRoute } from "vue-router";

const route = useRoute()
// const page_id = route.params.id - 1
const editing_restrictions = ref(false)


var invitee = ref({
  event_id: route.params.id,
  name: null,
  first_name: null,
  phone1: null,
  phone2: null,
  email: null,
  disabled: false
})

var add_people = ref(false)
var event_guests = ref()

onMounted(async () => {
  console.log('mounted');
  event_guests.value = await http_func.get_event_guests(route.params.id)
})

function add_some_guests() {
  add_people.value = !add_people.value;
}

function toggle_restr_edit() {
  editing_restrictions.value = !editing_restrictions.value
}

function send_new_guest() {
  http_func.create_guest(route.params.id, invitee.value)
}

const allergies = ref({
  milk: false,
  meat: false,
  gluten: false,
  eggs: false,
  fish: false,
  nuts: false,
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

</script>

<style>
.flex_collumn {
  display: flex;
  flex-direction: column;
}

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
  justify-content: space-around;
}

.diet_checkbox {
  background-color: rgb(245, 73, 245);
  padding: 0.5vh;
  margin-bottom: 1vh;
  border-radius: 2vh;
  text-align: center
}

.food_box {
  display: flex;
  flex-direction: row;
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