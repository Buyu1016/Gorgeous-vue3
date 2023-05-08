# useTouch

元素自由悬浮拖拽可吸附化

## 导出

```ts
    import { UseTouchOptions, TouchElementStatus, TouchElementClassNameStatus, useTouch } from "@codegorgeous/gorgeous-ui";
```

## 示例

### 基础示例

```vue
<template>
    <div ref="oDiv"></div>
</template>

<script lang="ts" setup>
    import { ref } from "vue";

    const oDiv = ref<HTMLDivElement>();
    useTouch({
        root: oDiv,
        ifAdsorption: true,
        top: "80%",
        position: "left"
    });
</script>
```

## 类型定义

```ts
interface UseTouchOptions {
    root: Ref<HTMLElement | undefined>
    position: Exclude<TouchElementStatus, "move">
    top: string
    ifAdsorption: boolean
}
type TouchElementStatus = "move" | "left" | "right";
type TouchElementClassNameStatus = `gorgeous-float-${TouchElementStatus}`
```

## API

### Params
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| options | 配置项 | `UseTouchOptions` | - |

### Options
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| top | 悬浮元素的初始距离视口顶部的距离 | `string` | '90%' |
| position | 悬浮元素的初始位于视口的方位 | `'left' | 'right'` | 'right' |
| z-index | z-index层级优先级 | `number` | 100 |
| if-adsorption | 是否自动左右吸附 | `boolean` | false |
