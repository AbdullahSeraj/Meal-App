<template>
  <div>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import Meals from "@/components/MealsPage.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
import { useRoute } from "vue-router";
const route = useRoute();

const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
