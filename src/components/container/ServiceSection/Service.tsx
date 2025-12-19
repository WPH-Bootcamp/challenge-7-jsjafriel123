import React from "react";

const Service = () => {
  return (
    <section
      id="service"
      className="flex flex-col w-[393px] h-[1921px] gap-10 px-4 py-10 items-center lg:w-full lg:h-[949px] lg:gap-16 lg:px-[140px] lg:py-20"
    >
      {/* <!-- -------------- -->
            <!-- Service Header -->
            <!-- -------------- --> */}

      <div
        id="service-header"
        className="flex flex-col w-[361px] h-[115px] gap-[11px] justify-center lg:w-[1160px] lg:h-[99px]"
      >
        <h2 className="w-auto h-[76px] font-bold text-[28px]/[38px] text-[#0A0D12] text-center lg:h-14 lg:text-10/14 dark:text-current">
          Smart IT Solutions That Grow With You
        </h2>
        <p className="w-auto h-[28px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-8 lg:text-[18px]/[32px]">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>

      {/* <!-- ------------- -->
            <!-- Service Cards -->
            <!-- ------------- --> */}

      <div
        id="service-cards"
        className="w-[361px] h-auto grid grid-cols-1 gap-2 justify-center items-center lg:w-[1160px] lg:grid-cols-3 lg:gap-10"
      >
        {/* <!-- Card Container 1--> */}
        <div className="w-[361px] h-[160px] relative flex items-end lg:w-[373.33px] lg:h-[210px]">
          {/* <!-- Card Text 1--> */}
          <div className="flex items-end w-[361px] h-[130px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[62px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]">
              <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                Web Development
              </h3>
              <p className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]">
                Build fast, scalable, and SEO-friendly websites.
              </p>
            </div>
          </div>
          {/* <!-- Card Icon 1 --> */}
          <img
            src="../src/assets/Service-Icon 1.svg"
            alt="Logo"
            className="size-16 absolute top-2.5 left-4 lg:size-20 lg:top-0"
          />
        </div>

        {/* <!-- Card Container 2--> */}
        <div className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]">
          {/* <!-- Card Text 2--> */}
          <div className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]">
              <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                Mobile App Development
              </h3>
              <p className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]">
                Native & cross-platform apps tailored to user needs.
              </p>
            </div>
          </div>
          {/* <!-- Card Icon 2 --> */}
          <img
            src="../src/assets/Service-Icon 2.svg"
            alt="Logo"
            className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
          />
        </div>

        {/* <!-- Card Container 3--> */}
        <div className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]">
          {/* <!-- Card Text 3--> */}
          <div className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]">
              <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                UI/UX Design
              </h3>
              <p className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]">
                Delight users with intuitive and beautiful interfaces
              </p>
            </div>
          </div>
          {/* <!-- Card Icon 3 --> */}
          <img
            src="../src/assets/Service-Icon 3.svg"
            alt="Logo"
            className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
          />
        </div>

        {/* <!-- Card Container 4--> */}
        <div className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]">
          {/* <!-- Card Text 4--> */}
          <div className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]">
              <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                Cloud Solutions
              </h3>
              <p className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]">
                Secure and flexible cloud infrastructure for your growth.
              </p>
            </div>
          </div>
          {/* <!-- Card Icon 4 --> */}
          <img
            src="../src/assets/Service-Icon 4.svg"
            alt="Logo"
            className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
          />
        </div>
        {/* <!-- Card Container 5--> */}
        <div className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]">
          {/* <!-- Card Text 5--> */}
          <div className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]">
              <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                Software Development
              </h3>
              <p className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]">
                Custom solutions built around your business logic.
              </p>
            </div>
          </div>
          {/* <!-- Card Icon 5 --> */}
          <img
            src="../src/assets/Service-Icon 5.svg"
            alt="Logo"
            className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
          />
        </div>
        {/* <!-- Card Container 6--> */}
        <div className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]">
          {/* <!-- Card Text 6--> */}
          <div className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]">
              <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                IT Infrastructure
              </h3>
              <p className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]">
                Scale your backend with reliable tech foundations.
              </p>
            </div>
          </div>
          {/* <!-- Card Icon 6 --> */}
          <img
            src="../src/assets/Service-Icon 6.svg"
            alt="Logo"
            className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
          />
        </div>
        {/* <!-- Card Container 7--> */}
        <div className="w-[361px] h-[168px] relative flex items-end lg:w-[373.33px] lg:h-[210px]">
          {/* <!-- Card Text 7--> */}
          <div className="flex items-end w-[361px] h-[130px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[62px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]">
              <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                Cybersecurity Services
              </h3>
              <p className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]">
                Stay protected with enterprise-grade security.
              </p>
            </div>
          </div>
          {/* <!-- Card Icon 7 --> */}
          <img
            src="../src/assets/Service-Icon 7.svg"
            alt="Logo"
            className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
          />
        </div>
        {/* <!-- Card Container 8--> */}
        <div className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]">
          {/* <!-- Card Text 8--> */}
          <div className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]">
              <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                QA Solutions
              </h3>
              <p className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]">
                Ensure performance with rigorous testing frameworks.
              </p>
            </div>
          </div>
          {/* <!-- Card Icon 8 --> */}
          <img
            src="../src/assets/Service-Icon 8.svg"
            alt="Logo"
            className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
          />
        </div>
        {/* <!-- Card Container 9--> */}
        <div className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]">
          {/* <!-- Card Text 9--> */}
          <div className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]">
            <div className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]">
              <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                IT Consulting & Support
              </h3>
              <p className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]">
                Make smarter tech decisions with expert guidance.
              </p>
            </div>
          </div>
          {/* <!-- Card Icon 9 --> */}
          <img
            src="../src/assets/Service-Icon 9.svg"
            alt="Logo"
            className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
