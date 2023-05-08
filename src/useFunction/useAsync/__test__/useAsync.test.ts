import { describe, expect, test } from 'vitest'
import { useAsync } from "../index";
import { withSetup, sleep } from '@/utils/test';

describe('useAsync', () => {
    test("useAsync", async () => {
        const { loading, value, start } = useAsync(async () => {
            return await Promise.all([
                sleep([1, 2, 3, 4, 5], 1000),
                sleep("Hello CodeGorgeous", 2000)
            ]);
        }, {
            init: [[], ""],
            start: false
        });
        expect(Array.isArray(value.value?.[0]) && value.value?.[0].length === 0).toBeTruthy();
        expect(value.value?.[1]).toMatch("");
        expect(loading.value).toBeFalsy();
        await start();
        expect(loading.value).toBeFalsy();
        expect(value.value?.[0].join()).toMatch("1,2,3,4,5");
        expect(value.value?.[1]).toMatch("Hello CodeGorgeous");
    });
    test("useAsync ErrorHandler", async () => {
        let errorLock = false;
        const { start } = useAsync(async () => {
            return await Promise.reject()
        }, {
            errorHandle: () => {
                errorLock = true;
            },
            start: false
        });
        await start();
        expect(errorLock).toBeTruthy();
    });
    test("useAsync", async () => {
        
        const [ result ] = withSetup(() => {
            const result = useAsync(() => {
                // 异步函数
                return Promise.all([sleep([1, 2, 3], 1000), sleep("Hello World", 3000)]);
            }, {
                init: [[], ""],
                errorHandle: (e) => {
                    console.warn("Error: ", e);
                }
            });
            return result;
        });
        expect(Array.isArray(result.value.value?.[0]) && result.value.value?.[0].length === 0).toBeTruthy();
        expect(result.value.value?.[1]).toMatch("");
        await sleep(undefined, 3000);
        expect(Array.isArray(result.value.value?.[0]) && result.value.value?.[0].length === 3).toBeTruthy();
        expect(result.value.value?.[0].join()).toMatch("1,2,3");
        expect(result.value.value?.[1]).toMatch("Hello World");
    });
});