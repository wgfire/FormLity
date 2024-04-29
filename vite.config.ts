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
  },
  build: {
    //打包文件目录
    outDir: "./dist",
    //压缩
    minify: true,
    rollupOptions: {
      external: ["react",''],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "./dist/es",
        },
        // {
        //   //打包格式
        //   format: "cjs",
        //   //打包后文件名
        //   entryFileNames: "[name].js",
        //   //让打包目录和我们目录对应
        //   preserveModules: true,
        //   exports: "named",
        //   //配置打包根目录
        //   dir: "./dist/lib",
        // },
      ],
    },
    lib: {
      entry: "./index.ts",
      // formats: ["es", "cjs"],
    },
  },
});
