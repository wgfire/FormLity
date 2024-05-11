import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import imp from "vite-plugin-imp";
import dts from "vite-plugin-dts";
import glob from "fast-glob";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
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
      outDir: ["./dist/es",'./dist/lib'],
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
  optimizeDeps: {
    esbuildOptions: {
      drop: ["console"],
    },
  },
  build: {
    //打包文件目录
    outDir: "./dist",
    target: "es2020",
    //压缩
    minify: "esbuild",
    rollupOptions: {
      input: "./src/index.ts",
      external: [
        "react",
        "@feb/kk-design",
        "react-dom",
        "@ant-design/icons",
        "ahooks",
      ],
      plugins: [commonjs()],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: false, // true会产生mode_modules目录 yalcrc本地调试不会将这个目前移到项目里
          preserveModulesRoot: "src",
          inlineDynamicImports: false, // true会将动态导入的文件打包到一起
          exports: "named",
          //配置打包根目录
          dir: "./dist/es",
          manualChunks(id, { getModuleInfo, getModuleIds }) {
            if (id.includes("components")) {
              return "assets/components";
            }
            if (id.includes("src/ui")) {
              return "assets/ui";
            }
            if (id.includes("node_modules")) {
              return "assets/venders";
            }
          },
        },
        {
          //打包格式
          format: "cjs",
          name: "form-lity",
          //打包后文件名
          entryFileNames: "[name].js",
          exports: "named",
          //配置打包根目录
          dir: "./dist/lib",
        },
      ],
    },
    lib: {
      entry: ["./src/index.ts"], //此模式会将css提到一起,以及保留入口文件的导出
    },
  },
});
