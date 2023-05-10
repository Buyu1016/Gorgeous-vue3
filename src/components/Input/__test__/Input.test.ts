import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Input from '..';

describe('Input', () => {
    test('Props', () => {
        const type = "password",
            placeholder = "Input Placeholder",
            disabled = true,
            autocomplete = "on",
            autofocus = true,
            enterConfirm = true;
        const wrapper = shallowMount(Input, {
            props: {
                type,
                placeholder,
                disabled,
                autocomplete,
                autofocus,
                enterConfirm
            }
        });
        const oInput = wrapper.find('input');
        expect(oInput.element.type === type).toBeTruthy();
        expect(oInput.element.placeholder === placeholder).toBeTruthy();
        expect(oInput.element.autocomplete === autocomplete).toBeTruthy();
        expect(oInput.element.autofocus === autofocus).toBeTruthy();
        expect(oInput.element.disabled, "输入框禁用状态").toBeTruthy();
    });
})