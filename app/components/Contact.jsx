"use client";
import React from "react";
import FramerMotionAnimation from "../lib/FramerMotionAnimation";

const Contact = () => {
  return (
    <FramerMotionAnimation y={50} delay={0.8}>
      <section class="contact mt-[80px] mb-[80px] xl:mt-[150px] relative z-20">
        <div class="contact__container container mx-auto bg-primary sm:rounded-[70px] py-4">
          <div class="contact__text max-w-[640px] mx-auto text-center">
            <h2 class="h2 text-white mb-4">Do you want to join Interno?</h2>

            <p class="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
              It is a long established fact will be distracted.
            </p>

            <button class="btn btn-accent mx-auto ">
              Connect with us <i class="ri-arrow-right-line text-primary"></i>
            </button>
          </div>
        </div>
      </section>
    </FramerMotionAnimation>
  );
};

export default Contact;
