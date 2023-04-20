import { ref, Ref, onMounted } from "vue";

interface UseTouchOptions {
    root: Ref<HTMLElement | undefined>
    position: Exclude<TouchElementStatus, "move">
    top: string
    ifAdsorption: boolean
}
type TouchPosition <T> = Record<"top" | "left", T>
type TouchElementStatus = "move" | "left" | "right";
type TouchElementClassNameStatus = `gorgeous-float-${TouchElementStatus}`

export default function useTouch(options: UseTouchOptions) {
    const oPosition = ref<TouchPosition<string>>({
            top: "0",
            left: "0"
        }),
        oTouchDiff = ref<TouchPosition<number>>({
            top: 0,
            left: 0
        }),
        btnStatus = ref<TouchElementClassNameStatus>(`gorgeous-float-${options.position}`);
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
        }
    });
    const handleTouchStart = (e: TouchEvent) => {
        requestAnimationFrame(() => {
            btnStatus.value = "gorgeous-float-move"
            if (!options.root?.value) return
            const { clientX, clientY } = e.changedTouches[0]
            const { offsetLeft, offsetTop } = options.root.value
            oTouchDiff.value = {
                top: clientX - offsetLeft,
                left: clientY - offsetTop
            }
            oPosition.value = {
                top: offsetTop + "px",
                left: offsetLeft + "px"
            }
        })
    }
    const handleTouchMove = (e: TouchEvent) => {
        requestAnimationFrame(() => {
            if (!options.root?.value) return
            const { clientX, clientY } = e.touches[0]
            let moveX = clientX - oTouchDiff.value.top,
                moveY = clientY - oTouchDiff.value.left,
                { offsetHeight, offsetWidth } = options.root.value
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
    const handleTouchEnd = (e: TouchEvent) => {
        requestAnimationFrame(() => {
            if (!options.root?.value) return
            const { clientX, clientY } = e.changedTouches[0]
            const { offsetWidth, offsetHeight } = options.root.value
            let tempX = clientX - oTouchDiff.value.top
            let tempY = clientY - oTouchDiff.value.left
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
    return {
        position: oPosition,
        className: btnStatus,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
    }
};