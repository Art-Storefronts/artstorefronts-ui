"use client";

import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";

interface MultiSelectPillsProps {
  options: string[];
  selectedOptions: string[];
  maxSelected: number;
  onChange: (updatedOptions: string[]) => void;
}

export const MultiSelectPills: React.FC<MultiSelectPillsProps> = ({
  options,
  selectedOptions,
  maxSelected,
  onChange,
}) => {
  const handleOptionClick = useCallback(
    (option: string) => {
      let updatedOptions: string[];

      if (selectedOptions.includes(option)) {
        updatedOptions = selectedOptions.filter((t) => t !== option);
      } else if (selectedOptions.length < maxSelected) {
        updatedOptions = [...selectedOptions, option];
      } else {
        return;
      }

      onChange(updatedOptions);
    },
    [selectedOptions, maxSelected, onChange]
  );

  const getOptionVariant = useCallback(
    (option: string) =>
      selectedOptions.includes(option) ? "default" : "secondary",
    [selectedOptions]
  );

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <Button
          suppressHydrationWarning
          key={option}
          variant={getOptionVariant(option)}
          className="rounded-full text-xs h-8"
          onClick={(e) => {
            e.preventDefault();
            handleOptionClick(option);
          }}
          disabled={
            !selectedOptions.includes(option) &&
            selectedOptions.length >= maxSelected
          }
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
