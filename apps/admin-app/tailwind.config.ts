import baseConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

/**
 * Admin-app Tailwind config.
 * Extends the shared base and scans admin-specific source.
 */
const config: Config = {
    ...baseConfig,
    content: [
        "./app/**/*.{ts,tsx}",
        "./styles/**/*.css",
    ],
};

export default config;
