import { ref, Ref, onMounted, watch } from "vue";
import { useEvent, useToggle } from "@/useFunction";
import { systemType } from "@/config/system";
import { eventTypeConcurrent } from "@/utils/event";

export interface UseTouchOptions {
    root: Ref<HTMLElement | undefined>
    position: Exclude<TouchElementStatus, "move">
    top: string
    ifAdsorption: boolean
}
type TouchPosition <T> = Record<"top" | "left", T>
export type TouchElementStatus = "move" | "left" | "right";
export type TouchElementClassNameStatus = `gorgeous-float-${TouchElementStatus}`

/**
 * 元素可拖拽移动化
 * 适配度: 移动端、Pc端
 * @param options 
 * @returns 
 */
export function useTouch(options: UseTouchOptions) {
    const oPosition = ref<TouchPosition<string>>({
            top: "0",
            left: "0"
        }),
        oTouchDiff = ref<TouchPosition<number>>({
            top: 0,
            left: 0
        }),
        btnStatus = ref<TouchElementClassNameStatus>(`gorgeous-float-${options.position}`);
    const { state: lock, toggle } = useToggle();
    useEvent({
        root: options.root,
        events: [{
            type: eventTypeConcurrent("touchstart"),
            handle(e: TouchEvent) {
                toggle();
                requestAnimationFrame(() => {
                    btnStatus.value = "gorgeous-float-move"
                    if (!options.root?.value) return
                    const { x, y } = getEventClient(e);
                    const { offsetLeft, offsetTop } = options.root.value
                    oTouchDiff.value = {
                        top: x - offsetLeft,
                        left: y - offsetTop
                    }
                    oPosition.value = {
                        top: offsetTop + "px",
                        left: offsetLeft + "px"
                    }
                })
            }
        }, {
            type: eventTypeConcurrent("touchmove"),
            handle(e: TouchEvent) {
                requestAnimationFrame(() => {
                    if (!lock.value) return;
                    if (!options.root?.value) return
                    const { x, y } = getEventClient(e);
                    let moveX = x - oTouchDiff.value.top,
                        moveY = y - oTouchDiff.value.left;
                    const { offsetHeight, offsetWidth } = options.root.value
                    if (moveX + offsetWidth > window.innerWidth) moveX = window.innerWidth - offsetWidth
                    else if (moveX < 0) moveX = 0
                    if (moveY + offsetHeight > window.innerHeight) moveY = window.innerHeight - offsetHeight
                    else if (moveY < 0) moveY = 0
                    oPosition.value = {
                        top: `${moveY}px`,
                        left: `${moveX}px`
                    }
                })
            }
        }, {
            type: eventTypeConcurrent("touchend"),
            handle(e: TouchEvent) {
                toggle();
                requestAnimationFrame(() => {
                    if (!options.root?.value) return
                    const { x, y } = getEventClient(e);
                    const { offsetWidth, offsetHeight } = options.root.value
                    let tempX = x - oTouchDiff.value.top
                    let tempY = y - oTouchDiff.value.left
                    // 边界判定, 并对位置进行矫正
                    if (tempX < 0) {
                        tempX = 0
                    } else if (tempX > window.innerWidth - offsetWidth) {
                        tempX = window.innerWidth - offsetWidth
                    }
                    if (tempY < 0) {
                        tempY = 0
                    } else if (tempY > window.innerHeight - offsetHeight) {
                        tempY = window.innerHeight - offsetHeight
                    }
        
                    // 固定吸附在屏幕的左侧或者右侧(可选)
                    if (options.ifAdsorption) {
                        const windowWidthHalf = window.innerWidth / 2
                        if (tempX < windowWidthHalf) {
                            btnStatus.value = "gorgeous-float-left"
                            tempX = 0
                        } else {
                            btnStatus.value = "gorgeous-float-right"
                            tempX = window.innerWidth - offsetWidth
                        }
                    }
                    oPosition.value = {
                        top: tempY + "px",
                        left: tempX + "px"
                    }
        
                })
            }
        }]
    });
    // 初始化元素状态
    onMounted(() => {
        if (options.root?.value) {
            const { offsetWidth } = options.root.value
            let tempLeft = "0"
            if (options.position === "right") {
                tempLeft = (window.innerWidth - offsetWidth).toString() + "px"
            }
            oPosition.value = {
                top: options.top,
                left: tempLeft
            }
            resetBtnStatusClassNames(`gorgeous-float-${options.position}`);
        }
    });
    watch(oPosition, (val) => {
        if (!options.root.value) return;
        options.root.value.style.top = val.top;
        options.root.value.style.left = val.left;
    })
    watch(btnStatus, val => {
        if (!options.root.value) return;
        resetBtnStatusClassNames(val);
    });
    function resetBtnStatusClassNames(name: TouchElementClassNameStatus) {
        if (!options.root.value) return;
        options.root.value.classList.remove("gorgeous-float-move");
        options.root.value.classList.remove("gorgeous-float-left");
        options.root.value.classList.remove("gorgeous-float-right");
        options.root.value.classList.add(name);
    };
    function getEventClient(e: TouchEvent | MouseEvent) {
        return {
            x: systemType ? (<TouchEvent>e).changedTouches[0].clientX : (<MouseEvent>e).clientX,
            y: systemType ? (<TouchEvent>e).changedTouches[0].clientY : (<MouseEvent>e).clientY,
        }
    }
};