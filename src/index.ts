import { createApp } from "vue";
import GorgeousUI from "@/entry";
import App from "@/App";
import { loading } from "@/directives/Loading/loading";

const app = createApp(App);

app.use(GorgeousUI).use(loading).mount("#app");
