"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

interface HighlightProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface HighlightTriggerProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {}

interface HighlightContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  children: React.ReactNode;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  arrow?: boolean;
  bounce?: boolean;
  variant?:
    | "primary"
    | "info"
    | "success"
    | "danger"
    | "warning"
    | "secondary"
    | "focus";
}

const Highlight = PopoverPrimitive.Root;
const HighlightTrigger = PopoverPrimitive.Trigger;

const variantStyles = {
  primary: "border-black bg-black text-white",
  info: "border-blue-600 bg-blue-600 text-white",
  success: "border-green-600 bg-green-600 text-white",
  danger: "border-red-600 bg-red-600 text-white",
  warning: "border-yellow-500 bg-yellow-500 text-white",
  secondary: "border-gray-200 bg-white text-black",
  focus: "border-indigo-600 bg-indigo-600 text-white",
} as const;

const arrowStyles = {
  primary: "fill-black stroke-black",
  info: "fill-blue-600 stroke-blue-600",
  success: "fill-green-600 stroke-green-600",
  danger: "fill-red-600 stroke-red-600",
  warning: "fill-yellow-500 stroke-yellow-500",
  secondary: "fill-white stroke-gray-200",
  focus: "fill-indigo-600 stroke-indigo-600",
} as const;

const HighlightContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  HighlightContentProps
>(
  (
    {
      className,
      side = "top",
      sideOffset = 4,
      arrow = true,
      bounce = false,
      variant = "primary",
      children,
      ...props
    },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        side={side}
        sideOffset={sideOffset}
        align="center"
        onPointerDownOutside={(e) => e.preventDefault()}
        hideWhenDetached
        className={cn(
          "z-50 rounded-md border px-3 py-1.5 text-sm shadow-md max-w-[400px] text-center",
          variantStyles[variant],
          bounce && side === "left" && "animate-bounce-right-to-left",
          bounce && side === "right" && "animate-bounce-left-to-right",
          bounce && (side === "top" || side === "bottom") && "animate-bounce",
          className
        )}
        {...props}
      >
        {children}
        {arrow && <PopoverPrimitive.Arrow className={arrowStyles[variant]} />}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
);
HighlightContent.displayName = "HighlightContent";

export { Highlight, HighlightTrigger, HighlightContent };
