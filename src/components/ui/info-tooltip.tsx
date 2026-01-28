import * as React from "react";
import { Popover as PopoverPrimitive } from "radix-ui";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_SIZES = {
  xs: 14,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 36,
} as const;

type IconSize = keyof typeof ICON_SIZES;

// Simple global state to track open tooltips
const openTooltips = new Set<() => void>();

export interface InfoTooltipProps {
  title: string;
  text: string;
  size?: IconSize;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "center" | "start" | "end";
  alignOffset?: number;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  title,
  text,
  size = "md",
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = -26,
}) => {
  const [open, setOpen] = React.useState(false);
  const [hoverTrigger, setHoverTrigger] = React.useState(false);
  const [hoverContent, setHoverContent] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(
    typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
  );
  const closeTimer = React.useRef<NodeJS.Timeout | null>(null);

  // Listen for touch device changes (e.g., when switching between desktop/mobile in dev tools)
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Register/unregister this tooltip's close function
  React.useEffect(() => {
    const closeFunction = () => setOpen(false);
    if (open) {
      // Only close other tooltips if this is a touch device (click interaction)
      if (isTouchDevice) {
        openTooltips.forEach((close) => close !== closeFunction && close());
      }
      // Then add this one
      openTooltips.add(closeFunction);
    } else {
      openTooltips.delete(closeFunction);
    }

    return () => {
      openTooltips.delete(closeFunction);
    };
  }, [open, isTouchDevice]);

  // Desktop: open if hovering trigger or content, close with delay if not
  React.useEffect(() => {
    if (isTouchDevice) return;
    if (hoverTrigger || hoverContent) {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
      setOpen(true);
    } else {
      closeTimer.current = setTimeout(() => setOpen(false), 120);
    }
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [hoverTrigger, hoverContent, isTouchDevice]);

  // Mobile: only toggle on click
  const triggerProps = isTouchDevice
    ? {
        onClick: (e: React.MouseEvent) => {
          e.stopPropagation();
          setOpen((v) => !v);
        },
        onTouchStart: (e: React.TouchEvent) => {
          e.stopPropagation();
        },
      }
    : {
        onMouseEnter: () => setHoverTrigger(true),
        onMouseLeave: () => setHoverTrigger(false),
      };

  return (
    <PopoverPrimitive.Root
      open={open}
      onOpenChange={(newOpen) => {
        // Only allow onOpenChange to control state on touch devices
        if (isTouchDevice) {
          setOpen(newOpen);
        }
      }}
    >
      <PopoverPrimitive.Trigger asChild>
        <div
          role="button"
          aria-label="Show info"
          onClick={(e) => {
            e.stopPropagation();
            // On desktop, prevent any click behavior - only respond to hover
            if (!isTouchDevice) {
              e.preventDefault();
            }
          }}
          className={cn(
            "flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-gray-100 focus:outline-none",
            "transition-colors duration-150 z-[1000]"
          )}
          style={{ width: ICON_SIZES[size], height: ICON_SIZES[size] }}
          {...triggerProps}
        >
          <Info width={ICON_SIZES[size]} height={ICON_SIZES[size]} />
        </div>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "z-[9999] rounded-lg border border-gray-200 bg-gray-50 text-black shadow-md p-6 text-left",
          "flex flex-col gap-2",
          "transition-all duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
          "cursor-default",
          "w-[90vw] sm:max-w-[500px]"
        )}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onClick={(e) => e.stopPropagation()}
        {...(!isTouchDevice && {
          onMouseEnter: () => setHoverContent(true),
          onMouseLeave: () => setHoverContent(false),
        })}
      >
        <div className="flex items-center gap-2 mb-2">
          <Info width={24} height={24} className="text-blue-600" />
          <span className="font-bold text-lg">{title}</span>
        </div>
        <div
          className="text-sm text-black break-words whitespace-normal [&>a]:text-blue-600 font-normal"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <PopoverPrimitive.Arrow
          className="fill-gray-200 stroke-gray-200"
          width={28}
          height={14}
        />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
};
