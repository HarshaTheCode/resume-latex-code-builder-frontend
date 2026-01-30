import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-11 w-full rounded-lg border border-[#1a1a1a]/10 bg-white px-4 py-2 text-sm text-[#1a1a1a] shadow-sm transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#1a1a1a]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]/30 focus-visible:border-[#B8860B] disabled:cursor-not-allowed disabled:opacity-50 hover:border-[#1a1a1a]/30",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export { Input };
