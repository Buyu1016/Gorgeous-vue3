import { defineComponent, ref, watch } from 'vue'
import "./style.css";
import { useSlidingDirection, useAsync } from "./useFunction"

export default defineComponent({
    setup() {
        const inputValue = ref("");
        watch(inputValue, val => {
            console.log(val);
        })
        const selectValue = ref();
        const selectOptions = [{
            label: "选项1",
            value: "0"
        }, {
            label: "选项2",
            value: "1"
        }, {
            label: "选项3",
            value: "2"
        }, {
            label: "选项4",
            value: "3"
        }, {
            label: "选项5",
            value: "4"
        }];
        useSlidingDirection({
            watchDirectionChange(type, diff) {
                console.log(`您向${type}方位移动了${diff}像素距离`);
            },
        });
        const { loading } = useAsync(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(resolve, 3000);
            });
        });
        return () => (
            <>
                <div v-loading={loading.value}></div>
                {/* <gorgeous-image
                    class="w-xs h-xs"
                    src="https://oss.cloud.custouch.com/res/163945/banner2.png"
                    fit="cover"
                    v-slots={{
                        error: () => (<>123</>),
                        placeholder: () => (<>Loading...</>)
                    }}
                    onLoad={() => {console.log("加载完毕");}}
                ></gorgeous-image> */}
                {/* {`${loading.value}`} */}
                <gorgeous-input
                    v-model={inputValue}
                    type="text"
                    placeholder="输入框的默认placeholder"
                    enterConfirm
                    v-slots={{
                        right: () => (<>Q</>)
                    }}
                    onBlur={() => {console.log("失焦")}}
                    onFocus={() => {console.log("聚焦")}}
                    onChange={(val) => {console.log("改变", val)}}
                    onConfirm={() => {console.log("确认")}}
                ></gorgeous-input>
                <i class="i-mingcute-search-line"></i>
                {/* <gorgeous-select
                    v-model={selectValue}
                    options={selectOptions}
                ></gorgeous-select> */}
            </>
        )
    }
});