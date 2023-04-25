import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Image from '..';

describe('Image', () => {
    test('Slots', async () => {
        const placeholderSlot = `<div class="image-placeholder">PlaceHolder</div>`;
        const errorSlot = `<div class="image-error">Error</div>`;
        const wrapper = shallowMount(Image, {
            slots: {
                placeholder: placeholderSlot,
                error: errorSlot
            },
        });
        expect(wrapper.find("div.image-placeholder").html()).toBe(placeholderSlot);
        await wrapper.find("img").trigger("error");
        expect(wrapper.find("div.image-error").html()).toBe(errorSlot);
    });
    test('Props', () => {
        const imgSrc = "http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg",
            alt = "test",
            fit = "contain",
            loading = "lazy";
        const wrapper = shallowMount(Image, {
            props: {
                src: imgSrc,
                alt,
                fit,
                loading,
            }
        });
        const oImg = wrapper.find("img");
        expect(oImg.classes().includes("object-contain")).toBe(true);
        expect(oImg.element.src === imgSrc).toBe(true);
        expect(oImg.element.alt === alt).toBe(true);
        expect(oImg.element.loading === "lazy").toBe(true);
    });
    
})

interface Item {
    title: string
    children?: Item[]
}

const data: Item[] = [{
    title: "模块1",
    children: [{
        title: "模块1-1",
        children: [{
            title: "模块1-1-1"
        }]
    }, {
        title: "模块1-2",
    }]
}, {
    title: "模块2",
    children: [{
        title: "模块2-1",
    }, {
        title: "模块2-2",
        children: [{
            title: "模块2-2-1"
        }]
    }]
}]