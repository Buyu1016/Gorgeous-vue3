import { defineComponent, PropType } from 'vue'
import "./index.less";

export default defineComponent({
    name: "GorgeousRichText",
    props: {
        value: {
            type: String as PropType<string>,
            default: ""
        }
    },
    setup(props) {
        return () => (
            <div id="gorgeous-rich-text" v-html={props.value}></div>
        )
    }
})