import solid from "solid-start/vite";
import { defineConfig } from "vite";
import suidPlugin from "@suid/vite-plugin";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [solid(), suidPlugin()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
