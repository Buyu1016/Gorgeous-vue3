import { describe, expect, test } from 'vitest'
import { usePaging } from "../index";
import { sleep, withSetup } from '@/utils/test';

describe('usePaging', () => {
    test("usePaging", async () => {
        const { index, size, value, total, loading, finished, getData } = usePaging(async () => {
            const result = await new Promise<number[]>(resolve => {
                setTimeout(() => {
                    resolve([1,2,3,4]);
                    if (value.value && value.value.length >= 4) {
                        finished.value = true;
                    }
                }, 1000);
            });
            return result;
        }, {
            index: 2,
            size: 100,
            init: []
        });
        // init初始化值
        expect(Array.isArray(value.value) && value.value.length === 0).toBeTruthy();
        expect(index.value).toBe(2);
        expect(size.value).toBe(100);
        // 请求数据
        await getData();
        expect(Array.isArray(value.value) && value.value.length === 4).toBeTruthy();
        await getData();
        // 数据请求完毕, 数据已完整
        expect(finished.value).toBeTruthy();
    });
    test("usePaging setup", async () => {
        const [ result, app ] = withSetup(() => {
            function getData(config: Record<"index" | "size", number>) {
                return sleep([1, 2, 3, 4], 1000);
            }
            const result = usePaging(async () => {
                if (result.value.value && result.value.value?.length >= 5) {
                    result.finished.value = true;
                    return [];
                }
                const response = await getData({
                    index: result.index.value,
                    size: result.size.value
                });
                result.index.value += 1;
                return response;
            });
            return result
        });
        const { index, size, value, total, loading, finished, getData } = result;
        // init初始化值
        expect(Array.isArray(value.value) && value.value.length === 0).toBeTruthy();
        expect(index.value).toBe(1);
        expect(size.value).toBe(10);
        // 请求数据
        await getData();
        expect(Array.isArray(value.value) && value.value.length === 4).toBeTruthy();
        await getData();
        await getData();
        // 数据请求完毕, 数据已完整
        expect(finished.value).toBeTruthy();
    });
});