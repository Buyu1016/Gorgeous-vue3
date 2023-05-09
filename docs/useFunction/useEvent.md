# useEvent

为元素绑定与解绑事件集合

## 导出

```ts
    import { UseEventHandle, UseEventOptions, useEvent } from "@codegorgeous/gorgeous-vue3";
```

## 示例

### 基础示例

```vue
<template>
    <input ref="oInput" />
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    
    const oInput = ref<HTMLInputElement>();
    const { remove } = useEvent({
        root: oDiv,
        events: [{
            type: "focus",
            handle: () => {
                console.log("input focus");
            }
        }, {
            type: "blur",
            handle: () => {
                console.log("input blur");
            }
        }]
    });
</script>
```

## 类型定义

```ts
    interface UseEventOptions {
        root: Ref<Element | undefined> | Window | Document | Element
        events?: {
            type: (keyof (HTMLElementEventMap | WindowEventMap)) | string
            handle?: UseEventHandle,
        }[]
    }

    type UseEventHandle = (e: Event) => void;
```

## API

### Params
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| options | 配置项 | `UseEventOptions` | - |

### Options
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| root | 绑定事件的根元素 | `Ref<Element | undefined> | Window | Document | Element` | - |
| events | 为根元素绑定的事件集合 | `UseEventOptions["events"]` | [] |

### Return(Object)
| 参数 | 说明 | 类型 |
| :- | :- | :- |
| remove | 手动解绑事件集合函数, 在组件内使用时会自动跟随组件销毁时解绑事件 | `() => void` |