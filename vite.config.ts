import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pulic": path.resolve(__dirname, "public"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});
