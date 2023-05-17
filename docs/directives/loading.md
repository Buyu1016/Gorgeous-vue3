# v-loading

## 示例

### 基础示例
直接在目前元素上使用`v-loading`指令即可, 需提供一个状态值用于控制是否展示加载动画
<div v-loading="true"></div>

::: details Vue

```vue
<template>
    <div v-loading="loading"></div>
</template>

<script setup>
    import { ref } from "vue";

    const loading = ref(true);
</script>
```

:::

### 定制加载组件

支持在单独注册`v-loading`指令时提供`配置项`, 配置项具体可参见下文`API`部分

```ts
import { createApp, defineAsyncComponent } from "vue";
import { loadingDirective, GorgeousInput } from "@codegorgeous/gorgeous-vue3";
import App from "@/App";

const app = createApp(App);

app.use(loadingDirective, {
    loadingComponent: GorgeousInput // 此处只是随意拿个组件作为示意
}).mount("#app");
```

## API

### Options(Object)
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| loadingComponent | `v-loading`指令所使用加载组件 | `Component` | `GorgeousLoading` |
| props<span style="font-size: 12px">`暂不支持`</span> | `loadingComponent`加载组件所传入的`props` | `any` | 默认参见`GorgeousLoading`组件的`Attr`部分 |

