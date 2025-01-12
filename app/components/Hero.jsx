"use client";
import React from "react";
import { motion } from "framer-motion";
import FramerMotionAnimation from "../lib/FramerMotionAnimation";
{
  /* <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
></motion.div>; */
}

const Hero = () => {
  return (
    <section className="hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-fixed bg-no-repeat xl:rounded-bl-[290px] relative z-20">
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
        {/* text  */}
        <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
          <FramerMotionAnimation y={50}>
            <h1 className="h1 mb-8">Let your home be unique</h1>
            <p className="mb-8">
              There are many variations of the passages of lorem Ipsum from
              available, variations of the passages.
            </p>
            <button className="btn btn-primary mx-auto xl:mx-0">
              Get free estimation
              <i className="ri-arrow-right-line text-accent"></i>
            </button>
          </FramerMotionAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
