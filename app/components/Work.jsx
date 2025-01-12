"use client";
import Image from "next/image";
import React from "react";
import work1 from "../../public/work/01.png";
import work2 from "../../public/work/02.png";
import work3 from "../../public/work/03.png";
import work4 from "../../public/work/04.png";
import FramerMotionAnimation from "../lib/FramerMotionAnimation";

const Work = () => {
  const workData = [
    { id: 1, src: work1, alt: "Work 1" },
    { id: 2, src: work2, alt: "Work 2" },
    { id: 3, src: work3, alt: "Work 3" },
    { id: 4, src: work4, alt: "Brand 4" },
  ];

  return (
    <FramerMotionAnimation y={50} delay={0.8}>
    <section className="work mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto xl:px-0">
        {/* text  */}
        <div class="text-center mb-24">
          <h2 class="work__title h2 mb-4">Follow Our Projects</h2>

          <p class="work__subtitle max-w-3xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>

        {/* <!-- grid --> */}
        <div className="work__grid grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]">
          {workData.map((work) => (
            <div key={work.id} className="work-item">
              <div className="w-full max-w-[548px] h-full mx-auto">
                {/* <Image className="mb-6" src={work1} alt="" /> */}
                <Image src={work.src} alt={work.alt} />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h3 className="h3">Modern Kitchen</h3>

                    <p>Decor/Architecture</p>
                  </div>

                  <button className="bg-accent-secondary ☐ hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                    <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </FramerMotionAnimation>
  );
};

export default Work;
