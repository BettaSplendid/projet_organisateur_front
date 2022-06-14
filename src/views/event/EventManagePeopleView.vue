<template>
  <div>
    Manage the invited people here
    <div class="main_container">
      Chosoe your diet restrictions :
      <div class="diet_container">
        <label for="milk">Milk</label>
        <input type="checkbox" id="milk">
        <label for="meat">Meat</label>
        <input type="checkbox" id="meat">
        <label for="gluten">Gluten</label>
        <input type="checkbox" id="gluten">
        <label for="Eggs">Eggs</label>
        <input type="checkbox" id="Eggs">
        <label for="Fish">Fish</label>
        <input type="checkbox" id="Fish">
        <label for="Nuts">Nuts</label>
        <input type="checkbox" id="Nuts">
        <label for="Shellfish">Shellfish</label>
        <input type="checkbox" id="Shellfish">
        <label for="Soy">Soy</label>
        <input type="checkbox" id="Soy">
        <label for="Wheat">Wheat</label>
        <input type="checkbox" id="Wheat">
        <label for="Tree_nuts">Tree_nuts</label>
        <input type="checkbox" id="Tree_nuts">
        <label for="Peanuts">Peanuts</label>
        <input type="checkbox" id="Peanuts">
        <label for="Sesame">Sesame</label>
        <input type="checkbox" id="Sesame">
        <label for="Alcohol">Alcohol</label>
        <input type="checkbox" id="Alcohol">
        <label for="Coconut">Coconut</label>
        <input type="checkbox" id="Coconut">
        <label for="Sugar">Sugar</label>
        <input type="checkbox" id="Sugar">
        <label for="Sulfites">Sulfites</label>
        <input type="checkbox" id="Sulfites">
        <label for="fruit">fruit</label>
        <input type="checkbox" id="fruit">
        <label for="Garlic">Garlic</label>
        <input type="checkbox" id="Garlic">
        <label for="Celery">Celery</label>
        <input type="checkbox" id="Celery">
        <label for="Mustard">Mustard</label>
        <input type="checkbox" id="Mustard">
        <label for="Peanut">Peanut</label>
        <input type="checkbox" id="Peanut">
        <label for="Poultry">Poultry</label>
        <input type="checkbox" id="Poultry">
        <label for="Red_meat">Red_meat</label>
        <input type="checkbox" id="Red_meat">
        <label for="other">Other</label>
        <textarea name="other" id="other" cols="30" rows="10"></textarea>
      </div>
      <button @click="encode_diet_restrictions">Submit choices</button>
    </div>
  </div>
</template>

<script setup>
import * as mykey from '../../functions/diet_functions'
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
  
}
</style>