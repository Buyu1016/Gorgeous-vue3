import { defineComponent, renderSlot, useSlots, PropType, ref, onMounted } from "vue";
import useTouch from "@/hooks/useTouch";

export default defineComponent({
    name: "GorgeousFloatButton",
    props: {
        // 悬浮按钮的初始Top位置
        top: {
            type: String as PropType<string>,
            default: "90%"
        },
        // 悬浮按钮的初始位置在左侧还是右侧
        position: {
            type: String as PropType<"left" | "right">,
            default: "right"
        },
        // 悬浮按钮的z-index层级
        zIndex: {
            type: Number as PropType<number>,
            default: 100
        },
        // 悬浮按钮是否吸附
        ifAdsorption: {
            type: Boolean as PropType<boolean>,
            default: true
        }
    },
    setup(props) {
        const slots = useSlots();
        const oFloatButtonElement = ref<HTMLDivElement>();
        const { position, className, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouch({
            root: oFloatButtonElement,
            position: props.position,
            top: props.top,
            ifAdsorption: props.ifAdsorption
        });

        return () => (
            <div
                ref={oFloatButtonElement}
                class={`fixed cursor-pointer select-none ${className.value}`}
                style={{
                    top: position.value.top,
                    left: position.value.left,
                    zIndex: props.zIndex
                }}
                onTouchstart={handleTouchStart}
                onTouchmove={handleTouchMove}
                onTouchend={handleTouchEnd}
            >
                { renderSlot(slots, 'default') }
            </div>
        )
    }
});