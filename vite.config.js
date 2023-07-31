import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import url from "@rollup/plugin-url";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-styled-components"]],
      },
    }),
    url()
  ],
});
