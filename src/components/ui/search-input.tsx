import React, { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";

interface SearchInputProps {
  value: string;
  onSubmit: (value: string) => void;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onSubmit,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(inputValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleChange}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="hidden">
          Search
        </button>
      </div>
    </form>
  );
};

export { SearchInput };
