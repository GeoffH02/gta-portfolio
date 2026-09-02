import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: "/gta-portfolio/",

  define: {
    CESIUM_BASE_URL: JSON.stringify("/gta-portfolio/cesiumStatic/"),
  },
});
