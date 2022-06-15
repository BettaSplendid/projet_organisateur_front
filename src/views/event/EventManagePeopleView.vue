<template>
  <div>
    Manage the invited people here
    <div class="main_container">
      Chosoe your diet restrictions :
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


    </div>
  </div>
</template>

<script setup>
import * as mykey from '../../functions/diet_functions'
import { ref } from "vue";


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

console.log(allergies.value);



// import { encode_diet_restrictions } from '../../functions/diet_functions';
// milk meat gluten eggs fish nuts shellfish soy wheat tree nuts peanuts sesame alcohol coconut sugar sulfites fruit garlic celery mustard peanut poultry red meat other
// var diet_restrictions = {
//     1: 'Milk',
//     2: 'Meat',
//     3: 'Gluten',
//     4: 'Eggs',
//     5: 'Fish',
//     6: 'Nuts',
//     7: 'Shellfish',
//     8: 'Soy',
//     9: 'Wheat',
//     10: 'Tree Nuts',
//     11: 'Peanuts',
//     12: 'Sesame',
//     13: 'Alcohol',
//     14: 'Coconut',
//     15: 'Sugar',
//     16: 'Sulfites',
//     17: 'fruit',
//     18: 'Garlic',
//     19: 'Celery',
//     20: 'Mustard',
//     21: 'Peanut',
//     22: 'Poultry',
//     23: 'Red meat',
//     24: 'Other'
// }

// <label for="other">Other </label>
        // <textarea name="other" id="other" cols="30" rows="10"></textarea>
// 

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

.diet_container {
  display: flex;
  flex-direction: row;
}

.diet_checkbox {
  background-color: rgb(245, 73, 245);
  padding: 1vh;
  margin-bottom: 1vh;
  border-radius: 2vh;
}
</style>