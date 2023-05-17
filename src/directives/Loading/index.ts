import { Directive, App, Component } from "vue";
import "./style.less";
import { GorgeousLoading } from "@/components";
import { componentTransformElement } from "@/utils";

export interface LoadingOptions {
    loadingComponent?: Component
    props?: any
}

export default {
    install(app: App, options?: LoadingOptions) {
        const loadingDirectiveFunction: Directive<(HTMLElement & {_g_loading_instance_?: Element}), boolean> = (el, binding) => {
            //  1. 兜底加载动画组件&缓存dom实例
            const _loadingElement = el._g_loading_instance_ || componentTransformElement(options?.loadingComponent || GorgeousLoading);
            if (!el._g_loading_instance_) {
                el._g_loading_instance_ = _loadingElement; // 缓存
            };
            //  2. 根据binding里面的值向容器渲染加载动画组件
            //  3. 及时的卸载/重挂载加载状态组件
            if (binding.value) {
                el.appendChild(el._g_loading_instance_);
            } else {
                if (el.contains(el._g_loading_instance_)) {
                    el.removeChild(el._g_loading_instance_);
                }
            };
        };
        app.directive("loading", loadingDirectiveFunction);
    }
}