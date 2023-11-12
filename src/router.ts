import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const ChooseNamePage = () => import("#src/pages/ChooseNamePage.vue");
const ListSpacesPage = () => import("#src/pages/ListSpacesPage.vue");

const routes: RouteRecordRaw[] = [
    { name: "home", path: "/", redirect: { name: "chooseName" } },
    { name: "chooseName", path: "/choose-name", component: ChooseNamePage },
    { name: "listSpaces", path: "/spaces", component: ListSpacesPage },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
