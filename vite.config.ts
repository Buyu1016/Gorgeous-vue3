import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import Unocss from "./config/unocss";
import dts from "vite-plugin-dts";

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    plugins: [
        vue(),
        vueJsx(),
        Unocss(),
        dts({
            root: resolve(__dirname, './'),
        })
    ],
    build: {
        rollupOptions: {
            external: ["vue"], // 打包时把vue库排除
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
        minify: "terser", // 代码混淆
        reportCompressedSize: true, // 代码压缩报告
        cssCodeSplit: true, // css代码切割
        sourcemap: true, // 源码地图
        lib: {
            entry: "./src/entry.ts",
            name: "Gorgeous",
            fileName: "gorgeous-vue3",
            formats: ["es", "cjs", "iife"] // 打包产物的模式规范
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    test: {
        globals: true,
        environment: 'happy-dom',
        transformMode: {
            web: [/.[tj]sx$/]
        },
        coverage: {
            provider: "istanbul",
            reporter: ["text", "json", "html"],
        },
    }
})