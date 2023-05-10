import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Image from '..';

describe('Image', () => {
    test('Props', () => {
        const imgSrc = "http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg",
            alt = "test",
            fit = "contain",
            loading = "lazy",
            referrerPolicy = "no-referrer";
        const wrapper = shallowMount(Image, {
            props: {
                src: imgSrc,
                alt,
                fit,
                loading,
                referrerPolicy
            }
        });
        const oImg = wrapper.find("img");
        expect(oImg.classes().includes("object-contain")).toBe(true);
        expect(oImg.element.src).toMatch(imgSrc);
        expect(oImg.element.alt).toMatch(alt);
        expect(oImg.element.loading).toMatch(loading);
        expect(oImg.element.referrerPolicy).toMatch(referrerPolicy);
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