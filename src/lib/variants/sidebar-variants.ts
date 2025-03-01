import { cva } from "class-variance-authority"

export const sidebarVariants = cva(
  "bg-background text-foreground",
  {
    variants: {
      position: {
        left: "left-0",
        right: "right-0",
      },
      size: {
        sm: "w-64",
        lg: "w-80",
      },
    },
    defaultVariants: {
      position: "left",
      size: "sm",
    },
  }
)

// Move any other utility functions from sidebar.tsx here
