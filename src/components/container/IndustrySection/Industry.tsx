import React from "react";
import IndustryItems from "./IndustryItems";

const Industry = () => {
  return (
    <section
      id="industry"
      className="flex flex-col w-[393px] h-[655px] gap-6 px-4 py-10 items-center lg:w-full lg:h-[758px] lg:px-35 lg:py-20 lg:gap-16"
    >
      {/* <!-- --------------- -->
          <!-- Industry Header -->
          <!-- --------------- --> */}

      <div
        id="industry-header"
        className="flex flex-col w-[361px] h-[109px] gap-[11px] justify-center lg:w-[1160px] lg:h-[99px]"
      >
        <h2 className="w-auto h-[42px] font-bold text-[32px]/[42px] text-[#0A0D12] lg:h-14 lg:text-10/14 dark:text-current">
          Built for Your Industry
        </h2>
        <p className="w-auto h-[56px] font-medium text-sm/[28px] text-[#717680] lg:h-8 lg:text-[18px]/[32px]">
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </div>
      {/* <!-- ------------- -->
          <!-- Industry List -->
          <!-- ------------- --> */}
      <IndustryItems />
    </section>
  );
};

export default Industry;
