import { App } from "vue";
import GorgeousFloatButton from "./FloatButton";
import "uno.css"

const Components = [GorgeousFloatButton];
export {
    GorgeousFloatButton
}

// 全量注册
export const ComponentInstall = {
    install(app: App) {
        Components.forEach(component => {
            app.component(component.name, component);
        });
    }
}