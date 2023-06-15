import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Image from '..';
import { Window } from 'happy-dom';

describe('Image', () => {
    test('Props', async () => {
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