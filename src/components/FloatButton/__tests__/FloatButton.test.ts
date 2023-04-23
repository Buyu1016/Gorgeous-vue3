import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FloatButton from '..';

describe('Button', () => {
    // 挂载插槽测试
    test('slotAndMount', () => {
        const wrapper = shallowMount(FloatButton, {
            slots: {
                default: 'Slots',
            },
        })
        expect(wrapper.text()).toBe('Slots')
    });
    // position
    test('props position', () => {
        const wrapper = shallowMount(FloatButton, {
            props: {
                position: "left"
            }
        })
        expect(wrapper.classes().includes('gorgeous-float-left')).toBe(true)
    });
    // zIndex
    test('props zIndex', () => {
        const wrapper = shallowMount(FloatButton, {
            props: {
                zIndex: 3000
            }
        })
        expect(wrapper.attributes().style.includes("z-index: 3000;")).toBe(true)
    });
})