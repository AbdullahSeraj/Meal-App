<template>
  <div class="mealDetails">
    <h2 class="title">{{ meal.strMeal }}</h2>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" style="max-width: 100%" />

    <div class="str">
      <div>
        <strong style="font-weight: bold">Category:</strong>
        {{ meal.strCategory }}
      </div>
      <div>
        <strong style="font-weight: bold">Area:</strong> {{ meal.strArea }}
      </div>
      <div>
        <strong style="font-weight: bold">Tags:</strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="instructions">
      <p style="margin-top: 50px">{{ meal.strInstructions }}</p>
    </div>

    <div
      style="
        display: flex;
        justify-content: center;
        gap: 50px;
        text-align: left;
        margin-top: 50px;
      "
    >
      <div class="ingredients" style="width: 50%">
        <h2 style="margin-bottom: 20px">Ingredients</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="index">
            <li
              v-if="meal[`strIngredient${index + 1}`]"
              style="margin-bottom: 7px"
            >
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="measures" style="width: 50%">
        <h2 style="margin-bottom: 20px">Measures</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="index">
            <li
              v-if="meal[`strMeasure${index + 1}`]"
              style="margin-bottom: 7px"
            >
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <div class="btns">
      <ButtonYoutube :href="meal.strYoutube">Go To YouTube</ButtonYoutube>
      <a :href="meal.strSource" target="_blank" class="view">
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import ButtonYoutube from "@/components/ButtonYoutube.vue";
import { onMounted, ref } from "vue";
import axiosClient from "@/axisoClient.js";
import { useRoute } from "vue-router";
const route = useRoute();

const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0];
  });
});
</script>

<style lang="scss" scoped>
.mealDetails {
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;

  .title {
    color: rgb(255, 106, 0);
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
  }
  .str {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 10px 0;
  }
  .instructions {
    line-height: 2;
    font-size: 18px;
  }

  .view {
    text-decoration: none;
    color: blue;
    padding: 7px 8px;
    border-radius: 5px;
    &:hover {
      background-color: rgba(0, 0, 255, 0.656);
      color: white;
      transition: 0.2s;
    }
  }
  .btns {
    margin: 50px 0px 30px;
    text-align: left;
    display: flex;
    gap: 20px;

    @media (max-width: 756px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }
  }
}
</style>
