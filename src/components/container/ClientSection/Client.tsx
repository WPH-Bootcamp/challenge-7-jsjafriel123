import React from "react";
import ClientLogo from "../../ui/Logo/ClientLogo";

const Client = () => {
  type logo = {
    source: string;
    alternative: string;
  };

  const logos: logo[] = [
    { source: "../public/assets/Company-logo_-4.svg", alternative: "Adobe" },
    { source: "../public/assets/Company-logo_-3.svg", alternative: "Upwork" },
    { source: "../public/assets/Company-logo_-2.svg", alternative: "Zoom" },
    { source: "../public/assets/Company-logo_-1.svg", alternative: "Postman" },
    {
      source: "../public/assets/Company-logo_0.svg",
      alternative: "Databricks",
    },
    { source: "../public/assets/Company-logo_1.svg", alternative: "Airbnb" },
    { source: "../public/assets/Company-logo_2.svg", alternative: "Dropbox" },
    { source: "../public/assets/Company-logo_3.svg", alternative: "Paypal" },
    { source: "../public/assets/Company-logo_4.svg", alternative: "Netflix" },
  ];
  const longLogos = [...logos, ...logos];

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
            {longLogos.map((logo) => (
              <ClientLogo
                source={logo.source}
                alternative={logo.alternative}
              ></ClientLogo>
            ))}
          </div>
        </div>
        <div className="absolute left-0 top-0 w-[46px] h-[98px] bg-gradient-to-r from-white to-white/0 lg:w-[260px] lg:h-[200px] dark:from-black dark:to-black/0"></div>
        <div className="absolute right-0 top-0 w-[46px] h-[98px] bg-gradient-to-l from-white to-white/0 lg:w-[260px] lg:h-[200px] dark:from-black dark:to-black/0"></div>
      </div>
    </section>
  );
};

export default Client;
