import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/hideout": {
        target: "http://127.0.0.1:5000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hideout/, ""),
      },
      "/auth": {
        target: "http://127.0.0.1:5000/auth",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, ""),
      },
      "/api": {
        target: "http://127.0.0.1:5000/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    // rollupOptions: {
    //   external: ["daisy.jpg"],
    // },
    chunkSizeWarningLimit: 5000,
  },
});
