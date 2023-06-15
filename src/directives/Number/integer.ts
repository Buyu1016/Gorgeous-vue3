import { Directive, App } from "vue";

export default {
    install(app: App) {
        const integerDirectiveFunction: Directive<HTMLInputElement, boolean> = (el) => {
            if (!(el instanceof HTMLInputElement)) {
                console.warn("v-integer指令只能用于input元素");
                return;
            };
            el.addEventListener("blur", () => {
                let val = el.value;
                // 正则将val中的非数字字符变为空
                val = val.replace(/[^\d]/g, "");
                el.value = val;
            });
        };
        app.directive("integer", integerDirectiveFunction);
    }
}