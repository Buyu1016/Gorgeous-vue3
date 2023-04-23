/// <reference types="vitest" />

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
            formats: ["es", "cjs", "iife"]
        }
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
        }
    }
})