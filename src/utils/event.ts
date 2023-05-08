import { systemEventType, systemType } from "@/config/system"

/**
 * 兼容移动端&Pc端事件调和
 * @param eventType 
 */
export function eventTypeConcurrent(eventType: string): string {
    for (const iterator of systemEventType) {
        if (iterator.includes(eventType)) {
            return iterator[+systemType];
        }
    };
    // 如果无法调和则返回源类型
    return eventType;
}