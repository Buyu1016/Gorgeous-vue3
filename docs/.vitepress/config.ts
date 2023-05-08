import path from "path";
import fs from "fs";

const nav = [
    { text: "Npm", link: "https://www.npmjs.com/package/@codegorgeous/gorgeous-ui" },
    { text: "Github", link: "https://github.com/CodeGorgeous/GorgeousUI" },
    { text: "Issues", link: "https://github.com/CodeGorgeous/GorgeousUI/issues" }
]

const sidebar = [
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
]

const config = {
    title: "Gorgeous",
    description: "CodeGorgeous自行搭建的一套Vue3相关库",
    lang: "zh",
    themeConfig: {
        nav,
        sidebar,
        search: {
            provider: 'local'
        }
    }
}
export default config