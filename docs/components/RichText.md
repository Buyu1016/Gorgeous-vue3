# RichText

富文本内容渲染, 内容所有标签的浏览器初始样式

## 示例

### 基础用法
<GorgeousRichText
    value="<p>下面是一张小鸟的图片</p><img src='http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg'/><p>上面是一张小鸟的图片</p>">
</GorgeousRichText>

::: details Vue

```vue
<template>
    <GorgeousRichText
        value="<p>下面是一张小鸟的图片</p><img src='http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg'/><p>上面是一张小鸟的图片</p>">
    </GorgeousRichText>
</template>
```

:::

## API

### Attributes
| 属性名 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| value | 富文本内容 | `string` | "" |