import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export interface FeatureButtonProps {
  text: string;
  icon?: ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive";
  onClick?: () => void;
  className?: string;
}

const FeatureButton: React.FC<FeatureButtonProps> = ({
  text,
  icon,
  onClick,
  className,
  variant = "default",
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={`w-full flex items-center justify-between rounded-full py-7 px-4 ${
        className || ""
      }`}
    >
      <div className="w-6 mx-2">{icon && icon}</div>
      <span className="text-lg font-bold">{text}</span>
      <div className="w-6 h-6 mr-2"></div>
    </Button>
  );
};

export { FeatureButton };
