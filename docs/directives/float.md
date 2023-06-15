# v-float

## 示例

### 基础示例
直接在`<input>`元素上使用`v-float`指令即可, 可以直接控制用户的输入为安全的整数, 会自动在`<input>`元素`blur`阶段自动格式化
<gorgeous-input v-float></gorgeous-input>

::: details Vue

```vue
<template>
    <gorgeous-input v-float></gorgeous-input>
</template>
```

:::