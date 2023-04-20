import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import Unocss from "./config/unocss";

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    plugins: [
        vue(),
        vueJsx(),
        Unocss()
    ],
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            external: ["vue", "vue-router"],
            output: {
                globals: {
                vue: "Vue",
                },
            },
        },
        minify:false,
        lib: {
            entry: "./src/entry.ts",
            name: "Gorgeous",
            fileName: "gorgeous-ui",
            // 导出模块格式
            formats: ["es", "umd","iife"],
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
})