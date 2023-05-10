# Input

## 示例

### 基础用法
<GorgeousInput class="my-4"/>

::: details Vue

```vue
<template>
    <GorgeousInput v-model="value" class="my-4"/>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    const value = ref("");
</script>
```

::: 

### 格式化输入
支持传入格式化函数用于格式化用户写入的参数, 并且可以选择格式化函数的执行时机
<GorgeousInput class="mr-4" :format="handleNumberFormat" />
<GorgeousInput class="mr-4" :format="handleNumberFormat" formatOpportunity="change" />

::: details Vue

```vue
<template>
    <GorgeousInput class="mr-4" :format="handleNumberFormat" />
    <GorgeousInput class="mr-4" :format="handleNumberFormat" formatOpportunity="change" />
</template>

<script lang="ts" setup>
    function handleNumberFormat(val: string) {
        return val.replace(/[0-9]/g, "");
    }
</script>
```

:::

### 原生Input所支持的一些属性
目前支持的同原生`<input>`标签同属性的`props`有: `placeholder`、`type`、 `autocomplete`、`autofocus`、`disabled`
<GorgeousInput class="mr-4" placeholder="Placeholder" />
<GorgeousInput class="mr-4" type="password" />
<GorgeousInput class="mr-4" type="password" autocomplete="on" />
<GorgeousInput class="mr-4" type="text" autofocus />
<GorgeousInput class="mt-4 mr-4" disabled />

::: details Vue

```vue
<template>
    <GorgeousInput class="mr-4" placeholder="Placeholder" />
    <GorgeousInput class="mr-4" type="password" />
    <GorgeousInput class="mr-4" type="password" autocomplete="on" />
    <GorgeousInput class="mr-4" type="text" autofocus />
    <GorgeousInput class="mt-4 mr-4" disabled />
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    const value = ref("");
</script>
```

::: 

### 键盘确认
传入`props`中的`confirm-key`属性即可够快速启用监听到使用输入框时用户按下了指定的键, 进而触发`confirm`事件
<GorgeousInput placeholder="请输入内容" confirm-key="Enter" @confirm="handleConfirm" />

::: details Vue

```vue
<template>
    <GorgeousInput placeholder="请输入内容" confirm-key="Enter" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
    function handleConfirm() {
        alert("您按下了确认键");
    }
</script>
```

:::

## API

### Attributes
| 属性名 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :-: |
| v-model | 绑定值 | `string` | - |
| type | 同`<input>`内`type`一致 | `string` | "text" |
| placeholder | 占位文本 | `string` | - |
| disabled | 是否禁用输入框 | `boolean` | false |
| autocomplete | 同`<input>`内`autocomplete`一致 | `string` | "off" |
| autofocus | 输入框自动聚焦 | `boolean` | false |
| confirmKey | 指定键盘确认键位 | `string` | false |
| format | 输入格式化函数 | `(value: string) => string` | - |
| formatOpportunity | 格式化输入函数的执行时机 | `blur \| change` | "blur" |

### Events
| 事件名 | 说明 | 类型 |
| :- | :- | :- |
| confirm | 在`enter-confirm`开启的情况下, 聚焦输入框状态下按下回车键触发 | `(value: string) => void` |
| change | 绑定值发生改变时 | `(value: string) => void` |
| focus | 输入框聚焦 | `(e: FocusEvent) => void` |
| blur | 输入框失焦 | `(e: FocusEvent) => void` |

<!-- script代码 -->
<script setup lang="ts">
    function handleNumberFormat(val: string) {
        return val.replace(/[0-9]/g, "");
    }
    function handleConfirm(val: string) {
        alert("您按下了确认键");
    }
</script>
