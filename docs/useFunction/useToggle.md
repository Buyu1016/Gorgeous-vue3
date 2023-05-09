# useToggle

切换状态

## 导出

```ts
    import { UseToggleOptions, useToggle } from "@codegorgeous/gorgeous-vue3";
```

## 示例

### 基础示例

```vue
<script lang="ts" setup>
    const { state, toggle } = useToggle({
        initValue: false
    });
</script>
```

## 类型定义

```ts
interface UseToggleOptions {
    initValue?: boolean
    watch?: Parameters<typeof VueWatch>[1]
}
```

## API

### Params
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| options | 配置项 | `UseToggleOptions` | - |

### Options
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| initValue | 初始化值 | `boolean` | false |
| watch | 切换监听 | `Parameters<typeof VueWatch>[1]` | - |

### Return(Object)
| 参数 | 说明 | 类型 |
| :- | :- | :- |
| state | 当前状态 | `Ref<boolean>` |
| toggle | 切换状态函数, 默认没有传递参数则自动切换至相反的状态 | `(value?: boolean) => void` |
