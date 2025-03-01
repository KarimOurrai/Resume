import React, { useEffect, useState, useCallback } from 'react';
import { cn } from "../lib/utils";
import { useTranslation } from 'react-i18next';

interface AnimatedNameProps {
  text: string;
  className?: string;
}

const isArabicChar = (char: string) => {
  return /[\u0600-\u06FF]/.test(char);
};

const shouldAddTatweel = (char: string, nextChar: string) => {
  // Letters that shouldn't have Tatweel after them
  const nonConnectingLetters = ['ا', 'د', 'ذ', 'ر', 'ز', 'و', 'ء', 'آ'];
  
  // Don't add Tatweel if:
  // 1. Current letter is non-connecting
  // 2. There's no next letter
  // 3. Next character is a space
  return !nonConnectingLetters.includes(char) && 
         nextChar && 
         nextChar !== ' ';
};

const splitArabicText = (text: string) => {
  if (!isArabicChar(text)) return text.split(/(?=[\s\S])/u);
  
  return text.split(' ').flatMap((word, wordIndex, wordsArr) => {
    const chars = [...word];
    const units = chars.map((char, i, arr) => {
      const nextChar = arr[i + 1];
      return shouldAddTatweel(char, nextChar) ? `${char}\u0640` : char;
    });
    
    return wordIndex < wordsArr.length - 1 ? [...units, ' '] : units;
  });
};

const AnimatedName: React.FC<AnimatedNameProps> = ({ text, className }) => {
  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const isArabic = i18n.language === 'ar';
  const letters = splitArabicText(text);

  const startAnimation = useCallback(() => {
    if (!isHovering) {
      setCurrentIndex(prev => (prev + 1) % letters.length);
    }
  }, [letters.length, isHovering]);

  useEffect(() => {
    const interval = setInterval(startAnimation, 800); // Slower interval for smoother feel
    return () => clearInterval(interval);
  }, [startAnimation]);

  return (
    <bdi className={cn(
      className, 
      "inline-flex",
      isArabic ? "flex-row-reverse" : "flex-row"
    )}>
      {letters.map((unit, index) => (
        <bdi
          key={index}
          className={cn(
            "inline-block transition-all duration-300 ease-in-out",
            unit === ' ' ? 'mx-2' : '',
            ((index === currentIndex && !isHovering) || index === hoveredIndex)
              ? "text-pink-500 animate-letter-bounce"
              : "hover:text-pink-500/70"
          )}
          onMouseEnter={() => {
            setHoveredIndex(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
            setIsHovering(false);
          }}
          style={{
            animationDuration: '0.8s',
          }}
        >
          {unit}
        </bdi>
      ))}
    </bdi>
  );
};

export default AnimatedName;
