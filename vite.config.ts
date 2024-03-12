// import { VitePWA } from "vite-plugin-pwa";
// import webmanifest from "./src/manifest.json";

export default {
  base: "./",
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    // VitePWA({
    //   registerType: "autoUpdate",
    //   injectRegister: "auto",
    //   manifest: webmanifest,
    // }),
  ],
};
