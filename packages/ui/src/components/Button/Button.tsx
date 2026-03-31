import * as React from "react";
import { cn } from "../../utils/cn";

// ─── Variant Maps ──────────────────────────────────────────────────────────────

const variantClasses = {
    primary:
        "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500 disabled:bg-brand-300",
    secondary:
        "bg-white text-gray-700 border border-border-strong hover:bg-surface-subtle focus-visible:ring-gray-400 disabled:opacity-50",
    destructive:
        "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 disabled:bg-red-300",
    ghost:
        "text-gray-700 hover:bg-surface-muted focus-visible:ring-gray-400 disabled:opacity-50",
    link: "text-brand-600 underline-offset-4 hover:underline focus-visible:ring-brand-500 disabled:opacity-50",
} as const;

const sizeClasses = {
    sm: "h-8 px-3 text-xs gap-1.5",
    md: "h-9 px-4 text-sm gap-2",
    lg: "h-11 px-6 text-base gap-2",
    icon: "h-9 w-9",
} as const;

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof variantClasses;
    size?: keyof typeof sizeClasses;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    asChild?: boolean;
}

// ─── Component ─────────────────────────────────────────────────────────────────

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            loading = false,
            leftIcon,
            rightIcon,
            disabled,
            children,
            ...props
        },
        ref,
    ) => {
        const isDisabled = disabled || loading;

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                aria-disabled={isDisabled}
                className={cn(
                    // base
                    "inline-flex items-center justify-center whitespace-nowrap rounded font-medium",
                    "transition-colors duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                    "disabled:cursor-not-allowed",
                    variantClasses[variant],
                    sizeClasses[size],
                    className,
                )}
                {...props}
            >
                {loading ? (
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : leftIcon ? (
                    <span className="shrink-0">{leftIcon}</span>
                ) : null}
                {children}
                {rightIcon && !loading && <span className="shrink-0">{rightIcon}</span>}
            </button>
        );
    },
);

Button.displayName = "Button";

export { Button };
