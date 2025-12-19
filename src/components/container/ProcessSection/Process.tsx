import React from "react";

const Process = () => {
  return (
    <section
      id="process"
      className="flex flex-col w-[393px] h-[853px] gap-6 px-4 py-10 items-center lg:w-full lg:h-[1099px] lg:gap-16 lg:px-[140px] lg:py-20"
    >
      {/* <!-- -------------- -->
            <!-- Process Header -->
            <!-- -------------- --> */}

      <div
        id="process-header"
        className="flex flex-col w-[361px] h-[105px] gap-[11px] px-1 justify-center lg:w-[1160px] lg:h-[99px]"
      >
        <h2 className="w-auto h-[38px] font-bold text-[28px]/[38px] text-[#0A0D12] text-center lg:h-14 lg:text-10/14 dark:text-current">
          Our Process
        </h2>
        <p className="w-auto h-[56px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-8 lg:text-[18px]/[32px]">
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      {/* <!-- ------------- -->
            <!-- Process Steps -->
            <!-- ------------- --> */}
      <div className="relative">
        <div className="absolute top-[44px] left-[18px] flex w-0 h-[554px] border border-[#DFDFDF] z-0 lg:left-[578px] lg:h-[680px] dark:border-[#252B37]"></div>

        <div
          id="process-steps"
          className="w-[361px] h-[644px] grid grid-cols-[40px_auto] gap-4 justify-center items-center z-10 lg:w-[1160px] lg:h-[776px] lg:grid-cols-[1fr_52px_1fr]"
        >
          {/* <!-- Process Number 1--> */}
          <p className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:hidden">
            1
          </p>
          {/* <!-- Accordion 1--> */}
          <div className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[62px] w-[280px] gap-1 justify-center">
              <h3 className="font-bold text-base lg:text-xl/[34px]">
                Discovery & Consultation
              </h3>
              <p className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]">
                Understand Your Needs & Goals
              </p>
            </div>
            <a href="#" className="font-bold text-2xl">
              ^
            </a>
          </div>
          {/* <!-- Process Number 1 (LG)--> */}
          <p className="hidden size-12 bg-[#FF623E] rounded-full items-center justify-center text-[16px] text-white bold z-10 lg:flex">
            1
          </p>
          {/* <!-- dummy box --> */}
          <div className="hidden w-[532px] h-[116px] lg:flex"></div>
          {/* <!-- Process Number 2--> */}
          {/* <!-- dummy box --> */}
          <div className="hidden w-[532px] h-[116px] lg:flex"></div>
          <p className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:size-12 lg:text-[16px]">
            2
          </p>
          {/* <!-- Accordion 2--> */}
          <div className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[62px] w-[280px] gap-1 justify-center">
              <h3 className="font-bold text-base lg:text-xl/[34px]">
                Planning & Strategy
              </h3>
              <p className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]">
                Build a Clear, Scalable Roadmap
              </p>
            </div>
            <a href="#" className="font-bold text-2xl">
              ^
            </a>
          </div>
          {/* <!-- Process Number 3--> */}
          <p className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:hidden">
            3
          </p>
          {/* <!-- Accordion 3--> */}
          <div className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[62px] w-[280px] gap-1 justify-center">
              <h3 className="font-bold text-base lg:text-xl/[34px]">
                Design & Prototyping
              </h3>
              <p className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]">
                Craft UX That Converts
              </p>
            </div>
            <a href="#" className="font-bold text-2xl">
              ^
            </a>
          </div>
          {/* <!-- Process Number 3 (LG)--> */}
          <p className="hidden size-12 bg-[#FF623E] rounded-full items-center justify-center text-[16px] text-white bold z-10 lg:flex">
            3
          </p>
          {/* <!-- dummy box --> */}
          <div className="hidden w-[532px] h-[116px] lg:flex"></div>

          {/* <!-- Process Number 4--> */}
          {/* <!-- dummy box --> */}
          <div className="hidden w-[532px] h-[116px] lg:flex"></div>

          <p className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:size-12 lg:text-[16px]">
            4
          </p>
          {/* <!-- Accordion 4--> */}
          <div className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[62px] w-[280px] gap-1 justify-center">
              <h3 className="font-bold text-base lg:text-xl/[34px]">
                Development & Implementation
              </h3>
              <p className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]">
                Deliver With Speed & Precision
              </p>
            </div>
            <a href="#" className="font-bold text-2xl">
              ^
            </a>
          </div>
          {/* <!-- Process Number 5--> */}
          <p className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:hidden">
            5
          </p>
          {/* <!-- Accordion 5--> */}
          <div className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[62px] w-[280px] gap-1 justify-center">
              <h3 className="font-bold text-base lg:text-xl/[34px]">
                Testing & Optimization
              </h3>
              <p className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]">
                Ensure Quality at Every Step
              </p>
            </div>
            <a href="#" className="font-bold text-2xl">
              ^
            </a>
          </div>
          <p className="hidden size-12 bg-[#FF623E] rounded-full items-center justify-center text-[16px] text-white bold z-10 lg:flex">
            5
          </p>
          {/* <!-- dummy box --> */}
          <div className="hidden w-[532px] h-[116px] lg:flex"></div>
          {/* <!-- Process Number 6--> */}
          {/* <!-- dummy box --> */}
          <div className="hidden w-[532px] h-[116px] lg:flex"></div>

          <p className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:size-12 lg:text-[16px]">
            6
          </p>
          {/* <!-- Accordion 6--> */}
          <div className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[62px] w-[280px] gap-1 justify-center">
              <h3 className="font-bold text-base lg:text-xl/[34px]">
                Launch & Growth
              </h3>
              <p className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]">
                Scale, Measure & Improve Continuously
              </p>
            </div>
            <a href="#" className="font-bold text-2xl">
              ^
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
