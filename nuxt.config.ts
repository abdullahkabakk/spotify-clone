import {defineNuxtConfig} from "nuxt";

export default defineNuxtConfig({
    css: ["@/assets/css/tailwind.css"],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    modules: ['@nuxtjs/tailwindcss'],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },

});