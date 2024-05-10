import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Section from "./Section";
import { curve } from "../assets";
import { robot } from "../assets";
import { gradientHero } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";

const RedoAnimText = () => {
  const textIndex = useMotionValue(0);
  const texts = [
    "software developer",
    "full stack developer",
    "web app developer",
    "mobile app developer",
    "cat enthusiast (and dogs)",
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
      },
    });
  }, []);

  return <motion.span className="inline">{displayText}</motion.span>;
};

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] flex justify-center"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
      style={{ position: "relative" }}
    >
      <div className="container relative" ref={parallaxRef}>
        <div
          className="relative z-1 max-w-[73rem] mx-auto text-center mb-[14rem] md:mb-25 lg:mb-[13rem]"
          style={{ textAlign: "center" }}
        >
          {" "}
          {/* Centering the text */}
          <h1 className="h1 mb-6">
            Hi, I'm{" "}
            <span className="inline-block relative">
              Christopher{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <h1
            className="h1 mb-6"
            style={{ position: "absolute", left: "17%", textAlign: "left" }}
          >
            {" "}
            {}
            I'm a <RedoAnimText></RedoAnimText>
          </h1>
        </div>
        <div className="relative max-w-[23rem] h-[60rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] flex justify-center items-center">
                <img
                  src={robot}
                  className="w-full"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[18rem] w-[15rem] xl:flex"
                    title="Badminton"
                    imageName="image-1.png"
                  />

                  <Notification
                    className="hidden absolute -left-[5.5rem] bottom-[7.5rem] w-[15rem] xl:flex"
                    title="Chess"
                    imageName="image-2.png"
                  />

                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[2rem] w-[15rem] xl:flex"
                    title="Gym"
                    imageName="image-3.png"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[65%]">
            <img
              src={gradientHero}
              className="w-full"
              width={1440}
              height={1880}
              alt="hero"
            ></img>
          </div>

          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
