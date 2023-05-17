import { describe, test, expect } from "vitest";
import { shallowMount } from '@vue/test-utils'
import Loading from "../index";

describe("Loading", () => {
    test("Loading", () => {
        const wrapper = shallowMount(Loading, {
            props: {
                vertical: true
            }
        });
        expect(wrapper.classes().includes("vertical")).toBeTruthy();
    });
});