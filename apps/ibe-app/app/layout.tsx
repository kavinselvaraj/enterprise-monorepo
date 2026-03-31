import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

// ─── Fonts ─────────────────────────────────────────────────────────────────────

const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
    display: "swap",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
    display: "swap",
});

// ─── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    title: "IBE App",
    description: "Enterprise IBE boilerplate.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

// ─── Root Layout ───────────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
