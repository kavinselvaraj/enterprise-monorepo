import * as React from "react";
import { cn } from "../../utils/cn";

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hint?: string;
    error?: string;
    leftAddon?: React.ReactNode;
    rightAddon?: React.ReactNode;
}

// ─── Component ─────────────────────────────────────────────────────────────────

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, hint, error, leftAddon, rightAddon, id, ...props }, ref) => {
        const inputId = id ?? React.useId();
        const hasError = Boolean(error);

        return (
            <div className="flex flex-col gap-1">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium text-gray-700"
                    >
                        {label}
                        {props.required && <span className="ml-0.5 text-red-500">*</span>}
                    </label>
                )}

                <div className="relative flex items-center">
                    {leftAddon && (
                        <span className="pointer-events-none absolute left-3 flex items-center text-gray-400">
                            {leftAddon}
                        </span>
                    )}
                    <input
                        ref={ref}
                        id={inputId}
                        aria-invalid={hasError}
                        aria-describedby={
                            hasError ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
                        }
                        className={cn(
                            "w-full rounded border bg-white px-3 py-2 text-sm text-gray-900",
                            "placeholder:text-gray-400",
                            "transition-colors duration-150",
                            "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-0 focus:border-brand-500",
                            "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:text-gray-400",
                            hasError
                                ? "border-red-500 focus:ring-red-500"
                                : "border-border-DEFAULT hover:border-border-strong",
                            leftAddon && "pl-9",
                            rightAddon && "pr-9",
                            className,
                        )}
                        {...props}
                    />
                    {rightAddon && (
                        <span className="pointer-events-none absolute right-3 flex items-center text-gray-400">
                            {rightAddon}
                        </span>
                    )}
                </div>

                {hint && !hasError && (
                    <p id={`${inputId}-hint`} className="text-xs text-gray-500">
                        {hint}
                    </p>
                )}
                {hasError && (
                    <p id={`${inputId}-error`} role="alert" className="text-xs text-red-600">
                        {error}
                    </p>
                )}
            </div>
        );
    },
);

Input.displayName = "Input";

export { Input };
