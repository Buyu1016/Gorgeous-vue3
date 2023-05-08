import { ref } from "vue";

export interface UseAsyncOptions <T extends () => any> {
    // 初始值
    init?: PromiseReturnType<T>
    // 错误捕获
    errorHandle?: (err: any) => void
    // 初始化运行函数, 默认执行
    start?: boolean
}

/**
 * 提供异步函数管理能力
 * @param promise 函数
 * @param options 可选项
 * @returns 
 */
export function useAsync<T extends () => any>(promise: T, options?: UseAsyncOptions<T>){
    const loading = ref(false);
    const value = ref<PromiseReturnType<T> | undefined>(options?.init);
    async function start() {
        loading.value = true;
        await promise()
            .then(result => {
                value.value = result;
            }, options?.errorHandle || ((e) => { // 兜底
                console.log(`promise error => ${e}`);
            }))
            .finally(() => {
                loading.value = false;
            });
    };
    (options?.start !== false) && start();
    return {
        value,
        loading,
        start
    };
};