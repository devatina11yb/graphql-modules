import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig(() => {
  return {
    plugins: [
      ...VitePluginNode({
        adapter: "express",
        appPath: "./src/index.ts",
      }),
    ],
  };
});
