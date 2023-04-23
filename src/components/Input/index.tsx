import { defineComponent, ref, PropType, watch } from "vue";
import { useEvent } from "@/hooks";
import "./style.less";

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
        clearable: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        disable: {
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
        enterConfirm: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        rule: {}
    },
    emits: ["update:value", "confirm", "focus", "blur", "change", "clear"],
    setup(props, { emit, slots }) {
        const value = ref(props.modelValue);
        watch(value, val => emit("update:value", val))
        const oInput = ref<HTMLInputElement>();
        const oInputStatus = ref(props.autofocus);
        props.enterConfirm && useEvent({
            root: oInput,
            events: [{
                type: "keydown",
                handle: handleKeyDown
            }]
        });
        function handleKeyDown(e: KeyboardEvent) {
            if (e.code === "Enter") emit("confirm", value.value);
        };
        function handleFocus() {
            oInputStatus.value = true;
            emit("focus");
        };
        function handleBlur() {
            oInputStatus.value = false;
            emit("blur");
        };
        function handleClear() {
            value.value = "";
        };
        watch(value, val => {
            emit("change", val);
        });

        return () => (
            <div
                class={`gorgeous-input inline-block border-1 b-dark border-style-double ${ props.disable ? 'disabled bg-gray' : '' }`}
            >
                { slots.left?.() }
                <input
                    ref={oInput}
                    type={props.type}
                    v-model={value.value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={props.placeholder}
                    autocomplete={props.autocomplete}
                    autofocus={props.autofocus}
                    disabled={props.disable}
                    class="border-none p-0 h-full block bg-transparent p-1"
                />
                { props.clearable && <div onClick={handleClear}>{ slots.clear?.() }</div> }
                { slots.right?.() }
            </div>
        );
    }
});
