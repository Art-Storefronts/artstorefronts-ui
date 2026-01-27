import React from "react";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CloseButtonProps {
  size: "sm" | "md" | "lg";
  onClick?: () => void;
  color?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({ size, onClick, color }) => {
  const getSize = (size: CloseButtonProps["size"]) => {
    switch (size) {
      case "sm":
        return 16;
      case "md":
        return 24;
      case "lg":
        return 40;
      default:
        return 24;
    }
  };

  const getButtonSize = (size: CloseButtonProps["size"]) => {
    switch (size) {
      case "sm":
        return "h-6 w-6"; // 24px button, 16px icon
      case "md":
        return "h-8 w-8"; // 32px button, 24px icon
      case "lg":
        return "h-12 w-12"; // 48px button, 40px icon
      default:
        return "h-8 w-8";
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        getButtonSize(size)
      )}
    >
      <XIcon
        size={getSize(size)}
        color={color || "black"}
      />
    </button>
  );
};

export { CloseButton };
