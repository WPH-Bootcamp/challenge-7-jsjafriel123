import React from "react";

const Industry = () => {
  return (
    <section
      id="industry"
      className="flex flex-col w-[393px] h-[655px] gap-6 px-4 py-10 items-center lg:w-full lg:h-[758px] lg:px-35 lg:py-20 lg:gap-16"
    >
      {/* <!-- -------------- -->
            <!-- Industry Header -->
            <!-- -------------- --> */}

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
      <div className="grid grid-cols-1 lg:w-[1160px] lg:h-[435px] lg:grid-cols-[256px_1fr]">
        <div className="flex flex-col justify-between w-[361px] h-[114px] gap-3">
          <div className="flex flex-row items-center w-auto h-[30px] gap-1.5 lg:h-[32px]">
            <p className="w-1 h-6 bg-[#FF623E] lg:h-8"></p>
            <p className="text-[16px]/[30px] font-bold lg:text-[20px]/[34px]">
              Fintech
            </p>
          </div>
          <div className="flex flex-row items-center w-auto h-[30px] gap-1.5 lg:h-[32px]">
            <p className="w-1 h-6 bg-[#AAAAAA] lg:h-8"></p>
            <p className="text-[16px]/[30px] font-bold text-[#AAAAAA] lg:text-[20px]/[34px]">
              E-Commerce
            </p>
          </div>
          <div className="flex flex-row items-center w-auto h-[30px] gap-1.5 lg:h-[32px]">
            <p className="w-1 h-6 bg-[#AAAAAA] lg:h-8"></p>
            <p className="text-[16px]/[30px] font-bold text-[#AAAAAA] lg:text-[20px]/[34px]">
              Healtcare
            </p>
          </div>
        </div>
        {/* <!-- ------------- -->
              <!-- Industry Detail -->
              <!-- ------------- --> */}
        <div className="flex flex-col w-[361px] h-[304px] gap-5 lg:w-[840px] lg:h-[435px]">
          <p className="h-[84px] text-[14px]/[28px] text-[#0A0D12] lg:h-[64px] lg:text-[18px]/[32px] dark:text-[#FDFDFD]">
            We build secure, scalable, and compliant fintech solutions — from
            digital wallets to core banking systems — tailored to modern
            financial needs.
          </p>
          <img
            src="../src/assets/Industry Image.svg"
            alt="Image Fintech"
            className="w-auto h-[200px] rounded-[12px] lg:h-[351px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Industry;
