# useStore

LocalStorage的命令式写法, 自动初始化LocalStorage以及良好的Ts支持

## 导出

```ts
    import { UseStorageOptions, useStorage } from "@codegorgeous/gorgeous-ui";
```

## 示例

### 基础示例

```vue
<script lang="ts" setup>
    const { set, get, remove, clear } = useStorage({
        init: {
            storage_one: "Hello World"
            storage_two: [1, 2, 3, 4, 5]
        }
    });
    get("storage_one");
    set("storage_two", []);
    remove("storage_one");
    clear();
</script>
```

## 类型定义

```ts
interface UseStorageOptions <T = Record<string, any>> {
    init: T
    watchKeys?: (keyof T)[]
    watchStorageChange?: (e: StorageEvent) => void
}
```

## API

### Params
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| options | 配置项 | `UseStorageOptions` | - |

### Options
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| init | 默认的LocalStorage存储值集合 | `Record<string, any>` | - |

### Return(Object)
| 参数 | 说明 | 类型 |
| :- | :- | :- |
| set | 设置指定`key`的存储值 | `(key: string, value: any) => void` |
| get | 获取指定`key`的存储值 | `(key: string) => any` |
| remove | 删除指定`key`的存储 | `(key: string) => void` |
| clear | 清空所有`storage` | `() => void` |