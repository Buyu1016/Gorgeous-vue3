import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

export default () =>
    Unocss({
        presets: [presetUno(), presetAttributify(), presetIcons()],
});