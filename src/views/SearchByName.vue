<template>
  <div class="byName">
    <h1
      style="
        color: rgb(255, 106, 0);
        width: 100%;
        text-align: left;
        margin-bottom: 20px;
      "
    >
      Search By Name
    </h1>
    <input
      type="text"
      class="search"
      placeholder="Search For Meals"
      v-model="keyword"
      @change="searchMeals"
    />
    <MealsPage :meals="meals" />
  </div>
</template>

<script setup>
import MealsPage from "@/components/MealsPage.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
import { useRoute } from "vue-router";
const route = useRoute();

const keyword = ref("");

const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style lang="scss">
.byName {
  padding: 30px;
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
  .meals {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;

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
}
</style>
