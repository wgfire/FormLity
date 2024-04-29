import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import imp from "vite-plugin-imp";
import dts from "vite-plugin-dts";
import glob from 'fast-glob'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';




export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Map '@' to the 'src' directory
    },
  },
  plugins: [
    react(),
    dts({
      entryRoot: "./src",
      outDir: ["./dist/es"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: "./tsconfig.json",
    }),

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
      external: ["react",'@feb/kk-design','react-dom'],
      plugins: [
        nodeResolve()
      ],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: false, // true会产生mode_modules目录 yalcrc本地调试不会将这个目前移到项目里
        //  preserveModulesRoot: "./src/components",
          inlineDynamicImports: false, // true会将动态导入的文件打包到一起
          exports: "named",
          //配置打包根目录
          dir: "./dist/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          exports: "named",
          //配置打包根目录
          dir: "./dist/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
      // name: "formilys",
      // fileName: "index",
      // formats: ["es", "cjs"],
    },
  },
});
