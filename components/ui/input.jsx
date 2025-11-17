import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const isInvalid = props['aria-invalid'] === true;
  
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-lg border bg-white dark:bg-card px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
        isInvalid
          ? "border-destructive focus-visible:ring-destructive focus-visible:border-destructive"
          : "border-input hover:border-border focus-visible:border-ring focus-visible:ring-ring",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Input.displayName = "Input"

export { Input }
