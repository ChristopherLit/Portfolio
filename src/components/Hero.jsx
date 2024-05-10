import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Section from "./Section";
import { curve } from "../assets";

const RedoAnimText = () => {
  const textIndex = useMotionValue(0);
  const texts = [
    " software developer",
    " full stack developer",
    " web app developer",
    " mobile app developer",
    " cat enthusiast (and dogs)",
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
        className="pt-[12rem] -mt-[5.25rem] flex justify-center"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
        style={{ position: 'relative' }}
      >
        <div className="container relative">
          <div className="relative z-1 max-w-[70rem] mx-auto text-center mb-[14rem] md:mb-25 lg:mb-[13rem]" style={{ textAlign: 'center' }}> {/* Centering the text */}
            <h1 className="h1 mb-6">Hi, I'm Christopher</h1>
            <h1 className="h1 mb-6" style={{ position: 'absolute', left: '10%', textAlign: 'left' }}> {}
              I'm a 
              <RedoAnimText>
                <img src={curve} alt="Curve" />
              </RedoAnimText>
            </h1>
          </div>
        </div>
      </Section>
    );
  };
  
  export default Hero;
  