import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Input from '..';

describe('Input', () => {
    test('Props', () => {
        const type = "password",
            placeholder = "Input Placeholder",
            disable = true,
            autocomplete = "on",
            autofocus = true,
            enterConfirm = true;
        const wrapper = shallowMount(Input, {
            props: {
                type,
                placeholder,
                disable,
                autocomplete,
                autofocus,
                enterConfirm
            }
        });
        const oInput = wrapper.find('input');
        expect(oInput.element.type === type).toBe(true);
        expect(oInput.element.placeholder === placeholder).toBe(true);
        expect(oInput.element.autocomplete === autocomplete).toBe(true);
        expect(oInput.element.autofocus === autofocus).toBe(true);
        expect(wrapper.classes().includes("disabled"), "输入框禁用状态").toBe(true);
    });
    test('Slots', () => {
        const leftSlot = `<div class="input-left">Left</div>`,
            clearSlot = `<div class="input-clear">Clear</div>`,
            rightSlot = `<div class="input-right">Right</div>`;
        const wrapper = shallowMount(Input, {
            props: {
                clearable: true,
                modelValue: "value"
            },
            slots: {
                left: leftSlot,
                clear: clearSlot,
                right: rightSlot
            }
        });
        expect(wrapper.find(".input-left").html()).toBe(leftSlot);
        expect(wrapper.find(".input-clear").html()).toBe(clearSlot);
        expect(wrapper.find(".input-right").html()).toBe(rightSlot);
    });
})