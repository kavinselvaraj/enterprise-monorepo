import baseConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
    ...baseConfig,
    content: [
        "./app/**/*.{ts,tsx}",
        "./styles/**/*.css",
    ],
};

export default config;
