<template>
  <a class="youtube" :href="href" target="_blank">
    <slot></slot>
  </a>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  href: String,
});
console.log(props);
</script>

<style lang="scss">
.youtube {
  border-radius: 5px;
  padding: 5px 10px;
  text-decoration: none;
  // margin-right: 20px;
  font-weight: bold;
  background: white;
  color: rgb(255, 106, 0);
  border: 2px solid rgb(255, 106, 0);

  &:hover {
    transition: 0.3s;
    background-color: rgb(255, 106, 0);
    color: white;
  }
}
</style>
