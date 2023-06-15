import { Directive, App } from "vue";
import { deepFindOverflowAutoFatherElement } from "@/utils/dom";
import { generateHash } from "@/utils/tools";

export interface DeferOptions {
    animateName?: string
    duration?: number // ms
    delay?: number // ms
    iteration?: number
    offset?: number // px
    callback?: (targetElement: HTMLElement) => void
}

export default {
    install(app: App, options?: DeferOptions) {
        const deferDirectiveFunction: Directive<HTMLElement, DeferOptions> = (el, binding) => {
            el.classList.add("wow");
            el.classList.add(`animate__${binding.value?.animateName ?? options?.animateName ?? "fadeIn"}`);
            el.setAttribute("data-wow-duration", `${binding.value?.duration ?? options?.duration ?? 1000}ms`);
            el.setAttribute("data-wow-delay", `${binding.value?.delay ?? options?.delay ?? 0}ms`);
            const targetScrollContainer = deepFindOverflowAutoFatherElement(el);
            let scrollContainerDataAttribute = generateHash();
            if (targetScrollContainer !== window) {
                if ("wowScrollContainer" in (targetScrollContainer as HTMLElement).dataset) {
                    // 如果已经有了就不用再设置了, 避免重复设置同一个父元素
                    scrollContainerDataAttribute = (targetScrollContainer as HTMLElement)?.dataset["wowScrollContainer"] as string;
                } else (targetScrollContainer as HTMLElement).setAttribute("data-wow-scroll-container", scrollContainerDataAttribute);
            };
            // 因为wow.js内部默认初始化会使用到window, 所以这里需要异步加载, 以保持vitepress的正常打包
            import("wow.js").then(params => {
                const wowInstance = new params.default({
                    callback(targetElement: HTMLElement) {
                        options?.callback?.(targetElement);
                        binding.value?.callback?.(targetElement);
                    },
                    scrollContainer: targetScrollContainer === window ? null : `[data-wow-scroll-container='${scrollContainerDataAttribute}']`
                });
            wowInstance.init();
        });
        };
        app.directive("defer", deferDirectiveFunction);
    }
}