import React, { useState, forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TagInputProps {
  selectedTags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
  error?: React.ReactNode | string;
}

const TagInput = forwardRef<HTMLDivElement, TagInputProps>(
  ({ selectedTags, onAddTag, onRemoveTag, error }, ref) => {
    const [inputValue, setInputValue] = useState("");

    const handleAddTag = (e?: React.MouseEvent<HTMLButtonElement>) => {
      e?.preventDefault();
      if (inputValue.trim() !== "") {
        onAddTag(inputValue.trim().toLowerCase());
        setInputValue("");
      }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        handleAddTag();
      }
    };

    return (
      <div ref={ref}>
        <div className="flex items-center mt-2">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter a tag name"
            className="flex-1 mr-2"
          />
          <Button onClick={(e) => handleAddTag(e)}>Add</Button>
        </div>
        {error &&
          (typeof error === "string" ? (
            <div className="text-xs text-destructive mt-2">{error}</div>
          ) : (
            error
          ))}
        <div className="flex flex-wrap mt-4">
          {selectedTags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-black text-white text-sm rounded-full px-3 py-2 mt-1 mr-1 mb-1"
            >
              {tag}
              <span
                className="ml-2 cursor-pointer"
                onClick={() => onRemoveTag(tag)}
              >
                ✕
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

TagInput.displayName = "TagInput";

export { TagInput };
