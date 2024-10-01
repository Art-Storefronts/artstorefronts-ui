import React, { useState, forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TagInputProps {
  selectedTags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

const TagInput = forwardRef<HTMLDivElement, TagInputProps>(
  ({ selectedTags, onAddTag, onRemoveTag }, ref) => {
    const [inputValue, setInputValue] = useState("");

    const handleAddTag = () => {
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
          <Button onClick={handleAddTag}>Add</Button>
        </div>
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
