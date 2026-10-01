import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite is the tool that runs and bundles the app. This enables React support.
export default defineConfig({ plugins: [react()] });
