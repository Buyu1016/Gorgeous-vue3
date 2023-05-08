import { ref, Ref } from "vue";
import { useEvent } from "../useEvent";
import { systemType } from "@/config/system";
import { eventTypeConcurrent } from "@/utils/event";

export interface UseSlidingDirectionOptions {
    root?: Ref<Element | undefined> | Window | Document | Element
    affirmation?: number
    watchDirectionChange?: (direction: UseSlidingDirection, diff: number) => void
}
export type UseSlidingDirection = "left" | "right" | "top" | "bottom";

/**
 * 用户滑动的方位
 * 适配度: 移动端、Pc端
 * @param options 
 * @returns 
 */
export function useSlidingDirection(options?: UseSlidingDirectionOptions) {

    const _downPoint = ref<{
        x: number
        y: number
    }>();
    const { remove } = useEvent({
        root: options?.root || window,
        events: [{
            type: eventTypeConcurrent("touchstart"),
            handle: (e: TouchEvent) => {
                _downPoint.value = getEventClient(e);
            }
        }, {
            type: eventTypeConcurrent("touchmove"),
            handle: (e: TouchEvent) => {
                if (!_downPoint.value) return;
                // 分别计算当前点距离起始点的方位, 优先哪个方位到达临界值则记做移动主方位
                const { x, y } = getEventClient(e);
                const _xDiff = x - _downPoint.value.x;
                const _yDiff = y - _downPoint.value.y;
                const _xAbsDiff = Math.abs(_xDiff);
                const _yAbsDiff = Math.abs(_yDiff);
                // 计算方位
                const _diffAffirmation = options?.affirmation || 100
                if (_xAbsDiff >= _diffAffirmation || _yAbsDiff >= _diffAffirmation) {
                    let _direction: UseSlidingDirection = "right";
                    let _directionDiff = 0;
                    if (_xAbsDiff >= _diffAffirmation) { // left/right
                        _direction = _xDiff >= 0 ? "right" : "left";
                        _directionDiff = _xAbsDiff;
                        // 触发后清除记录
                    } else if (_yAbsDiff >= _diffAffirmation) { // top/bottom
                        _direction = _yDiff >= 0 ? "bottom" : "top";
                        _directionDiff = _yAbsDiff;
                    }
                    options?.watchDirectionChange?.(_direction, _directionDiff)
                    _downPoint.value = undefined;
                }
            }
        }, {
            type: eventTypeConcurrent("touchend"),
            handle: () => {
                _downPoint.value = undefined;
            }
        }]
    });
    function getEventClient(e: TouchEvent | MouseEvent) {
        return {
            x: systemType ? (<TouchEvent>e).changedTouches[0].clientX : (<MouseEvent>e).clientX,
            y: systemType ? (<TouchEvent>e).changedTouches[0].clientY : (<MouseEvent>e).clientY,
        }
    }
    return {
        remove
    }
}