<template>
  <div class="page">
    <h1 style="color: rgb(255, 106, 0); width: 100%; text-align: left">
      Ingredients
    </h1>
    <input
      type="text"
      class="search"
      placeholder="Search For Ingredients"
      v-model="keyword"
    />
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      class="ingredient"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
    >
      <h3>{{ ingredient.strIngredient }}</h3>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axiosClient from "@/axisoClient.js";

const keyword = ref("");
const ingredients = ref([]);

const computedIngredients = computed(() => {
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<style lang="scss">
.page {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;

  .search {
    border-radius: 3px;
    border: 2px solid #ddd;
    width: 100%;
    padding: 10px 15px;
    font-size: 20px;

    &:focus {
      outline-color: rgb(255, 106, 0);
    }
  }

  .ingredient {
    background-color: white;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    color: black;

    &:hover {
      transition: 0.2s;
      color: rgb(255, 106, 0);
    }
  }
}
</style>
