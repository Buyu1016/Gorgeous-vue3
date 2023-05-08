import { defineComponent, ref, PropType, watch } from "vue";
import { useEvent } from "@/useFunction";
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
        const defaultSlots = {
            clear: <>X</>
        };
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
                class={`gorgeous-input ${ props.disable ? 'disabled' : '' }`}
            >
                { slots.left && <div class="gorgeous-left-slot">{ slots.left() }</div> }
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
                    class=""
                />
                { props.clearable && (value.value) && <div class="inline-block px-1 cursor-pointer" onClick={handleClear}>{ slots.clear?.() || defaultSlots.clear }</div> }
                { slots.right && <div class="gorgeous-right-slot">{ slots.right() }</div> }
            </div>
        );
    }
});
