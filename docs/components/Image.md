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

### 错误展示

<GorgeousImage
    class="w-25 h-25"
>
    <template #error>
        <div class="flex justify-center items-center h-full bg-gray-300">
            Error!
        </div>
        </template>
</GorgeousImage>

::: details Vue

```vue
<template>
    <GorgeousImage
        class="w-25 h-25"
    >
        <template #error>
            <div class="flex justify-center items-center h-full bg-gray-300">
                Error!
            </div>
            </template>
    </GorgeousImage>
</template>
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

### Events
| 事件名 | 说明 | 类型 |
| :- | :- | :- |
| load | 图像加载完毕 | (e: Event) => void |
| error | 图像加载失败 | (e: Event) => void |

### Slots
| 插槽名 | 说明 |
| :- | :- |
| placeholder | 图片未加载完毕时并且图片加载未失败时展示 |
| error | 图片加载失败时展示 |