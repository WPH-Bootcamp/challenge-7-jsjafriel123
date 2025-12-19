import React from "react";

const Achievement = () => {
  return (
    <section
      id="achievement"
      className="flex flex-col w-[393px] h-[688px] gap-6 px-4 py-20 items-center lg:w-full lg:gap-16 lg:h-[598px] lg:px-35"
    >
      <div
        id="achievement-header"
        className="flex flex-col w-[361px] h-[143px] gap-[11px] items-center lg:w-[1160px] lg:h-[99px]"
      >
        <h2 className="w-auto h-[76px] font-bold text-[28px] text-[#0A0D12] text-center lg:h-14 lg:text-[40px]/14 dark:text-current">
          End-to-End IT Solutions That Drive Results
        </h2>
        <p className="w-auto h-[56px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-8 lg:text-[18px]/8">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </div>
      <div
        id="achievement-cards"
        className="grid grid-cols-2 gap-4 lg:w-[1160px] lg:h-[275px] lg:flex lg:flex-row lg:gap-5"
      >
        {/* <!-- Achievement 1 --> */}
        <div className="flex flex-col justify-center items-center size-[172.5px] rounded-full bg-[#FAFAFA] border-[#DEDCDC] lg:size-[275px] dark:bg-[#0A0D12] dark:border-[#181D27]">
          <h2 className="w-[140px] h-[44px] text-[36px]/[44px] font-bold text-center text-[#FF623E] lg:w-[243px] lg:h-[60px] lg:text-[48px]/[60px]">
            50+
          </h2>
          <p className="text-[14px]/[28px] font-semibold text-[#0A0D12] text-center lg:text-[20px]/[34px] dark:text-current">
            Projects Delivered
          </p>
        </div>
        {/* <!-- Achievement 2 --> */}
        <div className="flex flex-col justify-center items-center size-[172.5px] rounded-full bg-[#FAFAFA] border-[#DEDCDC] lg:size-[275px] dark:bg-[#0A0D12] dark:border-[#181D27]">
          <h2 className="w-[140px] h-[44px] text-[36px]/[44px] font-bold text-center text-[#FF623E] lg:w-[243px] lg:h-[60px] lg:text-[48px]/[60px]">
            5+
          </h2>
          <p className="text-[14px]/[28px] font-semibold text-[#0A0D12] text-center lg:text-[20px]/[34px] dark:text-current">
            Years of Experience
          </p>
        </div>

        {/* <!-- Achievement 3 --> */}
        <div className="flex flex-col justify-center items-center size-[172.5px] rounded-full bg-[#FAFAFA] border-[#DEDCDC] lg:size-[275px] dark:bg-[#0A0D12] dark:border-[#181D27]">
          <h2 className="w-[140px] h-[44px] text-[36px]/[44px] font-bold text-center text-[#FF623E] lg:w-[243px] lg:h-[60px] lg:text-[48px]/[60px]">
            10+
          </h2>
          <p className="text-[14px]/[28px] font-semibold text-[#0A0D12] text-center lg:text-[20px]/[34px] dark:text-current">
            Industry Awards Won
          </p>
        </div>

        {/* <!-- Achievement 4 --> */}
        <div className="flex flex-col justify-center items-center size-[172.5px] rounded-full bg-[#FAFAFA] border-[#DEDCDC] lg:size-[275px] dark:bg-[#0A0D12] dark:border-[#181D27]">
          <h2 className="w-[140px] h-[44px] text-[36px]/[44px] font-bold text-center text-[#FF623E] lg:w-[243px] lg:h-[60px] lg:text-[48px]/[60px]">
            100%
          </h2>
          <p className="text-[14px]/[28px] font-semibold text-[#0A0D12] text-center lg:text-[20px]/[34px] dark:text-current">
            Client Satisfaction Rate
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
