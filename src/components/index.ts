import { App } from "vue";
import GorgeousFloatButton from "./FloatButton";
import GorgeousImage from "./Image";
import GorgeousInput from "./Input";
import GorgeousSelect from "./Select";
import GorgeousRichText from "./RichText";
import GorgeousLoading from "./Loading";

const Components = [GorgeousFloatButton, GorgeousImage, GorgeousInput, GorgeousSelect, GorgeousRichText, GorgeousLoading];
export {
    GorgeousFloatButton,
    GorgeousImage,
    GorgeousInput,
    GorgeousSelect,
    GorgeousRichText,
    GorgeousLoading
}

// 全量注册
export const ComponentInstall = {
    install(app: App) {
        Components.forEach(component => {
            app.component(component.name, component);
        });
    }
}