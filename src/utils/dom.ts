
export interface CreateElementOptions {
    className?: string
    innerText?: string
    innerHTML?: string
    children?: Element | Element[]
}
export function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: CreateElementOptions): HTMLElementTagNameMap[K];
export function createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: CreateElementOptions): HTMLElementDeprecatedTagNameMap[K];
export function createElement(tag, options) {
    const _dom = document.createElement(tag);
    options?.className && (_dom.className = options.className);
    options?.innerText && (_dom.innerText = options.innerText);
    options?.innerHTML && (_dom.innerHTML = options.innerHTML);
    if (options?.children) {
        if (Array.isArray(options.children) && options.children.length) {
            options.children.forEach(child => _dom.appendChild(child));
        } else _dom.appendChild(options.children);
    }
    return _dom;
};

export function querySelectorElement(select: string | Element) {
    if (!select) return null;
    if (typeof select !== "string") return select;
    return document.querySelector(select);
};

/**
 * 寻找距离该元素最近的可滚动容器
 * @param element 
 * @returns 
 */
export function deepFindOverflowAutoFatherElement(element: Element): HTMLElement | Window {
    if (!element.parentElement) return window;
    const { overflowX, overflowY } = element.parentElement.style;
    if ([overflowX, overflowY].includes("auto") || [overflowX, overflowY].includes("scroll")) {
        return element.parentElement;
    } else {
        return deepFindOverflowAutoFatherElement(element.parentElement);
    }
}