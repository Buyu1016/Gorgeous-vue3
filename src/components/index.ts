import { App } from "vue";
import GorgeousFloatButton from "./FloatButton";
import GorgeousImage from "./Image";
import GorgeousInput from "./Input";
import GorgeousSelect from "./Select";
import GorgeousRichText from "./RichText";

const Components = [GorgeousFloatButton, GorgeousImage, GorgeousInput, GorgeousSelect, GorgeousRichText];
export {
    GorgeousFloatButton,
    GorgeousImage,
    GorgeousInput,
    GorgeousSelect,
    GorgeousRichText
}

// 全量注册
export const ComponentInstall = {
    install(app: App) {
        Components.forEach(component => {
            app.component(component.name, component);
        });
    }
}