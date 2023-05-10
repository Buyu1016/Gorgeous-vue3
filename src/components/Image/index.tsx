import { defineComponent, PropType, ref, onMounted, computed } from "vue";

type ImageFit = "fill" | "contain" | "cover" | "none" | "scale-down"
type ImageLoading = "eager" | "lazy"

export default defineComponent({
    name: "GorgeousImage",
    props: {
        src: {
            type: String as PropType<string>,
            default: ""
        },
        alt: {
            type: String as PropType<string>,
            default: ""
        },
        fit: {
            type: String as PropType<ImageFit>,
            default: "fill"
        },
        loading: {
            type: String as PropType<ImageLoading>,
            default: "lazy"
        },
        zip: {
            type: Function as PropType<(url: string) => string>,
            default: (url) => url
        },
        lazy: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    emits: ["error", "load"],
    setup(props, { emit }) {
        const oImage = ref<HTMLImageElement>();
        const imageErrorLock = ref(false);
        const imageLoadLock = ref(false);
        const _src = computed(() => {
            return props.zip(props.src);
        });
        onMounted(() => {
            oImage.value && (oImage.value.loading = props.loading);
        });
        function handleImageError(e: Event) {
            imageErrorLock.value = true;
            emit("error", e);
        }
        function handleImageLoad(e: Event) {
            imageLoadLock.value = true;
            emit("load", e);
        }
        return () => (
            <img
                ref={oImage}
                src={_src.value}
                alt={props.alt}
                class={`block object-${props.fit}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
            />
        )
    }
});