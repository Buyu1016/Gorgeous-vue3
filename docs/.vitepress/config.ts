import path from "path";
import fs from "fs";
import { defineConfig } from "vitepress"

const config = defineConfig({
    title: "Gorgeous",
    description: "CodeGorgeous自行搭建的一套Vue3相关库",
    lang: "zh",
    themeConfig: {
        nav: [
            { text: "Npm", link: "https://www.npmjs.com/package/@codegorgeous/gorgeous-vue3" },
            { text: "Github", link: "https://github.com/CodeGorgeous/GorgeousUI" },
            { text: "Issues", link: "https://github.com/CodeGorgeous/GorgeousUI/issues" }
        ],
        sidebar: [
            {
                text: "起步",
                items: [
                    { text: '快速开始', link: '/guide/quickStart' }, 
                ]
            },
            {
                text: "Components",
                items: [
                    { text: '浮动按钮 / FloatButton', link: '/components/FloatButton' }, 
                    { text: '图片 / Image', link: '/components/Image' }, 
                    { text: '输入框 / Input', link: '/components/Input' }, 
                    { text: '富文本 / RichText', link: '/components/RichText' }, 
                ]
            },
            {
                text: "组合式API",
                items: fs.readdirSync(path.resolve(__filename, "..", "..", "useFunction")).map(name => {
                    const _name = name.split(".")[0];
                    return {
                        text: _name,
                        link: `/useFunction/${_name}`
                    }
                })
            }
        ],
        search: {
            provider: 'local'
        },
        outlineTitle: "目录",
    }
});

export default config