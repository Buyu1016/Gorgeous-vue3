import { Directive, App } from "vue";

// 浮点数
export default {
    install(app: App) {
        const floatDirectiveFunction: Directive<HTMLInputElement, boolean> = (el) => {
            if (!(el instanceof HTMLInputElement)) {
                console.warn("v-float指令只能用于input元素");
                return;
            };
            el.addEventListener("blur", () => {
                let val = el.value;
                // 正则将val中的非数字字符与小数点符号变为空
                val = val.replace(/[^\d.]/g, "");
                // 防止多个小数点, 多小数点情况只保留最后一个
                const splitVal = val.split(".");
                if (splitVal.length > 2) { // 只有当切割后的字符串的长度超过2时才进行处理
                    const _lastVal = splitVal.pop(); // 取出最后一个元素
                    val = splitVal.join("") + "." + _lastVal; // 将切割后的数组拼接起来
                };
                el.value = val;
            });
        };
        app.directive("float", floatDirectiveFunction);
    }
}