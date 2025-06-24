import path from 'path';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: path.resolve(__dirname, 'index.html'),
        }
    }
});
