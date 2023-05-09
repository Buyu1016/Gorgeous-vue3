# useAsync

异步函数的兜底与状态

## 导出

```ts
    import { UseAsyncOptions, useAsync } from "@codegorgeous/gorgeous-vue3"
```

## 示例

### 基础用法

```vue
<script lang="ts" setup>
    function sleep<T>(result: T, timer = 0): Promise<T> {
        return new Promise<T>(resolve => {
            setTimeout(() => {
                resolve(result);
            }, timer)
        })
    }

    const { value, loading, start } = useAsync(() => {
        // 异步函数
        return Promise.all([sleep([1, 2, 3], 1000), sleep("Hello World", 3000)]);
    }, {
        init: [[], ""],
        errorHandle: (e) => {
            console.warn("Error: ", e);
        }
    });
</script>
```

## 类型定义

```ts
    interface UseAsyncOptions <T> {
        init?: T
        errorHandle?: (err: any) => void
        start?: boolean
    }

    type UseAsyncPromise <T> = () => Promise<T>;
```

## API

### Params
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| promise | 异步函数 | `(...args: any[]) => any` | - |
| options | 配置项 | 见下表 | - |

### Options
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| init | 异步函数的默认初始化值 | `any` | - |
| start | 是否默认执行异步函数 | `boolean` | true |
| errorHandle | 异步函数发生错误时的兜底处理 | `(err: any) => void` | - |

### Return(Object)
| 参数 | 说明 | 类型 |
| :- | :- | :- |
| value | 异步函数的默认初始化值 | `Ref<any>` |
| loading | 异步函数的默认初始化值 | `Ref<boolean>` |
| start | 供给外部手动调用异步函数的方式 | `() => Promise<void>` |