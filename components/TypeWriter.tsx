import { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypeWriter({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = '', 
  onComplete 
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Animation complete, hide cursor after a brief moment
      const cursorTimer = setTimeout(() => {
        setShowCursor(false);
        onComplete?.();
      }, 1000);

      return () => clearTimeout(cursorTimer);
    }
  }, [currentIndex, text, speed, hasStarted, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, [showCursor]);

  return (
    <span className={`font-gluten ${className}`}>
      {displayText}
      {currentIndex < text.length && (
        <span className={`inline-block w-0.5 h-6 bg-current ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
          |
        </span>
      )}
    </span>
  );
} 