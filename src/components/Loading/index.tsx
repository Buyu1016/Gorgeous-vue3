import { defineComponent, PropType, computed } from 'vue'
import "./index.less";

export default defineComponent({
    name: "GorgeousLoading",
    props: {
        vertical: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    setup(props) {
        const _containerClassName = computed(() => {
            return `gorgeous-loading-container ${props.vertical ? 'vertical' : ''}`;
        });
        return () => (
            <div class={_containerClassName.value}>
                <div class="gorgeous-loading-content"></div>
                <div>加载中...</div>
            </div>
        )
    }
})