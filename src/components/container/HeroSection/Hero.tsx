import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center w-[393px] pt-32 px-4 lg:w-full lg:pl-35 lg:pr-0.5 lg:grid lg:grid-cols-1 lg:grid-rows-1 lg:relative lg:pt-0"
    >
      {/* <!-- Hero Text + Button --> */}
      <div
        id="hero-text"
        className="flex flex-col w-[361px] min-h-[240px] text-left lg:w-[653px] lg:min-h-75 lg:col-[1] lg:row-[1] lg:justify-self-start lg:z-20"
      >
        <h1 className="font-bold text-4xl/[44px] lg:text-14/17">
          Your Tech Partner for
          <span className="text-[#FF6C37]">Smarter Growth</span>
        </h1>
        <p className="text-base/[30px] font-semibold lg:text-5/[34px]">
          We deliver tailored IT solutions to help you scale with speed and
          confidence.
        </p>
        <a
          href="#letstalk"
          className="flex w-[361px] h-[44px] p-2 Gap-1 rounded-r-full rounded-l-full bg-[#FF6C37] text-white font-bold mt-10 items-center justify-center lg:w-50 lg:h-12"
        >
          Let's Talk
        </a>
      </div>
      {/* <!-- Hero Image --> */}
      <div
        id="hero-image"
        className="lg:col-[1] lg:row-[1] lg:justify-self-end lg:z-10"
      >
        <picture>
          <source
            srcSet="../src/assets/D-Image-Hero.svg"
            media="(prefers-color-scheme: dark)"
          />
          <img
            src="../src/assets/Image-Hero.svg"
            alt="Hero Image"
            className="size-[391px] lg:size-[747px] lg:p-10"
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
