import { defineComponent, ref, watch, PropType, defineEmits, onMounted, reactive } from 'vue'
import "./style.css";
import { useSlidingDirection, useAsync, useToggle, useComponentPopup } from "./useFunction"
import { GorgeousLoading } from "@/components";

export default defineComponent({
    setup() {
        // const image = ref<HTMLImageElement>();
        // const io = new IntersectionObserver(e => {
        //     console.log(e);
        // });
        // onMounted(() => {
        //     if (!image.value) return;
        //     io.observe(image.value);
        // });
        // urls.push();
        const urls = reactive([
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
        ]);
        const { state, toggle } = useToggle({
            watch(oldValue, newValue) {
                console.log(oldValue, newValue);
            }
        });
        return () => (
            <div>
                { state.value ? <div style="height: 300px; overflow: hidden auto;">
                    { urls.map((url, index) => (
                        <gorgeous-image
                            v-defer={{
                                animateName: index % 2 === 0 ? 'slideInLeft' : 'slideInRight',
                            }}
                            key={url}
                            src={url}
                            class="w-full h-100"
                            lazy
                            lazyOffset={100}
                        ></gorgeous-image>)) }
                </div> : "你好" }
                <button onClick={() => toggle()}>click</button>
                <gorgeous-input v-float></gorgeous-input>
                <gorgeous-input v-integer></gorgeous-input>
            </div>
        )
    }
});