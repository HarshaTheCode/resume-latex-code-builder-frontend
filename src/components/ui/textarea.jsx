import * as React from "react";
import { cn } from "../../lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                "flex min-h-[100px] w-full rounded-lg border border-[#1a1a1a]/10 bg-white px-4 py-3 text-sm text-[#1a1a1a] shadow-sm transition-all duration-300 placeholder:text-[#1a1a1a]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]/30 focus-visible:border-[#B8860B] disabled:cursor-not-allowed disabled:opacity-50 resize-y hover:border-[#1a1a1a]/30",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Textarea.displayName = "Textarea";

export { Textarea };
