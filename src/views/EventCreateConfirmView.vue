<template>
    <div>
        Hello
        <div>Here is a confirmation of your temp_event</div>
        <div>It has the following stuff :</div>
        <div>Title : {{ temp_event['name'] }}</div>
        <div>Start date : {{ temp_event['start_date'] }}</div>
        <div>End date : {{ temp_event['end_date'] }}</div>
        <div>City : {{ temp_event['city'] }}</div>
        <div>Postal code : {{ temp_event['postal_code'] }}</div>
        <div>Street : {{ temp_event['street'] }}</div>
        <div>Description : {{ temp_event['description'] }}</div>
        

    </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { useCreateEventStore } from "../stores/create_event";
const CreateEventStore = useCreateEventStore();

const temp_event = ref({});

onMounted(() => {
    temp_event.value = CreateEventStore.event;
});

</script>