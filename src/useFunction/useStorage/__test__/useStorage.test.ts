import { describe, expect, test } from 'vitest'
import { useStorage } from "../index";

describe('useStorage', () => {
    test("useStorage", async () => {
        const { set, get, remove, clear } = useStorage({
            init: {
                "one_key": "",
                "two_key": 1,
            },
        });
        expect(get("one_key")).toMatch("");
        set("one_key", "1");
        expect(localStorage.getItem("one_key")).toMatch('"1"');
        expect(get("one_key")).toMatch("1");
        expect(get("two_key")).toBe(1);
        remove("one_key");
        expect(get("one_key")).toBeUndefined();
        clear();
        expect(get("two_key")).toBeUndefined();
    });
});