# v-defer

## 示例

### 基础示例
`v-defer`在内部实现时会自动去寻找上层可滚动的父级元素(具有`overflow-y: auto / scroll;`的元素), 并将其作为可视区域进行元素可视化计算.
<div>
    <gorgeous-image
        v-for="(url, index) in urls"
        v-defer="{
            animateName: index % 2 === 0 ? 'slideInLeft' : 'slideInRight',
        }"
        :key="url"
        :src="url"
        class="w-full h-100"
        lazy
    />
</div>

<script setup>
    const urls = [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
    ]
</script>


::: details Vue

```vue
<template>
    <gorgeous-image
        v-for="(url, index) in urls"
        v-defer="{
            animateName: index % 2 === 0 ? 'slideInLeft' : 'slideInRight',
        }"
        :key="url"
        :src="url"
        class="w-full h-100"
        lazy
    ></gorgeous-image>
</template>

<script setup>
    const urls = [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
    ]
</script>
```

:::

### 参数的定制化与全局化
`Options`参数可在注册指令时传入进行全局化定制, 也可以在使用时单独传入进行局部化定制

## API

### Options(Object)
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| animateName | 动画名称 | `string` | `fadeIn` |
| duration | 动画持续时间(ms) | `number` | `1000` |
| delay | 动画延迟时间(ms) | `number` | `0` |
| callback | 动画触发时回调用函数 | `(target: HTMLElement) => void` | - |