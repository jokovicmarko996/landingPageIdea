import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">
          {/* first */}
          <div className="footer__item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left ">
            {/* <!-- logo --> */}
            <Link
              className="flex justify-center xl:justify-start mb-8"
              href="#"
            >
              <Image src={logo} alt="" />
            </Link>
            <p className="mb-8 text-xl">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            {/* <!-- socials --> */}
            <ul class="text-primary flex gap-[54px] justify-center xl:justify-start">
              <li>
                <a href="">
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>

              <li>
                <a href="">
                  <i class="ri-twitter-fill"></i>
                </a>
              </li>

              <li>
                <a href="">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </li>

              <li>
                <a href="">
                  <i class="ri-instagram-fill"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* second */}
          <div class="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end ">
            <div class="footer__item">
              <h3 class="h3 mb-3">Pages</h3>
              <ul class="flex flex-col gap-4">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Testimonials</a>
                </li>
                <li>
                  <a href="">Our Work</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div class="footer__item">
              <h3 class="h3 mb-3">Services</h3>

              <ul class="flex flex-col gap-4">
                <li>
                  <a href="">Kitchen</a>
                </li>

                <li>
                  <a href="">Living Area</a>
                </li>

                <li>
                  <a href="">Bathroom</a>
                </li>

                <li>
                  <a href="">Bedroom</a>
                </li>
              </ul>
            </div>

            <div class="footer__item max-w-[260px] mx-auto xl:mx-0">
              <h3 class="h3 mb-3">Contact</h3>

              <div class="flex flex-col gap-6 text-[20px]">
                <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>

                <p>contact@interno.com</p>

                <p>(123) 456 - 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <p class="footer__copyright text-center text-lg py-10 bg-white xl:border-t">
        Copyright &copy; Interno 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
