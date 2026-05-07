import * as React from "react"

import { cn } from "../../lib/utils";

// Base wrapper of the card pattern.
// Uses forwardRef so parent code can access the real DOM node.
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    // Forwarded ref enables focus/measure/scroll integrations.
    ref={ref}
    className={cn(
      // Default visual style for every card instance.
      "rounded-xl border bg-card text-card-foreground shadow",
      // Consumers can extend or override styles per usage.
      className
    )}
    // Forward all native div props (id, role, aria-*, onClick, ...).
    {...props}
  />
))
// Improves DevTools component labels.
Card.displayName = "Card"

// Structured top section for heading and supporting text.
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Vertical stack with internal spacing and card padding.
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

// Main heading element inside the card header.
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Tight heading rhythm for compact card layouts.
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

// Secondary text below title (subtitle/explanation).
const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Muted foreground keeps hierarchy between title and description.
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

// Main body area for arbitrary card content.
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  // Top padding removed to align cleanly after CardHeader spacing.
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

// Bottom action area (buttons, links, metadata).
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Horizontal alignment for common action-row patterns.
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Export all building blocks so cards can be composed per use case.
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
