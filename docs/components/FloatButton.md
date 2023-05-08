# FloatButton

自由悬浮拖拽按钮

## 示例

### 基础用法
<GorgeousFloatButton>
    <span class="p-4 rd bg-sky color-white">Slot</span>
</GorgeousFloatButton>

::: details Vue

```vue
<template>
    <GorgeousFloatButton>
        <span class="p-4 rd bg-sky color-white">Slot</span>
    </GorgeousFloatButton>
</template>
```

:::

### 指定初始位置
使用`top`指定按钮距离视口顶部的距离, 使用`position`指定按钮初始位于视口的方位
<GorgeousFloatButton top="85%" position="left">
    <span class="p-4 rd bg-sky color-white">Position</span>
</GorgeousFloatButton>

::: details Vue

```vue
<template>
    <GorgeousFloatButton top="85%" position="left">
        <span class="p-4 rd bg-sky color-white">Position</span>
    </GorgeousFloatButton>
</template>
```

:::

### 自动吸附
使用`if-adsorption`指定悬浮按钮的可吸附性
<GorgeousFloatButton if-adsorption top="80%">
    <span class="p-4 rd bg-sky color-white">Adsorption</span>
</GorgeousFloatButton>

::: details Vue

```vue
<template>
    <GorgeousFloatButton if-adsorption top="80%">
        <span class="p-4 rd bg-sky color-white">Adsorption</span>
    </GorgeousFloatButton>
</template>
```

:::

## API

### Attributes
| 属性名 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| top | 悬浮按钮的初始距离视口顶部的距离 | string | '90%' |
| position | 悬浮按钮的初始位于视口的方位 | 'left' \| 'right' | 'right' |
| z-index | z-index层级优先级 | number | 100 |
| if-adsorption | 是否自动左右吸附 | boolean | false |

### Slots
| 插槽名 | 说明 |
| :- | :- |
| default | 悬浮按钮的主内容填充区域 |
