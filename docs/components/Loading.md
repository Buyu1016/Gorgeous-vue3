# Loading

## 示例

### 基础示例
<GorgeousLoading />

::: details Vue

```vue
<template>
    <GorgeousLoading />
</template>
```

:::

### 垂直方向

可以提供`vertical`属性是的加载组件内部排列变为垂直方向

<GorgeousLoading vertical />

::: details Vue

```vue
<template>
    <GorgeousLoading vertical />
</template>
```

:::

## API

### Attributes
| 属性名 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :-: |
| vertical | 垂直方向排列 | `boolean` | false |

### Style
| 名称 | 默认值 | 描述 | 
| :- | :- | :- |
| --go-loading-border-color | red | 加载圆环主凸显色块颜色 |
| --go-loading-border-base-color | #aaaaaa | 加载圆环底色 |
| --go-loading-rotate-duration | 1s | 加载圆环动画速度 |
