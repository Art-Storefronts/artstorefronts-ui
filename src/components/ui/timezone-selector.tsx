import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";

export const TIMEZONES = [
  // North America
  {
    value: "America/New_York",
    label: "Eastern Time (ET)",
    offset: "UTC-05:00",
  },
  { value: "America/Chicago", label: "Central Time (CT)", offset: "UTC-06:00" },
  { value: "America/Denver", label: "Mountain Time (MT)", offset: "UTC-07:00" },
  {
    value: "America/Los_Angeles",
    label: "Pacific Time (PT)",
    offset: "UTC-08:00",
  },
  {
    value: "America/Anchorage",
    label: "Alaska Time (AKT)",
    offset: "UTC-09:00",
  },
  {
    value: "America/Adak",
    label: "Hawaii-Aleutian Time (HST)",
    offset: "UTC-10:00",
  },
  { value: "Pacific/Honolulu", label: "Hawaii Time (HT)", offset: "UTC-10:00" },
  {
    value: "America/Phoenix",
    label: "Arizona Time (MST)",
    offset: "UTC-07:00",
  },
  {
    value: "America/Toronto",
    label: "Eastern Time - Toronto",
    offset: "UTC-05:00",
  },
  {
    value: "America/Vancouver",
    label: "Pacific Time - Vancouver",
    offset: "UTC-08:00",
  },
  {
    value: "America/Mexico_City",
    label: "Mexico City Time",
    offset: "UTC-06:00",
  },

  // South America
  { value: "America/Sao_Paulo", label: "São Paulo Time", offset: "UTC-03:00" },
  {
    value: "America/Argentina/Buenos_Aires",
    label: "Buenos Aires Time",
    offset: "UTC-03:00",
  },
  { value: "America/Santiago", label: "Santiago Time", offset: "UTC-04:00" },
  { value: "America/Bogota", label: "Colombia Time", offset: "UTC-05:00" },

  // Europe
  {
    value: "Europe/London",
    label: "Greenwich Mean Time (GMT)",
    offset: "UTC+00:00",
  },
  { value: "Europe/Dublin", label: "Irish Standard Time", offset: "UTC+00:00" },
  {
    value: "Europe/Lisbon",
    label: "Western European Time",
    offset: "UTC+00:00",
  },
  {
    value: "Europe/Paris",
    label: "Central European Time (CET)",
    offset: "UTC+01:00",
  },
  { value: "Europe/Berlin", label: "Berlin Time", offset: "UTC+01:00" },
  { value: "Europe/Madrid", label: "Madrid Time", offset: "UTC+01:00" },
  { value: "Europe/Rome", label: "Rome Time", offset: "UTC+01:00" },
  { value: "Europe/Amsterdam", label: "Amsterdam Time", offset: "UTC+01:00" },
  {
    value: "Europe/Athens",
    label: "Eastern European Time (EET)",
    offset: "UTC+02:00",
  },
  { value: "Europe/Helsinki", label: "Helsinki Time", offset: "UTC+02:00" },
  { value: "Europe/Moscow", label: "Moscow Time", offset: "UTC+03:00" },

  // Asia
  { value: "Asia/Istanbul", label: "Turkey Time", offset: "UTC+03:00" },
  {
    value: "Asia/Dubai",
    label: "Gulf Standard Time (GST)",
    offset: "UTC+04:00",
  },
  {
    value: "Asia/Kolkata",
    label: "India Standard Time (IST)",
    offset: "UTC+05:30",
  },
  { value: "Asia/Kathmandu", label: "Nepal Time", offset: "UTC+05:45" },
  { value: "Asia/Dhaka", label: "Bangladesh Time", offset: "UTC+06:00" },
  { value: "Asia/Bangkok", label: "Indochina Time", offset: "UTC+07:00" },
  { value: "Asia/Singapore", label: "Singapore Time", offset: "UTC+08:00" },
  {
    value: "Asia/Shanghai",
    label: "China Standard Time (CST)",
    offset: "UTC+08:00",
  },
  { value: "Asia/Seoul", label: "Korea Standard Time", offset: "UTC+09:00" },
  {
    value: "Asia/Tokyo",
    label: "Japan Standard Time (JST)",
    offset: "UTC+09:00",
  },

  // Australia & Pacific
  {
    value: "Australia/Perth",
    label: "Western Australia Time",
    offset: "UTC+08:00",
  },
  {
    value: "Australia/Adelaide",
    label: "Central Australia Time",
    offset: "UTC+09:30",
  },
  {
    value: "Australia/Brisbane",
    label: "Eastern Australia Time - Brisbane",
    offset: "UTC+10:00",
  },
  {
    value: "Australia/Sydney",
    label: "Eastern Australia Time - Sydney",
    offset: "UTC+10:00",
  },
  {
    value: "Australia/Melbourne",
    label: "Eastern Australia Time - Melbourne",
    offset: "UTC+10:00",
  },
  {
    value: "Pacific/Auckland",
    label: "New Zealand Standard Time (NZST)",
    offset: "UTC+12:00",
  },
  { value: "Pacific/Fiji", label: "Fiji Time", offset: "UTC+12:00" },

  // UTC
  {
    value: "Etc/UTC",
    label: "Coordinated Universal Time (UTC)",
    offset: "UTC+00:00",
  },
];

