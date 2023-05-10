import { defineComponent, ref, watch } from 'vue'
import "./style.css";
import { useSlidingDirection, useAsync } from "./useFunction"

export default defineComponent({
    setup() {
        const _value = ref('<figure class="image image_resized image-style-side" style="width:33.97%;"><img\n' +
        'src="https://storage.beta.custouch.com/res/3378/bb24623d4dabfe13f7dabdcf3a0a8a57.jpeg"></figure>\n' +
        '<p>好面包板111</p>\n');
        const _imgSrc = ref("http://qiniu.codegorgeous.top/小鸟&&1682099658251.jpeg");
        const urls = [
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
        ]
        const inputValue = ref("");
        return () => (
            <>
                {/* <div class="h-200">你好</div> */}
                {/* <gorgeous-rich-text
                    value={_value.value}
                ></gorgeous-rich-text> */}
                {/* <gorgeous-image
                    class="w-50 h-50"
                    src={_imgSrc.value}
                    fit="cover"
                ></gorgeous-image> */}
                {/* <div style="height: 300px; overflow: hidden auto;">
                    { urls.map(url => (<gorgeous-image key={url} src={url} class="w-full h-100" lazy></gorgeous-image>)) }
                </div> */}
                <gorgeous-input
                    v-model={inputValue}
                    format={(val) => {
                        return val.split(",")[0];
                    }}
                    formatOpportunity="change"
                    onChange={(val) => {
                        console.log(val);
                    }}
                    confirmKey="k"
                    onConfirm={(val) => {
                        console.log("确认", val);
                    }}
                ></gorgeous-input>
            </>
        )
    }
});