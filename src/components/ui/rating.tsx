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
  const [rating, setRating] = useState<number>(initialRating);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleRating = (index: number) => {
    if (rating === index) {
      setRating(0);
      onRatingChange(0);
    } else {
      setRating(index);
      onRatingChange(index);
    }
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className="cursor-pointer w-6 h-6"
          onClick={() => !disabled && handleRating(star)}
          fill={star <= rating ? "currentColor" : "none"}
          stroke="currentColor"
        />
      ))}
    </div>
  );
};

export { Rating };
