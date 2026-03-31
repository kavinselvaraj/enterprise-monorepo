import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
    ...sharedConfig,
    content: [
        "./app/**/*.{ts,tsx}",
        "./styles/**/*.css",
    ],
    theme: {
        extend: {
            ...sharedConfig.theme?.extend,
        },
    },
};

export default config;
