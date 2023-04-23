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
        text: "Hooks",
        items: [
            { text: 'useEvent', link: '/hooks/useEvent' }, 
            { text: 'useTouch', link: '/hooks/useTouch' }, 
        ]
    }
]

const config = {
    title: "GorgeousUI",
    description: "CodeGorgeous自行搭建的一套Vue3UI库",
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