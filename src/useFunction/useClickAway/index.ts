import { onBeforeMount, Ref, isRef } from "vue";
import { useEvent } from "../useEvent";

export interface UseClickAwayOptions {
    root: Ref<Element | undefined> | Element
    handle?: (e: Event) => void
}

export function useClickAway(options: UseClickAwayOptions) {
    const { remove } = useEvent({
        root: window,
        events: [{
            type: "click",
            handle: (e) => {
                if (!e.target) {
                    options.handle && options.handle(e);
                    return;
                };
                // 判断是不是点击的刚好是options.root
                if (isRef(options.root)) {
                    if (!options.root.value?.contains(e.target as Element)) {
                        options.handle && options.handle(e);
                    };
                } else {
                    if (!options.root?.contains(e.target as Element)) {
                        options.handle && options.handle(e);
                    };
                }
                
            }
        }]
    });
    onBeforeMount(remove);
    return {
        remove
    }
};