import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import imp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Map '@' to the 'src' directory
    },
  },
  plugins: [
    react(),
    imp({
      libList: [
        {
          libName: "@feb/kk-design",
          style: (name) => `@feb/kk-design/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  }
});
