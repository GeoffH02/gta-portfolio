import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: "/portfolio/",

  define: {
    CESIUM_BASE_URL: JSON.stringify("/portfolio/cesiumStatic/"),
  },
});
