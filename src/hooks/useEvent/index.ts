import { ref, Ref, onMounted, onBeforeUnmount, isRef } from "vue";

type UseEventHandle = (e: Event) => void;

interface UseEventOptions {
    root: Ref<HTMLElement | undefined> | Window | Document
    events?: {
        type: keyof HTMLElementEventMap
        handle?: UseEventHandle,
    }[]
}

export function useEvent(options: UseEventOptions): void {
    const root = ref<HTMLElement | Window | Document>();
    onMounted(() => {
        root.value = isRef(options.root) ? options.root.value : options.root;
        if (root.value && options.events) {
            options.events.forEach(event => {
                event.handle && (root.value?.addEventListener(event.type, event.handle));
            });
        };
    });
    onBeforeUnmount(() => {
        if (root.value && options.events) {
            options.events.forEach(event => {
                event.handle && (root.value?.removeEventListener(event.type, event.handle));
            });
        };
    })
};