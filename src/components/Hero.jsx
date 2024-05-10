import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Section from "./Section";

const RedoAnimText = () => {
  const textIndex = useMotionValue(0);
  const texts = [
    " software developer",
    " full stack developer",
    " web developer",
    " mobile app developer"
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
  
  }, []);

  return (
    <motion.span className="inline">
      {displayText}
    </motion.span>
  );
};

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] flex justify-center" // Centering the content
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
      style={{ position: 'relative' }} // Added inline style to set position to relative
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[9rem] md:mb-25 lg:mb-[11rem]" style={{ textAlign: 'center' }}> {/* Centering the text */}
          <h1 className="h1 mb-6">Hi, I'm Christopher</h1>
          <h1 className="h1 mb-6" style={{ position: 'absolute', left: '10%', textAlign: 'left' }}> {/* Adjusted left property */}
            I'm a 
            <RedoAnimText />
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Hero;