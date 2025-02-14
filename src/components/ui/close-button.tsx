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

  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        `p-0 rounded-md w-auto h-auto hover:bg-transparent md:hover:bg-accent`
      )}
    >
      <XIcon
        size={`${getSize(size)}px`}
        color={color || "black"}
        className="m-1"
      />
    </Button>
  );
};

export { CloseButton };
