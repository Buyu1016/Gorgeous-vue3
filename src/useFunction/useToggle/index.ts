import { ref, watch as VueWatch } from "vue";

export interface UseToggleOptions {
    initValue?: boolean
    watch?: Parameters<typeof VueWatch>[1]
}

export function useToggle(options?: UseToggleOptions) {
    const _value = ref<boolean>(options?.initValue || false);
    function toggle(value?: boolean) {
        if (typeof value === "undefined") {
            _value.value = !_value.value;
        } else {
            _value.value = value;
        };
    };
    options?.watch && VueWatch(_value, options.watch);
    return {
        state: _value,
        toggle
    }
};