import { defineComponent, ref, watch } from 'vue'
import "./style.css";
import { useSlidingDirection, useAsync } from "./useFunction"

export default defineComponent({
    setup() {
        const _value = ref('<figure class="image image_resized image-style-side" style="width:33.97%;"><img\n' +
        'src="https://storage.beta.custouch.com/res/3378/bb24623d4dabfe13f7dabdcf3a0a8a57.jpeg"></figure>\n' +
        '<p>好面包板111</p>\n');
        return () => (
            <>
                <gorgeous-rich-text
                    value={_value.value}
                ></gorgeous-rich-text>
            </>
        )
    }
});