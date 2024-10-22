import React from "react";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

export interface CloseButtonProps {
  size: "sm" | "md" | "lg";
  onClick?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ size, onClick }) => {
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
      className={`p-0 rounded-none w-auto h-auto`}
    >
      <XIcon size={`${getSize(size)}px`} color="black" className="m-1" />
    </Button>
  );
};

export { CloseButton };
