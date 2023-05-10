# Image
图片容器, 基于原生`<img>`标签, 保持其原有属性基础上支持自定义占位符、错误展示等

## 示例

### 基础用法
<GorgeousImage
    class="w-25 h-25"
    src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
/>

::: details Vue

```vue
<template>
    <GorgeousImage
        class="w-30 h-30"
        src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
    />
</template>
```

:::

### 展示方式
支持object-fit所支持的所有值
<div class="flex">
    <div class="flex flex-col mx-4">
        <div>fill</div>
        <GorgeousImage
            class="w-30 h-30"
            src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
            fit="fill"
        />
    </div>
    <div class="flex flex-col mx-4">
        <div>cover</div>
        <GorgeousImage
            class="w-25 h-25"
            src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
            fit="cover"
        />
    </div>
    <div class="flex flex-col mx-4">
        <div>contain</div>
        <GorgeousImage
            class="w-25 h-25"
            src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
            fit="contain"
        />
    </div>
    <div class="flex flex-col mx-4">
        <div>none</div>
        <GorgeousImage
            class="w-25 h-25"
            src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
            fit="none"
        />
    </div>
    <div class="flex flex-col mx-4">
        <div>scale-down</div>
        <GorgeousImage
            class="w-25 h-25"
            src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
            fit="scale-down"
        />
    </div>
</div>

::: details Vue

```vue
<template>
    <div class="flex flex-col mx-4">
        <div>fill</div>
        <GorgeousImage
            class="w-30 h-30"
            src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
            fit="fill"
        />
    </div>
    <div class="flex flex-col mx-4">
        <div>cover</div>
        <GorgeousImage
            class="w-25 h-25"
            src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
            fit="cover"
        />
    </div>
    <div class="flex flex-col mx-4">
        <div>contain</div>
        <GorgeousImage
            class="w-25 h-25"
            src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
            fit="contain"
        />
    </div>
    <div class="flex flex-col mx-4">
        <div>none</div>
        <GorgeousImage
            class="w-25 h-25"
            src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
            fit="none"
        />
    </div>
    <div class="flex flex-col mx-4">
        <div>scale-down</div>
        <GorgeousImage
            class="w-25 h-25"
            src="http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg"
            fit="scale-down"
        />
    </div>
</template>
```

:::

### 懒加载

可通过`lazy`开启图像懒加载, 只有当图片处于滚动容器的可视区域时才会进行加载图片资源

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

<div style="height: 300px; overflow: hidden auto;">
    <GorgeousImage
        v-for="url in urls"
        :key="url"
        class="w-full h-75"
        :src="url"
        fit="cover"
        lazy
    />
</div>

::: details Vue

```vue
<template>
    <div style="height: 300px; overflow: hidden auto;">
        <GorgeousImage
            v-for="url in urls"
            :key="url"
            class="w-full h-75"
            :src="url"
            fit="cover"
            lazy
        />
    </div>
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



## API

### Attributes
| 属性名 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| src | 图片源地址 | string | - |
| alt | 对图片的描述, 同`<img>`内`alt`属性一致 | string | - |
| fit | 图片在容器内如何展示 | 'fill' \| 'cover' \| 'contain' \| 'none' \| 'scale-down' | 'fill' |
| loading | 浏览器加载图像策略, 同`<img>`内`loading`属性一致 | "eager" \| "lazy" | "lazy" |
| zip | 图片预处理函数 | (url: string) => string | - |
| referrerPolicy | 获取资源时的引用方式 | `"" | "no-referrer" | "origin" | "unsafe-url"`  | "" |
| lazy | 懒加载资源 | `boolean` | false |
| lazyOffset | 懒加载检测偏移量 | `number` | 10 |

### Events
| 事件名 | 说明 | 类型 |
| :- | :- | :- |
| load | 图像加载完毕 | (e: Event) => void |
| error | 图像加载失败 | (e: Event) => void |