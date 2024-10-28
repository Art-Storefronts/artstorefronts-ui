import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  rating?: number;
  disabled?: boolean;
  onRatingChange: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  rating: initialRating = 0,
  disabled = false,
  onRatingChange,
}) => {
  // Convert from 0-10 scale to 0-5 scale for internal use
  const [rating, setRating] = useState<number>(initialRating / 2);

  useEffect(() => {
    setRating(initialRating / 2);
  }, [initialRating]);

  const handleRating = (position: number) => {
    if (disabled) return;

    let newRating: number;
    const currentFullStars = Math.floor(rating);
    const currentHalfStars = rating % 1 > 0;
    
    if (position === currentFullStars && !currentHalfStars) {
      // First click on a star - make it half
      newRating = position - 0.5;
    } else if (position === Math.ceil(rating)) {
      // Second click - make it full
      newRating = position;
    } else {
      // Third click or click on different star - reset or set new value
      newRating = position === Math.floor(rating) ? 0 : position - 0.5;
    }

    setRating(newRating);
    onRatingChange(newRating * 2); // Convert back to 0-10 scale
  };

  const renderStar = (position: number) => {
    const isHalfFilled = rating >= position - 0.5 && rating < position;
    const isFullFilled = rating >= position;

    return (
      <div
        key={position}
        className="relative cursor-pointer"
        onClick={() => handleRating(position)}
      >
        {/* Background star */}
        <Star
          className="w-6 h-6"
          stroke="currentColor"
          fill="none"
        />
        
        {/* Half-filled star */}
        {isHalfFilled && (
          <div className="absolute inset-0 overflow-hidden w-[50%]">
            <Star
              className="w-6 h-6"
              stroke="none"
              fill="currentColor"
            />
          </div>
        )}
        
        {/* Fully filled star */}
        {isFullFilled && (
          <Star
            className="absolute inset-0 w-6 h-6"
            stroke="none"
            fill="currentColor"
          />
        )}
      </div>
    );
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((position) => renderStar(position))}
    </div>
  );
};

export { Rating };
