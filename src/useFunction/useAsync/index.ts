import { ref, UnwrapRef } from "vue";

export interface UseAsyncOptions <T> {
    // 初始值
    init?: T
    // 错误捕获
    errorHandle?: (err: any) => void
    // 初始化运行函数, 默认执行
    start?: boolean
}

export type UseAsyncPromise <T> = () => Promise<T>;

/**
 * 提供异步函数管理能力
 * @param promise 函数
 * @param options 可选项
 * @returns 
 */
export function useAsync<T>(promise: UseAsyncPromise<T>, options?: UseAsyncOptions<T>){
    const loading = ref(false);
    const value = ref<T | undefined>(options?.init);
    async function start() {
        loading.value = true;
        await promise()
            .then(result => {
                value.value = result as UnwrapRef<T>;
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