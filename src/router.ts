import {
    type RouteRecordRaw,
    createRouter,
    createWebHistory,
} from "vue-router";

const ChooseNamePage = () => import("#src/pages/ChooseNamePage.vue");
const ListSpacesPage = () => import("#src/pages/ListSpacesPage.vue");
const SpacePage = () => import("#src/pages/SpacePage.vue");
const FileTransferPage = () => import("#src/pages/FileTransferPage.vue");

const routes: RouteRecordRaw[] = [
    { name: "home", path: "/", redirect: { name: "chooseName" } },
    { name: "chooseName", path: "/choose-name", component: ChooseNamePage },
    {
        path: "/spaces",
        redirect: {
            name: "listSpaces",
        },
        children: [
            {
                path: "",
                name: "listSpaces",
                component: ListSpacesPage,
            },
            {
                path: "",
                redirect: "space",
                children: [
                    {
                        path: ":name",
                        name: "space",
                        component: SpacePage,
                    },
                    {
                        path: ":name/transfers",
                        name: "transfers",
                        component: FileTransferPage,
                    },
                ],
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
