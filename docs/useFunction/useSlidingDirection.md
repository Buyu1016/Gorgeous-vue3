# useSlidingDirection

用户在某区域内按下手指/鼠标后的滑行方向, 例如用户左滑/右滑/上滑/下滑

## 示例

### 基础示例

```vue
<script lang="ts" setup>
    import { useSlidingDirection } from "@codegorgeous/gorgeous-vue3";

    const { remove } = useSlidingDirection({
        root: window,
        affirmation: 150,
        watchDirectionChange: (direction, diff) => {
            console.log(`用户向${direction}方向滑动, 滑动了${diff}px距离`);
        }
    });
</script>
```

## 类型定义

```ts
interface UseSlidingDirectionOptions {
    root?: Ref<Element | undefined> | Window | Document
    affirmation?: number
    watchDirectionChange?: (direction: UseSlidingDirection, diff: number) => void
}

type UseSlidingDirection = "left" | "right" | "top" | "bottom";
```

## API

### Params
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| options | 配置项 | `UseSlidingDirectionOptions` | - |

### Options
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| root | 检测滑动的元素区域 | `Ref<Element | undefined> | Window | Document | Element` | window |
| affirmation | 滑动检测距离触发点 | `number` | 100 |
| watchDirectionChange | 滑动监听回调函数 | `(direction: UseSlidingDirection, diff: number) => void` | - |

### Return(Object)
| 参数 | 说明 | 类型 |
| :- | :- | :- |
| remove | 手动移除监听的事件集合, 组件内使用时默认会随着组件卸载而移除监听事件集合 | `() => void` |