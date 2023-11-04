import Home from "#src/pages/Home.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [{ name: "home", path: "/", component: Home }];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
