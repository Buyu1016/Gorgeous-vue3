import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const _safeList: string[] = [];

// object-fit: xxx;
const objectFit = ["none", "fill", "cover", "contain", "scale-down"];
_safeList.push(...objectFit.map(t => `object-${t}`));

// position
const position = ["bottom-full", "top-full"];
_safeList.push(...position);

export default () =>
    Unocss({
        safelist: _safeList,
        presets: [presetUno(), presetAttributify(), presetIcons()
    ],
});