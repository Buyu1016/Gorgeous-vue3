import { defineComponent, PropType, ref } from "vue";

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
        }
    },
    emits: ["error", "load"],
    setup(props, { emit, slots }) {
        const oImage = ref<HTMLImageElement>();
        const imageErrorLock = ref(false);
        const imageLoadLock = ref(false);
        function handleImageError(e: Event) {
            imageErrorLock.value = true;
            emit("error", e);
        }
        function handleImageLoad(e: Event) {
            imageLoadLock.value = true;
            emit("load", e);
        }
        const _defaultSlots = {
            placeholder: <>加载中...</>,
            error: <>Error!</>
        };
        return () => (
            <div class="display-inline-block relative">
                {!imageErrorLock.value && (<img
                    ref={oImage}
                    src={props.zip(props.src)}
                    alt={props.alt}
                    class={`relative z-1 w-full h-full block object-${props.fit}`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />)}
                <div class="absolute top-0 left-0 w-full h-full">
                    {/* 图片加载错误时的错误展示插槽 */}
                    { imageErrorLock.value && (slots.error?.() || _defaultSlots.error) }
                    {/* 图片未加载好时默认展示插槽 */}
                    { (!imageLoadLock.value && !imageErrorLock.value) && (slots.placeholder?.() || _defaultSlots.placeholder) }
                </div>
            </div>
        )
    }
});