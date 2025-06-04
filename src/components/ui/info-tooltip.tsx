import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
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

export interface InfoTooltipProps {
  title: string;
  text: string;
  size?: IconSize;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  title,
  text,
  size = "md",
  side = "top",
  sideOffset = 4,
}) => {
  const [open, setOpen] = React.useState(false);
  const [hoverTrigger, setHoverTrigger] = React.useState(false);
  const [hoverContent, setHoverContent] = React.useState(false);
  const closeTimer = React.useRef<NodeJS.Timeout | null>(null);

  // Open if hovering either
  React.useEffect(() => {
    if (hoverTrigger || hoverContent) {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
      setOpen(true);
    } else {
      // Delay closing to allow moving between trigger/content
      closeTimer.current = setTimeout(() => setOpen(false), 120);
    }
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [hoverTrigger, hoverContent]);

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          type="button"
          onMouseEnter={() => setHoverTrigger(true)}
          onMouseLeave={() => setHoverTrigger(false)}
          onClick={() => setOpen((v) => !v)}
          onTouchStart={() => setOpen((v) => !v)}
          aria-label="Show info"
          className={cn(
            "flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-gray-100 focus:outline-none",
            "transition-colors duration-150"
          )}
          style={{ width: ICON_SIZES[size], height: ICON_SIZES[size] }}
        >
          <Info width={ICON_SIZES[size]} height={ICON_SIZES[size]} />
        </button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content
        side={side}
        sideOffset={sideOffset}
        align="center"
        className={cn(
          "z-50 rounded-lg border border-gray-200 bg-white text-black shadow-md p-6 max-w-[500px] text-left",
          "flex flex-col gap-2",
          "transition-all duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
        )}
        onMouseEnter={() => setHoverContent(true)}
        onMouseLeave={() => setHoverContent(false)}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex items-center gap-2 mb-2">
          <Info width={24} height={24} className="text-blue-600" />
          <span className="font-bold text-lg">{title}</span>
        </div>
        <div
          className="text-sm text-black"
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
