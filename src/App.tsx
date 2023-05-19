import { defineComponent, ref, watch, PropType, createApp } from 'vue'
import "./style.css";
import { useSlidingDirection, useAsync, useToggle, useComponentPopup } from "./useFunction"
import { GorgeousLoading } from "@/components";

export default defineComponent({
    setup() {
        const popupController = useComponentPopup({
            component: A,
            eventHandle: (random: number) => {
                console.log("已接收", random);
                popupController.toggle(false);
            }
        });
        return () => (
            <div>
                <button onClick={() => {
                    popupController.toggle()
                }}>切换组件弹窗状态</button>
                {/* <div v-loading={true}>内容区域</div> */}
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
    setup(props) {
        const { state, toggle } = useToggle();
        return () => (
            <div class="demo">
                {/* { state.value ? "开启" : "关闭" } */}
                <gorgeous-input v-model={state}></gorgeous-input>
                <div v-loading={state.value}>你好</div>
                <button onClick={() => {
                    toggle();
                    const _random = Math.random();
                    if (_random < .1) {
                        props.fakeCallback?.(_random);
                    }
                }}>切换状态</button>
            </div>
        )
    }
})