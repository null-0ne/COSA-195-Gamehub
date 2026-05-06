
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    return {
        server: {
            proxy: {
                /**
                 * For easier development proxy the json-server url http://localhost:8000
                 * to the /api path so that fetch requests DO NOT have hardcoded localhost urls
                 */
                '/api': {
                    target: 'http://localhost:8000',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
            /**
             * CORS prevents cross scripting attacks but can be annoying during development.
             * Setting server.cors to true allows any website to send requests to your 
             * dev server and download your source code and content. 
             * Recommended to  always use an explicit list of allowed origins.
             */
            cors:true,
        },
    }
})