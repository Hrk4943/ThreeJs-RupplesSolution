import React from "react";
import { motion } from "framer-motion";
import { Styles } from "../Style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      {/* Name and Description */}
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${Styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${Styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Hrithik</span>
            </h1>
            <p className={`${Styles.heroSubText} mt-2 text-white-100`}>
              I develop user interfaces <br className="sm:block hidden" />
              and web applications
            </p>
          </div>
        </div>
        {/* Computer 3D Effect */}
        <ComputersCanvas />
        {/* Scroll Option */}
        <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[32px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* the framer motion is used for creating the animation */}
            <motion.div
            //the animate defines how the animation should behave and it is applied in the y (vertical) position
              animate={{
                y: [0, 24, 0],
              }}
              //the transition props specifies the transition properties of the animation
              transition={{
                duration: 1.5,// sets the duration of each cycle of the animation
                repeat: Infinity,// animation should repeat infinitely
                repeatType: "loop",// animation should loop continuously
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      </section>
    </>
  );
};

export default Hero;
