// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

// Netlify builds (and any local `vite build` outside the Lovable sandbox) use the
// official Netlify TanStack Start plugin, which emits dist/client + the Netlify
// server function. Nitro is disabled there so the two deploy adapters don't fight
// over the build output. Inside Lovable, nitro stays in charge (LOVABLE_NITRO_PRESET).
const isLovableBuild = Boolean(process.env["LOVABLE_NITRO_PRESET"]);

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(isLovableBuild ? {} : { nitro: false as const, plugins: [netlify()] }),
});
