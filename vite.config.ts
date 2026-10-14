import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import type { PluginOption } from "vite";

export default defineConfig(async () => {
  const plugins: PluginOption[] = [react(), tailwindcss()];

  // Optional dev-only plugin for the preview element picker; ignored when absent.
  try {
    // @ts-expect-error — optional untyped dev-only module
    const m = (await import(/* @vite-ignore */ "./.vite-source-tags.js")) as {
      sourceTags: () => PluginOption;
    };
    plugins.push(m.sourceTags());
  } catch {
    // Plugin not present — continue without it.
  }

  return {
    plugins,
    build: {
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
    },
  };
});
