import { createApp } from "vue";
import GorgeousUI, { loadingDirective, GorgeousInput, assignConfig, floatDirective, integerDirective, deferDirective } from "@/entry";
import App from "@/App";

const app = createApp(App);

app.use(GorgeousUI).use(loadingDirective, {
    loadingComponent: GorgeousInput
}).use(floatDirective).use(integerDirective).use(deferDirective).mount("#app");

assignConfig({
    app
});
