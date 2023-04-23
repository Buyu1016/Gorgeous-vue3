# Input

## 示例

### 基础用法
<div>
    <GorgeousInput class="my-4"/>
</div>

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

### 输入框默认提示
`placeholder`同原生`<input>`标签上的`placeholder`属性作用一致, 可以为输入框展示
<div>
    <GorgeousInput class="my-4" placeholder="Placeholder" />
</div>

::: details Vue

```vue
<template>
    <GorgeousInput v-model="value" class="my-4" placeholder="Placeholder"/>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    const value = ref("");
</script>
```

::: 


## API

### Attributes
| 属性名 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| v-model | 绑定值 | string | - |
| type | 同`<input>`内`type`一致 | string | 'text' |
| placeholder | 占位文本 | string | - |
| clearable | 是否显示清除按钮 | boolean | false |
| disable | 是否禁用输入框 | boolean | false |
| autocomplete | 同`<input>`内`autocomplete`一致 | string | 'off' |
| autofocus | 输入框自动聚焦 | boolean | false |
| enter-confirm | 是否开启回车确认 | boolean | false |

### Events
| 事件名 | 说明 | 类型 |
| :- | :- | :- |
| confirm | 在`enter-confirm`开启的情况下, 聚焦输入框状态下按下回车键触发 | (value: string) => void |
| change | 绑定值发生改变时 | (value: string) => void |
| focus | 输入框聚焦 | () => void |
| blur | 输入框失焦 | () => void |
| clear | 触发清除按钮时触发 ｜ () => void |

### Slots
| 插槽名 | 说明 |
| :- | :- |
| left | 输入框左侧内容区域 |
| right | 输入框右侧内容区域 |
| clear | 清除按钮内容区域 |