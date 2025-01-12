"use client";
import React from "react";
import FramerMotionAnimation from "../lib/FramerMotionAnimation";

const Stats = () => {
  return (
    <FramerMotionAnimation y={50} delay={0.8}>
      <section class="stats mt-[80px] xl:mt-[150px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]">
        <div class="container mx-auto">
          {/* <!-- grid-> */}
          <div class="grid grid-cols-1 xl:grid-cols-4 gap-12">
            {/* grid item */}
            <div class="stats__item text-center xl:border-r xl:border-accent">
              <h3 class="h1 font-primary text-accent">12</h3>
              <p>Years Of Experience</p>
            </div>

            <div class="stats__item text-center xl:border-r xl:border-accent">
              <h3 class="h1 font-primary text-accent">85</h3>
              <p>Projects Completed</p>
            </div>

            <div class="stats__item text-center xl:border-r xl:border-accent">
              <h3 class="h1 font-primary text-accent">15</h3>
              <p>Active Projects</p>
            </div>

            <div class="stats__item text-center ">
              <h3 class="h1 font-primary text-accent">95</h3>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>
      </section>
    </FramerMotionAnimation>
  );
};

export default Stats;
