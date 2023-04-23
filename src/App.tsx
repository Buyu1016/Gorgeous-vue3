import { defineComponent, ref, watch } from 'vue'

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
        return () => (
            <>
                {/* <gorgeous-image
                    class="w-xs h-xs"
                    src="https://oss.cloud.custouch.com/res/163945/banner2.png"
                    fit="cover"
                    v-slots={{
                        error: () => (<>123</>),
                        placeholder: () => (<>Loading...</>)
                    }}
                    onLoad={() => {console.log("加载完毕");}}
                ></gorgeous-image>
                <gorgeous-input
                    v-model={inputValue}
                    type="text"
                    placeholder="输入框的默认placeholder"
                    autofocus
                    enterConfirm
                    onBlur={() => {console.log("失焦")}}
                    onFocus={() => {console.log("聚焦")}}
                    onChange={(val) => {console.log("改变", val)}}
                    onConfirm={() => {console.log("确认")}}
                ></gorgeous-input> */}
                <gorgeous-select
                    v-model={selectValue}
                    options={selectOptions}
                ></gorgeous-select>
            </>
        )
    }
});