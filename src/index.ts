import { createApp } from "vue";
import GorgeousUI, { loadingDirective, GorgeousInput, assignConfig } from "@/entry";
import App from "@/App";

const app = createApp(App);

app.use(GorgeousUI).use(loadingDirective, {
    loadingComponent: GorgeousInput
}).mount("#app");

assignConfig({
    app
});
