import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, PluginOption } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/challenges/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    visualizer({
      template: "treemap",
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "analice.html",
    }) as unknown as PluginOption,
    sentryVitePlugin({
      org: "iran-0e",
      project: "javascript-react",
    }),
  ],
});
