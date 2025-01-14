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
          <Slider
            items={brandData}
            width={200}
            height={200}
            reverse={false}
          />
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
