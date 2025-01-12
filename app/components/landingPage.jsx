import React from "react";
import Header from "./Header";
import Steps from "./Steps";
import About from "./About";
import Testimonials from "./Testimonials";
import Brands from "./Brands";
import Work from "./Work";
import Stats from "./Stats";
import News from "./News";
import Contact from "./Contact";
import Footer from "./Footer";

import Hero from "./Hero";

const LandingPage = () => {
  return (
    // <div className="container mx-auto">
    //   <h1 className="h1">Interno Landing Page</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
    //     perferendis incidunt earum repellendus aut! Sit maiores, voluptatibus
    //     corporis at dolorum asperiores illum quas nesciunt sint soluta ipsum qui
    //     mollitia! Dolorem vitae veritatis quaerat corrupti libero cumque quam
    //     quod aliquid tempore numquam exercitationem tempora nostrum, labore
    //     excepturi alias vero, commodi perspiciatis.
    //   </p>
    // </div>
    <>
      <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
        {/* <h1 className="h1">Interno</h1> */}

        {/* header  */}
        <Header />

        {/* grid image  */}
        <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed inset-0 z-10"></div>

        {/* hero */}
        <Hero />

        {/* steps  */}
        <Steps />

        {/* about */}
        <About />

        {/* testimonials */}
        <Testimonials />

        {/* brands */}
        <Brands />

        {/* work  */}
        <Work />

        {/* stats  */}
        <Stats />

        {/* news  */}
        <News />

        {/* contact */}
        <Contact />

        {/* footer  */}
        <Footer />

        {/* temporary div  */}
        <div className="h-[3000px]"></div>
      </main>
    </>
  );
};

export default LandingPage;
