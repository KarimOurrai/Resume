import * as React from "react"
import { cn } from "@/lib/utils"
import { sidebarVariants } from "@/lib/variants"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof sidebarVariants>
>(({ className, position, size, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(sidebarVariants({ position, size }), className)}
    {...props}
  />
))

Sidebar.displayName = "Sidebar"

export { Sidebar }
