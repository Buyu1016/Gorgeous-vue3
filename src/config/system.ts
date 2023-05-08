// 双端数据标识
export const twoWayDataSymbol = Symbol("twoWayData");
// 当前设备的类型: true => 移动端 false => Pc端
export let systemType = true;
try {
    systemType = window.navigator ? /Mobi|Android|iPhone/i.test(window.navigator.userAgent) : true;
} catch (error) {
    console.log("error", error);
}
// 双端事件兼容列表: 二维数组, 0 => Pc端事件, 1 => 移动端事件
export const systemEventType = [
    ["mousedown", "touchstart"],
    ["mousemove", "touchmove"],
    ["mouseup", "touchend"]
]