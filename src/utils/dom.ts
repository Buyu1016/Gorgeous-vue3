
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