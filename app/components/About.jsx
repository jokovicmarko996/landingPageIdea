"use client";
import React from "react";
import { motion } from "framer-motion";
{
  /* <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
></motion.div>; */
}

import about from "../../public/about/img.png";
import Image from "next/image";
import FramerMotionAnimation from "../lib/FramerMotionAnimation";

const About = () => {
  return (
    <div>
      {/* <!-- about --> */}

      <section className="about mt-[80px] xl:mt-[200px] relative z-20">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
            {/* // <!-- text --> */}
            <FramerMotionAnimation x={-50} delay={0.8}>
              <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8">
                <h2 class="h2">
                  We Create The Art Of Stylish Living Stylishly
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the of readable content of a page when lookings at its
                  layouts the points of using that it has a more-or-less normal.
                </p>
                {/* phone  */}
                <div className="flex items-center justify-center xl:justify-start gap-4">
                  <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                    <i className="ri-phone-fill text-accent text-4xl"></i>
                  </div>

                  <div className="text-left">
                    <div className="text-2xl font-bold">0987 654 321</div>
                    <div>Call Us Anytime</div>
                  </div>
                </div>

                {/* <!-- btn--> */}
                <button className="btn btn-primary">
                  Get free estimation
                  <i class="ri-arrow-right-line text-accent"></i>
                </button>
              </div>
            </FramerMotionAnimation>

            {/* <!-- img --> */}
            <FramerMotionAnimation x={50} delay={0.8}>
              <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-none xl:mx-0">
                <Image src={about} alt="About Image" width={653} height={700} />
              </div>
            </FramerMotionAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
