import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"], // Asegúrate de incluir .css
  },
});