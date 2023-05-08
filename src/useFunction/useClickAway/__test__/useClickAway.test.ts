import { describe, expect, test } from "vitest";
import { useClickAway } from "../../index";
import { withSetup } from "@/utils/test";
import { ref, onMounted } from "vue";

describe("useClickAway", () => {
    test("useClickAway", async () => {
        let clickLock = false;
        const [ result, app ] = withSetup(() => {
            const oDiv = ref<HTMLElement>();
            onMounted(() => {
                oDiv.value = document.createElement("div");
                oDiv.value.classList.add("click-container");
                oDiv.value.innerText = "你好 单元测试!"
                document.appendChild(oDiv.value);
            });
            return useClickAway({
                root: oDiv,
                handle: () => {
                    clickLock = !clickLock
                }
            });
        });
        const _div = document.querySelector("div");
        const _divTarget = document.querySelector<HTMLDivElement>("div.click-container");
        _div?.click();
        expect(clickLock).toBeTruthy();
        _div?.click();
        expect(clickLock).toBeFalsy();
        _divTarget?.click();
        expect(clickLock).toBeFalsy();
    })
});