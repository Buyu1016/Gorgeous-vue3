import { ref, Ref, onMounted, onBeforeUnmount, isRef } from "vue";

export type UseEventHandle = (e: Event) => void;

export interface UseEventOptions {
    root: Ref<Element | undefined> | Window | Document | Element
    events?: {
        type: (keyof (HTMLElementEventMap | WindowEventMap)) | string
        handle?: UseEventHandle,
    }[]
}

export function useEvent(options: UseEventOptions) {
    const root = ref<Element | Window | Document>();
    function addEvents() {
        root.value = isRef(options.root) ? options.root.value : options.root;
        if (root.value && options.events) {
            options.events.forEach(event => {
                event.handle && (root.value?.addEventListener(event.type, event.handle));
            });
        };
    };
    function removeEvents() {
        if (root.value && options.events) {
            options.events.forEach(event => {
                event.handle && (root.value?.removeEventListener(event.type, event.handle));
            });
        };
    };
    onMounted(addEvents);
    onBeforeUnmount(removeEvents)
    return {
        remove: removeEvents
    }
};