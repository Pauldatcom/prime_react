import * as React from "react"
import { cn } from "@/lib/utils"

const StatsCard = React.forwardRef(({ className, title, value, description, ...props }, ref) => (
  <div
    ref={ref}
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-white dark:bg-card p-6",
        className
      )}
      {...props}
  >
    <div className="space-y-1">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</p>
      <p className="text-2xl font-semibold text-foreground">
        {value}
      </p>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  </div>
))
StatsCard.displayName = "StatsCard"

export { StatsCard }

