import { describe, test, expect } from "vitest";
import { shallowMount } from '@vue/test-utils'
import RichText from ".."

describe("RichText", () => {
    test("RichText", () => {
        const richTextValue = '<p>下面是一张小鸟的图片</p><img src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"/><p>上面是一张小鸟的图片</p>';
        const wrapper = shallowMount(RichText, {
            props: {
                value: richTextValue
            }
        });
        const elementName: string[] = []
        wrapper.element.childNodes.forEach(t => elementName.push(t.nodeName))
        expect(elementName).toEqual(expect.arrayContaining(["P", "IMG", "P"]));
    });
});