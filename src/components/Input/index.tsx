import { defineComponent, ref, PropType, watch } from "vue";
import "./style.less";

export type InputFormatOpportunity = "blur" | "change";

export default defineComponent({
    name: "GorgeousInput",
    props: {
        modelValue: {
            type: String as PropType<string>,
            required: false
        },
        type: {
            type: String as PropType<string>,
            default: "text"
        },
        placeholder: {
            type: String as PropType<string>,
            required: false
        },
        disabled: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        autocomplete: {
            type: String as PropType<string>,
            default: "off"
        },
        autofocus: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        // e.key
        confirmKey: {
            type: String as PropType<string>,
            default: "Enter"
        },
        format: {
            type: Function as PropType<(value: string) => string>,
        },
        formatOpportunity: {
            type: String as PropType<InputFormatOpportunity>,
            default: "blur"
        },
        rule: {}
    },
    emits: ["update:value", "confirm", "focus", "blur", "change", "clear"],
    setup(props, { emit }) {
        const value = ref(props.modelValue || "");
        watch(value, val => emit("update:value", val))
        const oInput = ref<HTMLInputElement>();
        function handleKeyDown(e: KeyboardEvent) {
            if (!props.confirmKey) return;
            if (e.key === props.confirmKey) emit("confirm", value.value);
        };
        function handleFocus(e: FocusEvent) {
            emit("focus", e);
        };
        function handleBlur(e: FocusEvent) {
            props.format && (props.formatOpportunity === "blur") && format();
            emit("blur", e);
        };
        function format() {
            if (props.format) {
                const _formatValue = props.format(value.value);
                if (_formatValue !== value.value) value.value = _formatValue // 回到正常经过格式化的值
                else emit("change", value.value);
            }
        }
        watch(value, (val) => {
            if (props.format && props.formatOpportunity === "change") {
                format();
            } else emit("change", val);
        });

        return () => (
            <input
                ref={oInput}
                v-model={value.value}
                class={`gorgeous-input`}
                type={props.type}
                placeholder={props.placeholder}
                autocomplete={props.autocomplete}
                autofocus={props.autofocus}
                disabled={props.disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeydown={handleKeyDown}
            />
        );
    }
});
