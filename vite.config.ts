import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), dts({ include: ["lib"] })],
    build: {
        lib: {
            entry: path.resolve(__dirname, "lib/index.ts"),
            formats: ["es"],
        },
        copyPublicDir: false,
    },
});
