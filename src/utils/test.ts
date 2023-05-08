import { createApp, App, h } from 'vue'

/**
 * 辅助测试组合式函数
 * @param composable 
 * @returns 
 */
export function withSetup<T extends (...args: any[]) => any>(composable: T): [ReturnType<T>, App<Element>]  {
    let result
    const app = createApp({
        setup() {
            result = composable()
            return () => h("div", {}, "Hello World")
        }
    });
    const _div = document.createElement("div");
    document.appendChild(_div);
    app.mount(_div);
    return [result, app]
};

/**
 * 简易promise定时返回
 * @param result 
 * @param timer 
 * @returns 
 */
export function sleep<T>(result: T, timer = 0): Promise<T> {
    return new Promise<T>(resolve => {
        setTimeout(() => {
            resolve(result);
        }, timer)
    })
}