// import React from "react";
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

const Steps = () => {
  return (
    <>
      {/* <!-- steps --> */}
      <section className="steps mt-[80px] xl:mt-[260px] relative z-20">
        <div className="container mx-auto">
          {/* <!-- grid items --> */}
          <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
            {/* <!-- step 1-> */}

            <FramerMotionAnimation y={50} delay={0.5}>
              <div className="steps__step text-center">
                <div className="mb-4">
                  <i className="ri-compasses-2-line text-5xl text-accent"></i>
                </div>
                <h3 className="h3 mb-5">Project Planning</h3>
                <p className="mb-5 max-w-md mx-auto">
                  There are many variations of the passages of Lorem Ipsum from
                  available, majority.
                </p>

                <a href="#" className="font-medium flex justify-center gap-2">
                  Read more
                  <i className="ri-arrow-right-line text-accent/"></i>
                </a>
              </div>
            </FramerMotionAnimation>

            {/* <!-- step 2-> */}
            <FramerMotionAnimation y={50} delay={0.6}>
              <div className="steps__step text-center">
                <div className="mb-4">
                  <i className="ri-magic-line text-5xl text-accent"></i>
                </div>
                <h3 className="h3 mb-5">Gaining Materials</h3>
                <p className="mb-5 max-w-md mx-auto">
                  There are many variations of the passages of Lorem Ipsum from
                  available, majority.
                </p>

                <a href="#" className="font-medium flex justify-center gap-2">
                  Read more
                  <i className="ri-arrow-right-line text-accent/"></i>
                </a>
              </div>
            </FramerMotionAnimation>

            {/* <!-- step 3-> */}
            <FramerMotionAnimation y={50} delay={0.7}>
              <div className="steps__step text-center">
                <div className="mb-4">
                  <i className="ri-tools-line text-5xl text-accent"></i>
                </div>
                <h3 className="h3 mb-5">Project Execution</h3>
                <p className="mb-5 max-w-md mx-auto">
                  There are many variations of the passages of Lorem Ipsum from
                  available, majority.
                </p>

                <a href="#" className="font-medium flex justify-center gap-2">
                  Read more
                  <i className="ri-arrow-right-line text-accent/"></i>
                </a>
              </div>
            </FramerMotionAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
