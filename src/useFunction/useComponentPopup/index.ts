/**目标:
 * 将组件自由转换为一个弹窗式组件
 * 需要提供一个手动卸载的方式
 */
import { Component } from "vue";
import { componentTransformElement, createElement, querySelectorElement } from "@/utils";
import { useToggle } from "@/useFunction";
import "./index.less";

export interface UseComponentPopupOptions {
    // 嵌入组件, 组件内部的props必须接收一个fakeCallback参数用于处理内外部事件通信
    component: Component
    // 组件对应的props参数
    props?: Record<string, any>,
    // 弹窗组件的挂载容器
    mountRoot?: string | Element
    // 点击空白处关闭功能
    clickOverlayClose?: boolean
    // 关闭按钮功能
    clickButtonClose?: boolean
    // z-index层级
    overlayZIndex?: number
    // 标题
    title?: string
}

export interface CreatePopupElementOptions {
    // 标题
    title?: string
    // 点击空白处关闭功能
    clickOverlayClose: boolean
    // 关闭按钮功能
    clickButtonClose: boolean
    // z-index层级
    overlayZIndex: number
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
    const _mountElement = options.mountRoot ? querySelectorElement(options.mountRoot) : document.body;
    // 弹窗初始化
    function popupInit() {
        if (!_mountElement) throw new Error('弹窗挂载容器不存在');
        // 内部的事件均已onXxx的形式在props中存在即可
        const _componentElement = componentTransformElement(options.component, options.props);
        // 制作弹窗
        const _popupElement = createPopupElement(_componentElement, toggle, {
            clickOverlayClose: options.clickOverlayClose ?? true,
            clickButtonClose: options.clickButtonClose ?? true,
            overlayZIndex: options.overlayZIndex ?? 100,
            title: options.title
        });
        open = _popupElement.open;
        close = _popupElement.close;
        remove = _popupElement.remove;
        _mountElement.appendChild(_popupElement.popup);
    };
    return {
        state,
        toggle,
        unMount: () => {
            remove?.()
        } // 手动卸载
    }
};

/**
 * 弹窗元素及其控制器
 * @param children 放入弹窗的元素
 * @param toggle 与外界联通的状态切换器
 * @returns 
 */
function createPopupElement(children: Element, toggle: (state?: boolean) => void, options: CreatePopupElementOptions) {
    // header
    let _popupHeaderContainer: HTMLDivElement | undefined;
    if (options.clickButtonClose || options.title) {
        let _popupTitle: HTMLDivElement | undefined;
        options.title && (_popupTitle = createElement("div", {
            className: "",
            innerText: options.title
        }));
        let _closeBtn: HTMLButtonElement | undefined;
        options.clickButtonClose && (_closeBtn = createElement("button", {
            className: "gorgeous-popup-close",
            innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></svg>',
        }));
        _closeBtn && _closeBtn.addEventListener("click", e => {
            close();
            e.stopPropagation();
        });
        _popupHeaderContainer = createElement("div", {
            className: "gorgeous-popup-header",
            children: [_popupTitle, _closeBtn].filter(t => t) as Element[]
        });
    };
    const _popupBodyContainer = createElement("div", {
        className: "gorgeous-popup-body",
        children
    });
    const _popupContainer = createElement("div", {
        className: "gorgeous-popup",
        children: [_popupHeaderContainer, _popupBodyContainer].filter(t => t) as Element[]
    });
    const _overlayContainer = createElement("div", {
        className: "gorgeous-overlay animate__animated animate__fadeIn hidden",
        children: _popupContainer
    });
    _overlayContainer.style.zIndex = options.overlayZIndex.toString();
    _popupContainer.addEventListener("click", e => { // 内容区域阻止冒泡
        e.stopPropagation();
    });
    options.clickOverlayClose && _overlayContainer.addEventListener("click", e => {
        close();
        e.stopPropagation(); // 防止冒泡到上层
    });
    // 配套的事件
    function open() {
        _overlayContainer?.classList.remove("hidden");
        toggle(true);
    };
    function close() {
        _overlayContainer?.classList.add("hidden");
        toggle(false);
    };
    function remove() {
        _overlayContainer?.remove();
        toggle(false);
    };
    return {
        popup: _overlayContainer,
        open,
        close,
        remove
    };
};
