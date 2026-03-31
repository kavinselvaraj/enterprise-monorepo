import type { Config } from "tailwindcss";

/**
 * Base Tailwind config shared across all apps.
 * Each app extends this and provides its own `content` array.
 *
 * NOTE: Do NOT add `content` here — content paths are app-specific.
 */
const config: Omit<Config, "content"> = {
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                    950: "#172554",
                },
                surface: {
                    DEFAULT: "#ffffff",
                    subtle: "#f9fafb",
                    muted: "#f3f4f6",
                },
                border: {
                    DEFAULT: "#e5e7eb",
                    strong: "#d1d5db",
                },
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
            borderRadius: {
                sm: "0.25rem",
                DEFAULT: "0.375rem",
                md: "0.5rem",
                lg: "0.75rem",
                xl: "1rem",
            },
            boxShadow: {
                card: "0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
                elevated:
                    "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "slide-up": {
                    "0%": { transform: "translateY(8px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
            animation: {
                "fade-in": "fade-in 0.2s ease-out",
                "slide-up": "slide-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
};

export default config;
