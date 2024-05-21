"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

let interval: any;

export const FlipWords = ({
  words,
  duration = 4000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    startAnimation();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const startAnimation = () => {
    interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
  };

  const currentWord = words[currentWordIndex];

  return (
    <div className={cn("inline-block relative", className)}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentWordIndex}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
            position: "absolute",
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {currentWord.split("").map((char, index) => (
            <motion.span
              key={char + index}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
