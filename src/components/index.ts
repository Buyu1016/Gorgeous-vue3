import { App } from "vue";
import GorgeousFloatButton from "./FloatButton";
import GorgeousImage from "./Image";
import GorgeousInput from "./Input";
import GorgeousSelect from "./Select";

const Components = [GorgeousFloatButton, GorgeousImage, GorgeousInput, GorgeousSelect];
export {
    GorgeousFloatButton,
    GorgeousImage,
    GorgeousInput,
    GorgeousSelect
}

// 全量注册
export const ComponentInstall = {
    install(app: App) {
        Components.forEach(component => {
            app.component(component.name, component);
        });
    }
}