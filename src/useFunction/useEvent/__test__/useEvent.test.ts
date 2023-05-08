import { describe, expect, test } from 'vitest'
import { useEvent } from "../index";
import { withSetup } from "@/utils/test";

describe('useEvent', () => {
    test("useEvent", async () => {
        let clickWindowLock = false;
        let clickDocumentLock = false;
        const [ result, app ] = withSetup(() => {
            const { remove: removeWindowClick } = useEvent({
                root: window,
                events: [{
                    type: "click",
                    handle: () => {
                        clickWindowLock = !clickWindowLock;
                    }
                }]
            });
            const { remove: removeDocumentClick } = useEvent({
                root: window,
                events: [{
                    type: "click",
                    handle: () => {
                        clickDocumentLock = !clickDocumentLock;
                    }
                }]
            });
            return {
                removeWindowClick,
                removeDocumentClick
            }
        });
        const _div = document.querySelector("div");
        _div?.click();
        expect(clickWindowLock).toBeTruthy();
        expect(clickDocumentLock).toBeTruthy();
        result.removeDocumentClick();
        result.removeWindowClick();
        _div?.click();
        expect(clickWindowLock).toBeTruthy();
        expect(clickDocumentLock).toBeTruthy();
    });
    
});