<template>
  <div class="meal">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" alt="" />
    </router-link>
    <div class="text">
      <h3>{{ meal.strMeal }}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum
        eos molestiae at reiciendis asperiores totam qui quae ab vitae, dicta
        tenetur id quis soluta, ipsum natus dolore modi iure.
      </p>
      <div class="btns">
        <ButtonYoutube :href="meal.strYoutube">YouTube</ButtonYoutube>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonYoutube from "@/components/ButtonYoutube.vue";
import { defineProps } from "vue";

const props = defineProps({
  meal: {
    type: Object,
    require: true,
  },
});
console.log(props);
</script>
