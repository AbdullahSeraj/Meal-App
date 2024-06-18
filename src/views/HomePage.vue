<template>
  <div class="home">
    <h1
      style="
        color: rgb(255, 106, 0);
        width: 100%;
        text-align: left;
        margin-bottom: 20px;
      "
    >
      Random Meals
    </h1>

    <MealsPage :meals="meals" />
  </div>
</template>

<script setup>
import MealsPage from "@/components/MealsPage.vue";
import { ref, onMounted } from "vue";
import axiosClient from "@/axisoClient.js";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>

<style lang="scss" scoped>
.home {
  padding: 30px;
}
</style>
