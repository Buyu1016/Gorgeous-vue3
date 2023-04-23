import { defineComponent, PropType, ref, computed, watch } from 'vue'
import "./style.less";
import { useEvent } from "@/hooks";

export interface SelectOptionsItem {
    label: string
    value: string | number
    disabled?: boolean
}

export type SelectPlacement = "top" | "bottom"

export default defineComponent({
    name: "GorgeousSelect",
    props: {
        modelValue: {
            type: String as PropType<string | number>,
        },
        options: {
            type: Array as PropType<SelectOptionsItem[]>,
            default: () => []
        },
        // 默认值
        placeholder: {
            type: String as PropType<string>,
            default: ""
        },
        // 下拉框的展示的最大高度
        optionsMaxHeight: {
            type: String as PropType<string>,
            default: "10rem"
        },
        // 清空
        clearable: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        // 下拉框位置
        placement: {
            type: String as PropType<SelectPlacement>,
            default: "bottom"
        }
    },
    emits: ["update:value", "change", "clear", "options-visible"],
    setup(props, { emit, slots }) {
        const value = ref(props.modelValue);
        const labelValue = computed(() => props.options.find(option => option.value === value.value)?.label);
        const optionsLock = ref(false);
        const optionsPlacementClassName = computed(() => props.placement === "bottom" ? "top-full" : "bottom-full");
        const oSelectElement = ref<HTMLDivElement>();
        const oSelectInputElement = ref<HTMLDivElement>();
        const windowClickVel: {value?: (e: Event) => void} = {
            value: undefined
        };
        const defaultSlots = {
            clear: <>清除</>
        };
        function handleClick() {
            optionsLock.value = !optionsLock.value;
        };
        function handleSelectOption(option: SelectOptionsItem) {
            optionsLock.value = false;
            value.value = option.value;
        };
        function handleWindowClick(e: Event) {
            if (!oSelectElement.value?.contains(e.target as Node)) {
                optionsLock.value = false;
            };
        };
        function handleClear(e: Event) {
            e.stopPropagation();
            value.value = undefined;
            emit("clear");
        };
        useEvent({
            root: window,
            events: [{
                type: "click",
                handle: (e) => {windowClickVel.value?.(e)}
            }]
        });
        watch(value, val => {
            emit("update:value", val);
            emit("change", val)
        });
        watch(optionsLock, val => {
            emit("options-visible", val)
            windowClickVel.value = val ? handleWindowClick : undefined;
        });
        return () => (
            <div ref={oSelectElement} class={`gorgeous-select`}>
                <div
                    ref={oSelectInputElement}
                    class={`gorgeous-input cursor-pointer select-none flex items-center`}
                    onClick={handleClick}
                >
                    <div class={`flex-1`}>{ labelValue.value || props.placeholder }</div>
                    { labelValue.value && props.clearable && <div onClick={handleClear}>{ slots.clear?.() || defaultSlots.clear }</div> }
                </div>
                <div
                    class={`gorgeous-options ${optionsPlacementClassName.value}`}
                    style={{
                        maxHeight: optionsLock.value ? props.optionsMaxHeight : "0"
                    }}
                >
                    { props.options.map((option, index) => (<div class={`cursor-pointer select-none`} key={index} onClick={() => handleSelectOption(option)}>{ slots.option?.(option) || option.label }</div>)) }
                </div>
            </div>
        )
    }
})