// vite.config.ts
import { defineConfig } from "file:///media/andrey/f60d2770-2671-4d94-83d8-1f467d2b3769/code/sites/elena/elena-preact-site/node_modules/vite/dist/node/index.js";
import preact from "file:///media/andrey/f60d2770-2671-4d94-83d8-1f467d2b3769/code/sites/elena/elena-preact-site/node_modules/@preact/preset-vite/dist/esm/index.mjs";
import tsconfigPaths from "file:///media/andrey/f60d2770-2671-4d94-83d8-1f467d2b3769/code/sites/elena/elena-preact-site/node_modules/vite-tsconfig-paths/dist/index.js";
import { visualizer } from "file:///media/andrey/f60d2770-2671-4d94-83d8-1f467d2b3769/code/sites/elena/elena-preact-site/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var vite_config_default = defineConfig({
  plugins: [preact(), tsconfigPaths()],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          gzipSize: true,
          brotliSize: true
        })
      ]
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbWVkaWEvYW5kcmV5L2Y2MGQyNzcwLTI2NzEtNGQ5NC04M2Q4LTFmNDY3ZDJiMzc2OS9jb2RlL3NpdGVzL2VsZW5hL2VsZW5hLXByZWFjdC1zaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbWVkaWEvYW5kcmV5L2Y2MGQyNzcwLTI2NzEtNGQ5NC04M2Q4LTFmNDY3ZDJiMzc2OS9jb2RlL3NpdGVzL2VsZW5hL2VsZW5hLXByZWFjdC1zaXRlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tZWRpYS9hbmRyZXkvZjYwZDI3NzAtMjY3MS00ZDk0LTgzZDgtMWY0NjdkMmIzNzY5L2NvZGUvc2l0ZXMvZWxlbmEvZWxlbmEtcHJlYWN0LXNpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIHR5cGUgUGx1Z2luIH0gZnJvbSAndml0ZSdcbmltcG9ydCBwcmVhY3QgZnJvbSAnQHByZWFjdC9wcmVzZXQtdml0ZSdcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcHJlYWN0KCksIHRzY29uZmlnUGF0aHMoKV0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICB2aXN1YWxpemVyKHtcbiAgICAgICAgICBnemlwU2l6ZTogdHJ1ZSxcbiAgICAgICAgICBicm90bGlTaXplOiB0cnVlLFxuICAgICAgICB9KSBhcyBQbHVnaW4sXG4gICAgICBdLFxuICAgIH0sXG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpYixTQUFTLG9CQUFpQztBQUMzZCxPQUFPLFlBQVk7QUFDbkIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyxrQkFBa0I7QUFFM0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFBQSxFQUNuQyxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxXQUFXO0FBQUEsVUFDVCxVQUFVO0FBQUEsVUFDVixZQUFZO0FBQUEsUUFDZCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
