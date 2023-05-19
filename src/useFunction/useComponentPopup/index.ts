/**目标:
 * 将组件自由转换为一个弹窗式组件
 * 需要提供一个手动卸载的方式
 */
import { Component } from "vue";
import { componentTransformElement } from "@/utils/vue";
import { useToggle } from "@/useFunction";
import "./index.less";

export interface UseComponentPopupOptions {
    // 嵌入组件, 组件内部的props必须接收一个fakeCallback参数用于处理内外部事件通信
    component: Component
    // 组件对应的props参数
    props?: any,
    // 弹窗组件的挂载容器
    mountRoot?: string | Element
    // 事件响应
    eventHandle?: (...args: any[]) => void
    // TODO:
    // 点击空白处关闭功能
    // 关闭按钮功能
    // z-index层级
}

export function useComponentPopup(options: UseComponentPopupOptions) {
    // 弹窗状态控制
    const { state, toggle } = useToggle({
        watch: (value) => {
            if ([open, close, remove].includes(undefined)) popupInit();
            value ? open() : close();
        }
    });
    let open, close, remove;
    // 挂载容器初始捕获
    const _mountElement = options.mountRoot ? (typeof options.mountRoot === "string" ? document.querySelector(options.mountRoot) : options.mountRoot) : document.body;
    // 弹窗初始化
    function popupInit() {
        if (!_mountElement) throw new Error('弹窗挂载容器不存在');
        // 内部的事件均已onXxx的形式在props中存在即可
        const _componentElement = componentTransformElement(options.component, options.props);
        // 制作弹窗
        const _popupElement = createPopupElement(_componentElement, toggle);
        open = _popupElement.open;
        close = _popupElement.close;
        remove = _popupElement.remove;
        _mountElement.appendChild(_popupElement.popup);
    };
    return {
        state,
        toggle,
        unMount: remove
    }
};

// TODO:
/**
 * 弹窗元素及其控制器
 * @param children 放入弹窗的元素
 * @param toggle 与外界联通的状态切换器
 * @returns 
 */
function createPopupElement(children: Element, toggle: (state?: boolean) => void) {
    const _container = document.createElement("div");
    _container.classList.add("gorgeous-mask");
    const _popup = document.createElement("div");
    _popup.classList.add("gorgeous-popup");
    // close右上角关闭按钮
    const _closeBtn = document.createElement("button");
    _closeBtn.innerText = "关闭"
    _closeBtn.classList.add("gorgeous-popup-close");
    _popup.appendChild(_closeBtn);
    _popup.appendChild(children);
    _container.appendChild(_popup);
    _container.classList.add("hidden");
    _closeBtn.addEventListener("click", e => {
        close();
        e.stopPropagation();
    });
    _popup.addEventListener("click", e => { // 内容区域阻止冒泡
        e.stopPropagation();
    });
    _container.addEventListener("click", e => {
        close();
        e.stopPropagation(); // 防止冒泡到上层
    });
    // 配套的事件
    function open() {
        _container?.classList.remove("hidden");
        toggle(true);
    };
    function close() {
        _container?.classList.add("hidden");
        toggle(false);
    };
    function remove() {
        _container?.remove();
        toggle(false);
    };
    return {
        popup: _container,
        open,
        close,
        remove
    };
};
