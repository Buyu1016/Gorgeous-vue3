import { defineConfig } from 'vite'
import { resolve } from 'path'
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";

export default defineConfig({
    plugins: [
        vueJsx(),
        Unocss(),
    ],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, '../src')
        }
    }
})