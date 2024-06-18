<template>
  <div class="meals">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length">
    <h3>There are no meals</h3>
  </div>
</template>

<script setup>
import MealItem from "@/components/MealItem.vue";
import { defineProps } from "vue";

const props = defineProps({
  meals: {
    type: Array,
    require: true,
  },
});
console.log(props);
</script>
