import * as React from "react";
import { motion, AnimatePresence, type AnimatePresenceProps } from "framer-motion";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Wrapper component to fix AnimatePresence type compatibility with React 19
const SafeAnimatePresence: React.FC<React.PropsWithChildren<AnimatePresenceProps>> = (props) => {
  return (
    <AnimatePresence {...props}>
      {props.children}
    </AnimatePresence>
  );
};

interface InfiniteLikesProps extends React.HTMLAttributes<HTMLButtonElement> {
  onLike?: (count: number) => void;
  initialCount?: number;
}

const InfiniteLikes = React.forwardRef<HTMLButtonElement, InfiniteLikesProps>(
  ({ className, onLike, initialCount = 0, ...props }, ref) => {
    const [isActive, setIsActive] = React.useState(false);
    const [count, setCount] = React.useState(initialCount);
    const [clickCount, setClickCount] = React.useState(0);
    const timeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined);

    const handleClick = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setCount(count + 1);
      setIsActive(true);
      setClickCount(c => c + 1);
      onLike?.(count + 1);

      timeoutRef.current = setTimeout(() => {
        setIsActive(false);
      }, 1000);
    };

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    return (
      <div className="relative">
        {/* Expanding circle effect - moved outside button */}
        <SafeAnimatePresence mode="wait">
          {clickCount > 0 && (
            <motion.div
              key={clickCount}
              initial={{ scale: 0.2, opacity: 1 }}
              animate={{
                scale: 5,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="absolute inset-0 -z-10 bg-accent rounded-full"
            />
          )}
        </SafeAnimatePresence>

        <Button
          ref={ref}
          variant="ghost"
          className={cn(
            "relative h-12 w-12 bg-secondary rounded-lg",
            className
          )}
          onClick={handleClick}
          {...props}
        >
          {/* Count that slides up */}
          <SafeAnimatePresence mode="wait">
            {isActive && (
              <motion.span
                initial={{ y: 0, opacity: 1 }}
                animate={{ 
                  y: -40, 
                  opacity: 1,
                  transition: {
                    y: { duration: 0.3 },
                    opacity: { duration: 0.3 }
                  }
                }}
                exit={{ 
                  y: 20, 
                  opacity: 0,
                  transition: {
                    delay: 0.5,
                    duration: 0.3
                  }
                }}
                className="absolute inset-x-0 -z-10 text-xs font-medium"
              >
                <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full text-[10px]">
                  {count.toLocaleString()}
                </span>
              </motion.span>
            )}
          </SafeAnimatePresence>

          {/* Base heart that scales */}
          <motion.div
            animate={{
              scale: isActive ? [1, 1.8, 1] : 1,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <Heart 
              className={cn(
                "h-5 w-5",
                count > 0 ? "fill-primary text-primary" : "text-primary"
              )} 
              fill={count > 0 ? "currentColor" : "none"}
            />
          </motion.div>
        </Button>
      </div>
    );
  }
);

InfiniteLikes.displayName = "InfiniteLikes";

export { InfiniteLikes };
