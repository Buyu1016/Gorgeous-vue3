import { defineComponent, PropType, ref, onMounted, computed, onBeforeUnmount } from "vue";

type ImageFit = "fill" | "contain" | "cover" | "none" | "scale-down"
type ImageLoading = "eager" | "lazy"
type ImageReferrerPolicy = "" | "no-referrer" | "origin" | "unsafe-url"

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
        referrerPolicy: {
            type: String as PropType<ImageReferrerPolicy>,
            default: ""
        },
        zip: {
            type: Function as PropType<(url: string) => string>,
            default: (url) => url
        },
        lazy: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        lazyOffset: {
            type: Number as PropType<number>,
            default: 10
        }
    },
    emits: ["error", "load"],
    setup(props, { emit }) {
        const oImage = ref<HTMLImageElement>();
        const loadLock = ref<boolean>(false);
        const _src = computed(() => {
            return props.lazy ? "" : props.zip(props.src);
        });
        const overflowAutoContainer = ref<HTMLElement | Window>(window);
        function handleDistanceTop() {
            if (!oImage.value || loadLock.value || oImage.value.dataset.src === oImage.value.src) return;
            let height = 0;
            let scrollTop = 0;
            if (overflowAutoContainer.value === window) {
                scrollTop = window.scrollY + window.innerHeight;
            }
            else {
                const { offsetTop, scrollTop: top, clientHeight } = (overflowAutoContainer.value as HTMLElement);
                height = offsetTop;
                scrollTop = top + clientHeight;
            }
            const imageTop = oImage.value.offsetTop - height;
            if (scrollTop - imageTop >= Math.abs(props.lazyOffset)) {
                oImage.value.src = oImage.value.dataset.src || "";
            }
        };
        onMounted(() => {
            if (oImage.value) {
                oImage.value.loading = props.loading
                if (props.lazy) { // 图片懒加载策略
                    oImage.value.setAttribute("data-src", props.zip(props.src));
                    overflowAutoContainer.value = deepFindOverflowAutoFatherElement(oImage.value);
                    if (window.IntersectionObserver) {
                        const _observer = new IntersectionObserver(e => {
                            const [entry] = e;
                            if (entry.isIntersecting && oImage.value) {
                                oImage.value.src = oImage.value.dataset.src || "";
                                _observer.unobserve(oImage.value);
                            };
                        }, {
                            root: overflowAutoContainer.value === window ? document : overflowAutoContainer.value as Element,
                            rootMargin: Math.abs(props.lazyOffset) + "px"
                        });
                        _observer.observe(oImage.value);
                    } else {
                        overflowAutoContainer.value.addEventListener("scroll", handleDistanceTop);
                        handleDistanceTop(); // 初始化检测一次
                    }
                }
            }
        });
        onBeforeUnmount(() => {
            if (props.lazy) {
                overflowAutoContainer.value.removeEventListener("scroll", handleDistanceTop);
            }
        });
        function handleImageError(e: Event) {
            emit("error", e);
        }
        function handleImageLoad(e: Event) {
            loadLock.value = true;
            emit("load", e);
        }
        return () => (
            <img
                ref={oImage}
                src={_src.value}
                alt={props.alt}
                class={`gorgeous-image object-${props.fit}`}
                referrerpolicy={props.referrerPolicy}
                onLoad={handleImageLoad}
                onError={handleImageError}
            />
        )
    }
});

/**
 * 寻找距离该元素最近的可滚动容器
 * @param element 
 * @returns 
 */
function deepFindOverflowAutoFatherElement(element: Element): HTMLElement | Window {
    if (!element.parentElement) return window;
    const { overflowX, overflowY } = element.parentElement.style;
    if ([overflowX, overflowY].includes("auto")) {
        return element.parentElement;
    } else {
        return deepFindOverflowAutoFatherElement(element.parentElement);
    }
}