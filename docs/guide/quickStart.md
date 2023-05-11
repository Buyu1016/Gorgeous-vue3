# 快速开始 🚀

简单安装使用, 快速开启你的摸鱼旅程🦑

## 安装

```shell
# npm
npm install @codegorgeous/gorgeous-vue3

# yarn
yarn add @codegorgeous/gorgeous-vue3

# pnpm 
pnpm install @codegorgeous/gorgeous-vue3
```

## 使用

### 组件
可以使用全局安装, 也可以使用局部导入, 组件都是更加贴合自原生的标签, 只是功能向会靠近`Vue3`进行封装一层, 在`Vue3`中更加方便易用不用写过多的贴合原生功能处理

**全局安装**

在`src/main.(js/ts)使用`, 如果您的主应用入口为其他文件则在其相应文件内使用即可

```ts
import { createApp } from "vue";
import GorgeousUI from "@codegorgeous/gorgeous-vue3";
import App from "@/App";

const app = createApp(App);

app.use(GorgeousUI).mount("#app");
```

**局部使用**

只需要在使用的文件`xxxx.(tsx/jsx/vue)`内引入相应的具体组件即可

```ts
import { GorgeousImage } from "@codegorgeous/gorgeous-vue3";
```

### 指令

**全局安装**

在`src/main.(js/ts)使用`, 如果您的主应用入口为其他文件则在其相应文件内使用即可

```ts
// 暂无示例
```

**局部安装**

```ts
// 暂无示例
```


### 组合式函数
更加功能辅助项的的帮助函数, 适用于在`vue/jsx/tsx`中, 请注意部分组合式函数可在任意环境中使用, 另一部分只接受在`setup`环境中使用

**使用**
```html
<script setup>
    import { useAsync } from "@codegorgeous/gorgeous-vue3";
</script>
```