export interface TimezoneInfo {
  value: string;
  label: string;
  offset: string;
}

export interface TimezoneSelectorProps {
  value: string;
  onValueChange: (timezone: string) => void;
  className?: string;
  placeholder?: string;
}

/**
 * A searchable timezone selector component
 */
export function TimezoneSelector({
  value,
  onValueChange,
  className = "",
  placeholder = "Search timezones...",
}: TimezoneSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Find the timezone info for display
  const selectedTimezoneInfo = TIMEZONES.find((tz) => tz.value === value);

  // Filter timezones based on search query
  const filteredTimezones = searchQuery
    ? TIMEZONES.filter(
        (tz) =>
          tz.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tz.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tz.offset.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : TIMEZONES;

  // Reset focused index when filtered results change
  useEffect(() => {
    setFocusedIndex(filteredTimezones.length > 0 ? 0 : -1);
    // Initialize refs array with the correct length
    optionRefs.current = Array(filteredTimezones.length).fill(null);
  }, [filteredTimezones.length, searchQuery]);

  // Set initial input value - only show the label without the offset
  useEffect(() => {
    if (selectedTimezoneInfo) {
      setInputValue(selectedTimezoneInfo.label);
    }
  }, [value, selectedTimezoneInfo]);

  // Handle timezone change
  const handleTimezoneChange = (timezone: string) => {
    onValueChange(timezone);

    // Find the selected timezone info
    const tzInfo = TIMEZONES.find((tz) => tz.value === timezone);
    if (tzInfo) {
      setInputValue(tzInfo.label);
    }

    // Close the dropdown
    setIsOpen(false);
    setSearchQuery("");
  };

  // Handle popover state changes
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setSearchQuery("");
      // Clear the input for searching
      setInputValue("");
      // Focus the input after a short delay to ensure the popover is fully open
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 10);
      // Initialize the focused index
      setFocusedIndex(0);
    } else {
      // Reset to display the selected timezone when closing
      if (selectedTimezoneInfo) {
        setInputValue(selectedTimezoneInfo.label);
      }
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchQuery(value);

    // Open the popover if it's not already open
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
        setIsOpen(true);
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prevIndex) => {
          const newIndex = Math.min(
            prevIndex + 1,
            filteredTimezones.length - 1
          );
          // Scroll the focused item into view
          setTimeout(() => {
            optionRefs.current[newIndex]?.scrollIntoView({
              block: "nearest",
              behavior: "smooth",
            });
          }, 0);
          return newIndex;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prevIndex) => {
          const newIndex = Math.max(prevIndex - 1, 0);
          // Scroll the focused item into view
          setTimeout(() => {
            optionRefs.current[newIndex]?.scrollIntoView({
              block: "nearest",
              behavior: "smooth",
            });
          }, 0);
          return newIndex;
        });
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < filteredTimezones.length) {
          handleTimezoneChange(filteredTimezones[focusedIndex].value);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
    }
  };

  // Render a single timezone option
  const renderTimezoneOption = (timezone: TimezoneInfo, index: number) => {
    let bgClass = "";

    if (focusedIndex === index) {
      bgClass = "bg-gray-200";
    } else if (value === timezone.value) {
      bgClass = "bg-gray-100";
    }

    return (
      <Button
        key={timezone.value}
        ref={(el) => (optionRefs.current[index] = el)}
        variant="ghost"
        className={`w-full justify-start text-left mb-1 ${bgClass} hover:bg-gray-200`}
        onClick={() => handleTimezoneChange(timezone.value)}
        onMouseEnter={() => setFocusedIndex(index)}
        tabIndex={-1}
      >
        <div className="flex flex-col w-full">
          <span>{timezone.label}</span>
          <span className="text-xs text-gray-500">{timezone.offset}</span>
        </div>
      </Button>
    );
  };

  return (
    <div className={className}>
      <Popover open={isOpen} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Input
              ref={inputRef}
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="pr-10"
            />
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-full p-0 overflow-hidden"
          style={{ width: "var(--radix-popover-trigger-width)" }}
        >
          <ScrollArea className="h-[300px]">
            <div className="p-2 pb-4">
              {filteredTimezones.length === 0 ? (
                <div className="text-center py-6 text-gray-500">
                  No timezones found
                </div>
              ) : (
                filteredTimezones.map((timezone, index) =>
                  renderTimezoneOption(timezone, index)
                )
              )}
              <div className="h-2"></div>
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
}
