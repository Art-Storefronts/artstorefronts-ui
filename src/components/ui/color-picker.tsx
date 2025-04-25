"use client";

import * as React from "react";
import { HexColorPicker } from "react-colorful";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

export interface ColorPickerProps
  extends Omit<ButtonProps, keyof BaseColorPickerProps> {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  showHexInput?: boolean;
  icon?: React.ReactNode;
}

// Separate the base props to avoid circular reference
interface BaseColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

// Function to calculate relative luminance
const getLuminance = (hexColor: string): number => {
  // Remove # if present
  const hex = hexColor.replace("#", "");

  // Convert hex to rgb
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  // Calculate luminance using the relative luminance formula
  // See: https://www.w3.org/TR/WCAG20/#relativeluminancedef
  const rgb = [r, g, b].map((val) => {
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
};

const ColorPicker = React.forwardRef<HTMLButtonElement, ColorPickerProps>(
  (
    {
      disabled,
      value,
      onChange,
      onBlur,
      name,
      className,
      showHexInput = true,
      icon,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);

    const parsedValue = React.useMemo(() => {
      return value || "#FFFFFF";
    }, [value]);

    // Calculate if we should use dark or light text
    const iconColor = React.useMemo(() => {
      const luminance = getLuminance(parsedValue);
      // Use white text for darker backgrounds (luminance < 0.5)
      return luminance < 0.5 ? "white" : "black";
    }, [parsedValue]);

    return (
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild disabled={disabled} onBlur={onBlur}>
          <Button
            {...props}
            ref={ref}
            className={cn("block", className)}
            name={name}
            onClick={() => {
              setOpen(true);
            }}
            size="icon"
            style={{
              backgroundColor: parsedValue,
            }}
            variant="outline"
          >
            {icon ? (
              <div
                className="flex items-center justify-center w-full h-full"
                style={{ color: iconColor }}
              >
                {icon}
              </div>
            ) : (
              <div />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full" side="top">
          <HexColorPicker color={parsedValue} onChange={onChange} />
          {showHexInput && (
            <Input
              maxLength={7}
              onChange={(e) => {
                onChange(e?.currentTarget?.value);
              }}
              value={parsedValue}
              className="mt-2 h-8 px-2"
            />
          )}
        </PopoverContent>
      </Popover>
    );
  }
);
ColorPicker.displayName = "ColorPicker";

export { ColorPicker };
