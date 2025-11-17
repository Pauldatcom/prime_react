import * as React from "react"
import { cn } from "@/lib/utils"

const NumberDisplay = React.forwardRef(({ 
  className, 
  number, 
  label, 
  isPrime, 
  isLoading = false,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-white dark:bg-card p-6",
        className
      )}
      {...props}
    >
      <div className="relative space-y-2">
        {label && (
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </div>
        )}
        
        {isLoading ? (
          <div className="flex items-center justify-center py-6">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
          </div>
        ) : number !== null && number !== undefined ? (
          <div className="space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="text-4xl font-semibold font-mono text-foreground">
              {number.toLocaleString()}
            </div>
            {isPrime !== null && (
              <div className={cn(
                "text-sm transition-colors duration-200",
                isPrime 
                  ? "text-primary" 
                  : "text-muted-foreground"
              )}>
                {isPrime ? "Prime number" : "Not a prime number"}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-6 text-muted-foreground text-sm">
            No number to display
          </div>
        )}
      </div>
    </div>
  )
})
NumberDisplay.displayName = "NumberDisplay"

export { NumberDisplay }

