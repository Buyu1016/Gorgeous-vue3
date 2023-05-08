import { describe, expect, test } from 'vitest'
import { useToggle } from "../index";
import { withSetup } from "@/utils/test";

describe('useToggle', () => {
    test("useToggle", async () => {
        const [result, app] = withSetup(() => {
            return useToggle();
        });
        expect(result.state.value).toBeFalsy();
        result.toggle();
        expect(result.state.value).toBeTruthy();
    });

    test("useToggle init", async () => {
        let watchLock = false;
        const [result, app] = withSetup(() => {
            return useToggle({
                initValue: true,
                watch: () => {
                    watchLock = !watchLock;
                }
            });
        });
        expect(result.state.value).toBeTruthy();
        result.toggle();
        expect(result.state.value).toBeFalsy();
        expect(watchLock).toBeFalsy();
        result.toggle(false);
        expect(result.state.value).toBeFalsy();
    });
});