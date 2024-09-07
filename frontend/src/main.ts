import { createApp } from "vue";
import "#src/assets/index.scss";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/lexend/400.css";
import App from "#src/App.vue";
import { router } from "#src/router";

const app = createApp(App);

app.use(router);

app.mount("#app");
