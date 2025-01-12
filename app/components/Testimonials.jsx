"use client";
import Image from "next/image";
import s1 from "../../public/testimonial/01.png";
import s2 from "../../public/testimonial/02.png";
import s3 from "../../public/testimonial/03.png";
import s4 from "../../public/testimonial/04.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional styles
import "swiper/css/pagination"; // Optional styles

import { Navigation, Pagination } from "swiper/modules"; // Import optional modules
import FramerMotionAnimation from "../lib/FramerMotionAnimation";

const testimonials = [
  {
    id: 1,
    image: s1,
    name: "Nattasha Mith",
    location: "Greenville, USA",
    text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
  {
    id: 2,
    image: s2,
    name: "Jesica White",
    location: "Oak Ridge, USA",
    text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
  {
    id: 3,
    image: s3,
    name: "Mike Davis",
    location: "Berlin, Germany",
    text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
  {
    id: 4,
    image: s4,
    name: "Olivia Vilson",
    location: "Paris, France",
    text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
];

// const MySwiper = ({swiper1,swiper2,swiper3,swiper4}) => {
const MySwiper = () => {
  return (
    <Swiper
      //   modules={[Navigation, Pagination]} // Add the modules you need
      //   navigation
      //   pagination={{ clickable: true }}
      //   spaceBetween={50}
      //   slidesPerView={1}
      // >
      loop={true}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        320: {
          slidesPerView: 1, // 1 slide per view on screens >= 320px
          spaceBetween: 10, // Smaller spacing on smaller screens
        },
        960: {
          slidesPerView: 2, // 2 slides per view on screens >= 768px
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3, // 3 slides per view on screens >= 960px
          spaceBetween: 30,
        },
      }}
    >
      {/* <SwiperSlide>
        <div className="swiper-slide">
          <div className="testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
            <div className="flex gap-4 mb-6">
              <Image src={s1} height={77} width={77} alt="Nattasha Mith" />
              <div>
                <h3 className="h3">Nattasha Mith</h3>
                <div>Greenville, USA</div>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-slide">
          <div className="testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
            <div className="flex gap-4 mb-6">
              <Image src={s2} height={77} width={77} alt="Nattasha Mith" />
              <div>
                <h3 className="h3">Jesica White</h3>
                <div>Oak Ridge, USA</div>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-slide">
          <div className="testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
            <div className="flex gap-4 mb-6">
              <Image src={s3} height={77} width={77} alt="Nattasha Mith" />
              <div>
                <h3 className="h3">Mike Davis</h3>
                <div>Berlin, Germany</div>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-slide">
          <div className="testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
            <div className="flex gap-4 mb-6">
              <Image src={s4} height={77} width={77} alt="Nattasha Mith" />
              <div>
                <h3 className="h3">Olivia Vilson</h3>
                <div>Paris, France</div>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been.
            </p>
          </div>
        </div>
      </SwiperSlide> */}

      {testimonials.map((item) => (
        <SwiperSlide>
          <div key={item.id} className="swiper-slide">
            <div className="testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
              <div className="flex gap-4 mb-6">
                <Image
                  src={item.image}
                  height={77}
                  width={77}
                  alt={item.name}
                />
                <div>
                  <h3>{item.name}</h3>
                  <div>{item.location}</div>
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// smisli kako da ga odradis
{
  /* 

{testimonials.map((item) => {
  <SwiperSlide>
  <div className="swiper-slide">
  <div
    key={item.name}
    className="testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto"
  >
    <div className="flex gap-4 mb-6">
      <Image
        src={item.image}
        height={77}
        width={77}
        alt={item.name}
      />
      <div>
        <h3>{item.name}</h3>
        <div>{item.location}</div>
      </div>
    </div>
    <p>{item.text}</p>
  </div>
  </div>
  </SwiperSlide>
})}
 */
}

const Testimonials = () => {
  return (
    <>
      {/* <!-- testimonial --> */}
      <FramerMotionAnimation y={50} x delay={0.8}>
        <section className="testimonial mt-[80px] xl:mt-[200px] relative z-20">
          <div className="testimonial_bg container mx-auto bg-accent-secondary rounded-[70px] px-6">
            <div className="flex flex-col items-center pt-[88px] pb-[110px]">
              <h2 className="h2 mb-9 text-center">What client say</h2>
              {/* // <!-- slider --> */}
              <div className="w-full">
                <div className="testimonial__slider swiper h-[400px]">
                  {/* wrapper  */}

                  <div className="swiper-wrapper">
                    {/* slides  */}

                    {/* slide 1 */}
                    {/* <div className="swiper-slide">
                  <div className="testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                    <div className="flex gap-4 mb-6">
                      <Image
                        src={s1}
                        height={77}
                        width={77}
                        alt="Nattasha Mith"
                      />
                      <div>
                        <h3>Nattasha Mith</h3>
                        <div>Greenville, USA</div>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the typesetting
                      industry. Ipsum has been.
                    </p>
                  </div>
                </div> */}

                    <MySwiper />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FramerMotionAnimation>
    </>
  );
};

export default Testimonials;
