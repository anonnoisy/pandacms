import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { vitePluginForArco } from '@arco-plugins/vite-react'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
        vitePluginForArco({
            theme: '@arco-design/theme-yunque',
            style: true
        }),
    ],
});
