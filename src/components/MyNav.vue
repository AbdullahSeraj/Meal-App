<template>
  <div class="header">
    <div class="home">
      <router-link class="homeLink" :to="{ name: 'home' }">Home</router-link>
    </div>
    <div class="links">
      <router-link class="link" :to="{ name: 'byName' }"
        >Search Meals</router-link
      >
      <router-link class="link" :to="{ name: 'byLetter' }"
        >Meals By Letter</router-link
      >
      <router-link class="link" :to="{ name: 'ingredients' }"
        >Meals By Ingredients</router-link
      >
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  background-color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.442);
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .home {
    margin-left: 30px;
    @media (max-width: 756px) {
      padding: 15px;
      margin: 0;
      width: 100%;
    }
    .homeLink {
      color: rgb(255, 106, 0);
      text-decoration: none;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .links {
    display: flex;
    height: 100%;

    @media (max-width: 756px) {
      width: 100%;
    }

    .link {
      color: black;
      text-decoration: none;
      transition: 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;

      @media (max-width: 756px) {
        padding: 10px 20px;
        width: 33.33%;
      }

      &:hover {
        background-color: rgba(0, 0, 255, 0.221);
      }
    }
  }
}
</style>
