import React from "react";

const Client = () => {
  return (
    <section
      id="client"
      className="flex flex-col w-[393px] h-[144px] gap-6 justify-between items-center lg:w-auto lg:h-[236px]"
    >
      <p className="h-[40px] text-[16px]/[30px] font-bold lg:text-[24px]/[36px]">
        Trusted by Global Innovators & Leading Brands
      </p>

      <div
        id="scrolling-logo"
        className="relative flex items-center w-[393px] h-[128px] overflow-hidden lg:w-full lg:h-50"
      >
        {/* <!-- <marquee behavior="alternate" direction=""> --> */}
        <div
          className="inline-block animate-marquee-alternate"
          //   CSS variable in REACT
          style={
            {
              "--move-distance": "2800px",
              "--speed": "12s",
            } as React.CSSProperties
          }
        >
          <div className="flex flex-row items-center gap-10">
            <img
              src="../src/assets/Company-logo_-4.svg"
              alt="Adobe"
              className="h-[48px] pl-10 grayscale"
            />
            <img
              src="../src/assets/Company-logo_-3.svg"
              alt="Upwork"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_-2.svg"
              alt="Zoom"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_-1.svg"
              alt="Postman"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_0.svg"
              alt="Databricks"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_1.svg"
              alt="Airbnb"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_2.svg"
              alt="Dropbox"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_3.svg"
              alt="Paypal"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_4.svg"
              alt="Netflix"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_-4.svg"
              alt="Adobe"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_-3.svg"
              alt="Upwork"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_-2.svg"
              alt="Zoom"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_-1.svg"
              alt="Postman"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_0.svg"
              alt="Databricks"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_1.svg"
              alt="Airbnb"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_2.svg"
              alt="Dropbox"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_3.svg"
              alt="Paypal"
              className="h-[48px] grayscale"
            />
            <img
              src="../src/assets/Company-logo_4.svg"
              alt="Netflix"
              className="h-[48px] grayscale"
            />
          </div>
        </div>
        <div className="absolute left-0 top-0 w-[46px] h-[98px] bg-gradient-to-r from-white to-white/0 lg:w-[260px] lg:h-[200px] dark:from-black dark:to-black/0"></div>
        <div className="absolute right-0 top-0 w-[46px] h-[98px] bg-gradient-to-l from-white to-white/0 lg:w-[260px] lg:h-[200px] dark:from-black dark:to-black/0"></div>
      </div>
    </section>
  );
};

export default Client;
