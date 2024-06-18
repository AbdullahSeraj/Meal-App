<template>
  <div class="by-letter">
    <h1 style="color: rgb(255, 106, 0); width: 100%; text-align: left">
      Search By Letter
    </h1>
    <div class="letters">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="(letter, i) in letters"
        :key="i"
        class="letter"
      >
        {{ letter }}
      </router-link>
    </div>

    <MealPage :meals="meals" />
  </div>
</template>

<script setup>
import MealPage from "@/components/MealsPage.vue";
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
import { useRoute } from "vue-router";
const route = useRoute();

const letters = "ABCDEFGHIJKLMNOPQRSTYVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style lang="scss">
.by-letter {
  padding: 30px;
}
.letters {
  display: flex;
  justify-content: center;
  gap: 7px;

  .letter {
    text-decoration: none;
    color: black;
    margin-top: 20px;

    &:hover {
      color: rgb(255, 106, 0);
    }
  }
}

.meals {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
  padding: 0 20px;

  .meal {
    background-color: white;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.208);

    img {
      height: 200px;
      width: 100%;
      object-fit: cover;
    }
    .text {
      text-align: left;
      padding: 20px;

      h3 {
        font-weight: bold;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
      }
    }
    .btns {
      margin-top: 15px;

      .youtube,
      .view {
        border-radius: 5px;
        padding: 5px 10px;
        text-decoration: none;
        margin-right: 20px;
        font-weight: bold;
        background: white;
      }
      .youtube {
        color: rgb(255, 106, 0);
        border: 2px solid rgb(255, 106, 0);

        &:hover {
          background-color: rgb(255, 106, 0);
          color: white;
        }
      }
      .view {
        color: rgb(4, 126, 57);
        border: 2px solid rgb(4, 126, 57);

        &:hover {
          background-color: rgb(4, 126, 57);
          color: white;
        }
      }
    }
  }
}
</style>
