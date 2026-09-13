import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./"),
    },
  },

  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Core React runtime (lightweight)
            if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
              return "vendor-react-core";
            }
            // Router only
            if (id.includes("react-router")) {
              return "vendor-router";
            }
            // Radix UI primitives
            if (id.includes("@radix-ui")) {
              return "vendor-ui";
            }
          }
        },
      },
    },
  },
});