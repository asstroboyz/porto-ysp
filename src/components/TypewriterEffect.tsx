import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string[];
  delay?: number;
  loop?: boolean;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  delay = 100,
  loop = true,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(delay);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = text[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
        setTypingSpeed(delay / 2); // Faster when deleting
      } else {
        setCurrentText(currentWord.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        setTypingSpeed(delay);
      }

      // Handle completion of typing a word
      if (!isDeleting && currentIndex === currentWord.length) {
        setTypingSpeed(delay * 3); // Pause at the end of the word
        setIsDeleting(true);
      } 
      // Handle completion of deleting a word
      else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % text.length);
        setTypingSpeed(delay / 2); // Quick start for the next word
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentWordIndex, delay, isDeleting, text, typingSpeed]);

  return <span className="text-blue-400">{currentText}</span>;
};