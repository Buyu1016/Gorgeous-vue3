import { ref } from "vue";

export interface UsePagingOptions <T extends any[]> {
    index?: number
    size?: number
    init?: T
};
export type UsePagingCallback <T extends any[]> = () => Promise<T>;

/**
 * 
 * @param callback 
 * @param options 
 * @returns 
 */
export function usePaging<T extends any[]>(callback: UsePagingCallback<T>, options?: UsePagingOptions<T>) {
    const loading = ref(false);
    const finished = ref(false);
    const index = ref(options?.index || 1);
    const size = ref(options?.size || 10);
    const total = ref<number>();
    const value = ref<T | undefined>(options?.init || [] as unknown as T);
    async function getData() {
        if (finished.value) return;
        loading.value = true;
        const _result = await callback();
        value.value?.push(..._result);
        loading.value = false;
        return _result;
    };
    return {
        index,
        size,
        total,
        value,
        loading,
        finished,
        getData
    };
};
