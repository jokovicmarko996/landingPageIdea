"use client";
import React from "react";

import news1 from "../../public/news/01.png";
import news2 from "../../public/news/02.png";
import news3 from "../../public/news/03.png";
import Image from "next/image";
import FramerMotionAnimation from "../lib/FramerMotionAnimation";

const News = () => {
  const newsData = [
    { id: 1, src: news1, alt: "News 1" },
    { id: 2, src: news2, alt: "News 2" },
    { id: 3, src: news3, alt: "News 3" },
  ];
  return (
    // <!-- news -->
    <FramerMotionAnimation y={50} delay={0.8}>
      <section class="news mt-[80px] xl:mt-[150px] relative z-20">
        <div class="container mx-auto px-0">
          {/* text  */}
          <div class="max-w-[810px] mx-auto text-center mb-[52px]">
            <h2 class="news__title h2 mb-3">Articles & News</h2>

            <p class="news__subtitle">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using.
            </p>
          </div>

          {/* <!-- grid--> */}
          <div class="news__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px">
            {/* <!-- grid item - */}
            {newsData.map((item) => (
              <div
                key={item.id}
                class="news__item w-full max-w-[382px] h-[520px] border border-primary/ 20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0"
              >
                <Image src={item.src} alt={item.alt} />

                <div class="flex flex-col gap-[30px]">
                  <h3 class="h3">
                    Let's Get Solution For Building Construction Work
                  </h3>

                  <div class="flex items-center justify-between">
                    <p class="text-base">22 June, 2024</p>

                    <button
                      class="bg-accent-secondary w-[52px] h-[52px] rounded-full 
group-hover:bg-white transition-all"
                    >
                      <i class="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* <!-- grid item --> */}
          </div>
        </div>
      </section>
    </FramerMotionAnimation>
  );
};

export default News;
