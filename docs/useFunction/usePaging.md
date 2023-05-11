# usePaging

分页数据状态管理

## 示例

### 基础示例

```vue
<script lang="ts" setup>
    import { usePaging } from "@codegorgeous/gorgeous-vue3";

    function getData(config: Record<"index" | "size", number>) {
        return sleep([1, 2, 3, 4], 1000);
    }
    const { index, size, value, loading, finished } = usePaging(() => {
        const response = getData({
            index: index.value,
            size: size.value
        });
        if (value.value.length >= 5) {
            finished.value = true;
        }
        return response;
    }, {
        init: []
    });
</script>
```

## 类型定义

```ts
interface UsePagingOptions <T extends any[]> {
    index?: number
    size?: number
    init?: T
};

type UsePagingCallback <T extends any[]> = () => Promise<T>;
```

## API

### Params
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| options | 配置项 | `UsePagingOptions` | - |

### Options
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| index | 初始化第几页 | `number` | 1 |
| size | 初始化页容量 | `number` | 10 |
| init | 列表初始化值 | `any[]` | [] |

### Return(Object)
| 参数 | 说明 | 类型 |
| :- | :- | :- |
| index | 页 | `number` |
| size | 页容量 | `number` |
| total | 总量 | `number` |
| value | 数据列表 | `any[]` |
| loading | 加载状态 | `boolean` |
| finished | 数据是否加载完整 | `boolean` |
| getData | 手动调用加载数据 | `() => Promise<any[]>` |