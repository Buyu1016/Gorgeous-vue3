# useClickAway

判定点击处是否位于目标元素之外

## 示例

### 基础示例

```vue
<template>
    <div ref="oDiv"></div>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    import { useClickAway } from "@codegorgeous/gorgeous-vue3";

    const oDIv = ref<HTMLDivElement>();
    const { remove } = useClickAway({
        root: oDiv,
        handle: (e) => {
            console.log("点击了区域外", e);
        }
    }); 
</script>
```

## 类型定义

```ts
interface UseClickAwayOptions {
    root: Ref<Element | undefined> | Element
    handle?: (e: Event) => void
}
```

## API

### Params
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| options | 配置项 | 见下表 | - |

### Options
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| root | 异步函数的默认初始化值 | `Ref<Element | undefined> | Element` | - |
| handle | 是否默认执行异步函数 | `(e: Event) => void` | - |

### Return(Object)
| 参数 | 说明 | 类型 |
| :- | :- | :- |
| remove | 清除该功能相关绑定的事件 | `() => void` |