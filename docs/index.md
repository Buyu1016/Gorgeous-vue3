<!-- <h1>Gorgeous</h1> -->
# Gorgeous<span style="font-size: 16px">`vue3`</span>

## 项目介绍
一个面向Vue3项目工程的轮子工程, 封装一些自己常用的轮子等小工具, 更贴合自己的使用习惯

## 团队成员

<VPTeamMembers size="small" :members="members" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/64412325?v=4',
    name: 'CodeGorgeous',
    title: '创建者',
    links: [
      { icon: 'github', link: 'https://github.com/CodeGorgeous' },
      { icon: {
            svg: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"></path></svg>'
        },
        link: "http://codegorgeous.top/"
      }
    ]
  },
]
</script>