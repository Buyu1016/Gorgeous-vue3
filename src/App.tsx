import { defineComponent, ref, watch, PropType, defineEmits } from 'vue'
import "./style.css";
import { useSlidingDirection, useAsync, useToggle, useComponentPopup } from "./useFunction"
import { GorgeousLoading } from "@/components";

export default defineComponent({
    setup() {
        const popupController = useComponentPopup({
            component: A,
            props: {
                onChange: (random: number) => {
                    console.log("已接收", random);
                    // popupController.toggle(false);
                }
            },
            overlayZIndex: 2000,
            // clickOverlayClose: false,
            // clickButtonClose: false
            title: "这是一个标题"
        });
        return () => (
            <div>
                <button onClick={() => {
                    popupController.toggle()
                }}>切换组件弹窗状态</button>
                <button onClick={() => {
                    popupController.unMount();
                }}>清除</button>
            </div>
        )
    }
});

export const A = defineComponent({
    props: {
        fakeCallback: {
            type: Function as PropType<(...args: any) => any>,
        }
    },
    emits: ["change"],
    setup(props, { emit }) {
        const { state, toggle } = useToggle();
        return () => (
            <div class="demo">
                这是内容
                {/* <gorgeous-input v-model={state} onChange={(val) => {
                    console.log(val);
                    emit("change", val);
                }}></gorgeous-input>
                <button onClick={() => {
                    toggle();
                    const _random = Math.random();
                    if (_random < .1) {
                        props.fakeCallback?.(_random);
                    }
                }}>切换状态</button> */}
            </div>
        )
    }
})