import { Directive, App } from "vue";
import "./style.less";

const loadingElement = `
    <div class="gorgeous-loading">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
            <path fill="currentColor" d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>
            <animateTransform attributeName="transform"
                attributeType="XML"
                type="rotate"
                values="0;360"
                dur="5s"
                repeatCount="indefinite"  additive="sum"/>
        </svg>
        <span>加载中...</span>
    </div>
`;

/**
 * 指令版动态显示加载中
 * v-loading="loading"
 * true => 加载中
 * false => 加载完毕
 * @param el 
 * @param binding 
 */
const loadingDirective: Directive<HTMLElement, boolean> = (el, binding) => {
    if (binding.value) { // 挂载加载中
        el.innerHTML = loadingElement;
    } else {
        el.querySelector<HTMLDivElement>(".gorgeous-loading")?.remove();
    };
};
export const loading = {
    install(app: App) {
        app.directive("loading", loadingDirective);
    }
}