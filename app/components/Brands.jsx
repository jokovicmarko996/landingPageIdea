"use client";
import React from "react";
import brand1 from "../../public/brands/01.svg";
import brand2 from "../../public/brands/02.svg";
import brand3 from "../../public/brands/03.svg";
import brand4 from "../../public/brands/04.svg";
import brand5 from "../../public/brands/05.svg";
import Image from "next/image";
import FramerMotionAnimation from "../lib/FramerMotionAnimation";
import Slider from "./Slider";

// import React from "react";
import { motion } from "framer-motion";

const InfiniteSlider = ({ logos }) => {
  // Variants for the infinite scroll animation
  const sliderVariants = {
    animate: {
      x: ["0%", "-100%"], // Moves from the start to the end of the container
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10, // Adjust the speed of the animation
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex w-max"
        variants={sliderVariants}
        animate="animate"
      >
        {/* Map through the logos twice for a seamless infinite effect */}
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="mx-4 flex-shrink-0 w-[200px] h-[200px] bg-white flex items-center justify-center rounded-lg shadow-lg"
          >
            <Image
              src={logo.src}
              alt={logo.alt || `Logo ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// export default InfiniteSlider;

const Brands = () => {
  const brandData = [
    { id: 1, src: brand1, alt: "Brand 1" },
    { id: 2, src: brand2, alt: "Brand 2" },
    { id: 3, src: brand3, alt: "Brand 3" },
    { id: 4, src: brand4, alt: "Brand 4" },
    { id: 5, src: brand5, alt: "Brand 5" },
  ];
  return (
    // <!-- brends -->
    // napravi da se bvrednovi spinuju u krug
    // <FramerMotionAnimation y={50} delay={0.8}>
    //   <section class="brands mt-[80px] xl:mt-[200px] relative z-20">
    //     <div class="container mx-auto">
    //       <div class="flex flex-col xl:flex-row justify-between items-center gap-12">
    //         {brandData.map((brand) => (
    //           <div key={brand.id} className="brand-item">
    //             <Image
    //               src={brand.src}
    //               alt={brand.alt}
    //               width={100}
    //               height={50}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </FramerMotionAnimation>
    <section className="brands mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto">
        {/* <div class="flex flex-col xl:flex-row justify-between items-center gap-12"> */}
        <div className="flex flex-row justify-center items-center gap-12">
          <Slider items={brandData} width={200} height={200} reverse={false} />
          {/* <InfiniteSlider logos={brandData} /> */}
        </div>
      </div>
    </section>
  );
};

// import Slider from "../components/Slider";

// export default function Home() {
// const brandData = [
//   { id: 1, src: brand1, alt: "Brand 1" },
//   { id: 2, src: brand2, alt: "Brand 2" },
//   { id: 3, src: brand3, alt: "Brand 3" },
//   { id: 4, src: brand4, alt: "Brand 4" },
//   { id: 5, src: brand5, alt: "Brand 5" },
// ];

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <Slider items={items} width={200} height={200} reverse={false} />
//     </div>

{
  /* <section class="brands mt-[80px] xl:mt-[200px] relative z-20">
  <div class="container mx-auto"> */
}
{
  /* <div class="flex flex-col xl:flex-row justify-between items-center gap-12"> */
}
{
  /* <div class="flex flex-row justify-center items-center gap-12">
      {brandData.map((brand) => (
        <div key={brand.id} className="brand-item">
          <Slider items={items} width={200} height={200} reverse={false} />
        </div>
      ))}
    </div>
  </div>
</section>; */
}
//   );
// }

export default Brands;
