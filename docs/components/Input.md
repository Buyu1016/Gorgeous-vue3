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

### 原生Input所支持的一些属性
目前支持的同原生`<input>`标签同属性的`props`有: `placeholder`、`type`、 `autocomplete`、`autofocus`
<GorgeousInput class="mr-4" placeholder="Placeholder" />
<GorgeousInput class="mr-4" type="password" />
<GorgeousInput class="mr-4" type="password" autocomplete="on" />
<GorgeousInput class="mr-4" type="text" autofocus />

::: details Vue

```vue
<template>
    <GorgeousInput class="mr-4" placeholder="Placeholder" />
    <GorgeousInput class="mr-4" type="password" />
    <GorgeousInput class="mr-4" type="password" autocomplete="on" />
    <GorgeousInput class="mr-4" type="text" autofocus />
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    const value = ref("");
</script>
```

::: 

### 禁用输入框
向`props`内传递`disable`即可快速禁用输入框, 阻止使用输入框
<GorgeousInput placeholder="Disable" disable />

::: details Vue

```vue
<template>
    <GorgeousInput placeholder="Disable" disable />
</template>
```

:::

### 一键清空
使用`clearable`可以当输入框内存在内容时在输入框右侧显示一个清空按钮, 方便快速删除输入框内的内容. 
清空按钮可以使用`slots`中的`clear`插槽进行定制/改变
<GorgeousInput clearable />

::: details Vue

```vue
<template>
    <GorgeousInput clearable />
</template>
```

:::

### 回车确认
开启`props`中的`enter-confirm`属性即可能够快速启用监听到使用输入框时用户按下了回车键, 进而触发`confirm`事件
<GorgeousInput placeholder="Disable" enter-confirm />

::: details Vue

```vue
<template>
    <GorgeousInput placeholder="Disable" enter-confirm />
</template>
```

:::

### 定制输入框左侧/右侧内容
使用`slots`中的`left`/`right`插槽可快速向输入框的左侧或者右侧展示出定制化内容

<GorgeousInput>
    <template #left>Left Slot</template>
    <template #right>Right Slot</template>
</GorgeousInput>

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
| clear | 触发清除按钮时触发 | () => void |

### Slots
| 插槽名 | 说明 |
| :- | :- |
| left | 输入框左侧内容区域 |
| right | 输入框右侧内容区域 |
| clear | 清除按钮内容区域 |