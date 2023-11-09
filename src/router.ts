import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const ChooseNamePage = () => import("#src/pages/ChooseNamePage.vue");

const routes: RouteRecordRaw[] = [
    { name: "chooseName", path: "/choose-name", component: ChooseNamePage },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
