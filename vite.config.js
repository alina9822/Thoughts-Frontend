import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // proxy: {
    //   "/api": {
    //     //only change this line to your backend server
    //     target: "http://localhost:5000",
    //     changeOrigin: true,
    //     // rewrite: (path) => path.replace(/^\/api/, ""),
    //     rewrite: (path) => path.replace(/^/, ""),
    //   },
    // },
  },
});
