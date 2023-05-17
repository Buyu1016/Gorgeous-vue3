import { createApp, defineAsyncComponent } from "vue";
import GorgeousUI, { loadingDirective, GorgeousInput, DirectiveInstall } from "@/entry";
import App from "@/App";

const app = createApp(App);

app.use(GorgeousUI).use(loadingDirective, {
    loadingComponent: GorgeousInput
}).mount("#app");
