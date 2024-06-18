import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import SearchByName from "@/views/SearchByName";
import SearchByLetter from "@/views/SearchByLetter";
import SearchByIngredients from "@/views/SearchByIngredients";
import mealDetails from "@/views/mealDetails";
import IngredientsPage from "@/views/IngredientsPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/by-name/:name?",
    name: "byName",
    component: SearchByName,
  },
  {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: SearchByLetter,
  },
  {
    path: "/ingredients",
    name: "ingredients",
    component: IngredientsPage,
  },
  {
    path: "/by-ingredient/:ingredient?",
    name: "byIngredient",
    component: SearchByIngredients,
  },
  {
    path: "/meal/:id?",
    name: "mealDetails",
    component: mealDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
