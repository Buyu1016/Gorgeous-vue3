import { Component, createVNode, render } from "vue";
import { config } from "@/config/system";

/**
 * 将组件转化生成为真实Dom, 支持传入props
 * @param component 组件
 * @returns 组件的真实Dom
 */
export function componentTransformElement<R extends Element>(component: Component, props?: Parameters<typeof createVNode>[1]): R {
    const _ComponentVNode = createVNode(component, props);
    const _fragment = document.createDocumentFragment();
    // 如果app初始化了则同步一下组件上下文
    config.app && config.app._context && (_ComponentVNode.appContext = config.app._context);
    render(_ComponentVNode, _fragment as ShadowRoot);
    return _ComponentVNode.el as R;
};