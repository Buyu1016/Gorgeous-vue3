# useComponentPopup

组件弹窗化

## 示例

### 基础示例

可自行传入组件本身所需要的`props`, 同样`props`内是可以以`onXxxx`的方式接收事件响应. 重新生成适用于重置组件内的状态

<button class="mr-4" @click="popupComponent.toggle">打开弹窗</button>
<button class="mr-4" @click="popupComponent.unMount">销毁弹窗</button>
<button @click="popupComponent.regenerate">重新生成</button>

::: details Vue
```vue
<template>
    <button class="mr-4" @click="popupComponent.toggle">打开弹窗</button>
    <button class="mr-4" @click="popupComponent.unMount">销毁弹窗</button>
    <button @click="popupComponent.regenerate">重新生成</button>
</template>

<script setup>
    import { useComponentPopup, GorgeousImage } from "@codegorgoues/gorgeous-vue3";

    const popupComponent = useComponentPopup({
        component: GorgeousImage,
        props: {
            src: "http://qiniu.codegorgeous.top/%E5%BC%8F%E5%AE%88&&1676300851535.jpeg",
            onClick: () => {
                alert("你点击了一下可爱的式守同学");
            }
        },
        title: "式守不只是可爱而已"
    });
</script>
```
:::

<script setup>
    import { useComponentPopup, GorgeousImage } from "../../src/entry";
    import image from "../public/image1.jpeg"

    const popupComponent = useComponentPopup({
        component: GorgeousImage,
        props: {
            src: image,
            onClick: () => {
                alert("你点击了一下可爱的式守同学");
            }
        },
        title: "式守不只是可爱而已"
    });
</script>

## API

### Params
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| options | 配置项 | 见下表 | - |

### Options
| 参数 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| component | 弹窗内部所使用的组件 | `Component` | - |
| props | 组件所需要的props | `Record<string, any>` | - |
| mountRoot | 弹窗所挂载的根容器 | `string \| Element` | document.body |
| clickOverlayClose | 点击遮罩层关闭弹窗 | `boolean` | true |
| visibleButtonClose | 弹窗关闭按钮是否显示 | `boolean` | true |
| overlayZIndex | 遮罩层的z-index层级 | `number` | 100 |
| title | 弹窗标题 | `string` | - |

### Return(Object)
| 参数 | 说明 | 类型 |
| :- | :- | :- |
| state | 弹窗状态 | `Ref<boolean>` |
| toggle | 切换弹窗状态 | `(value?: boolean) => void` |
| regenerate | 重新装载弹窗组件 | `() => void` |
| unMount | 卸载弹窗组件 | `() => void` |
