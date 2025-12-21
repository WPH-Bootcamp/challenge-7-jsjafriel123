const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col w-[393px] h-[1568px] gap-6 px-4 py-10 items-center lg:w-full lg:h-[772px] lg:px-35 lg:py-20 lg:gap-16"
    >
      {/* <!-- ---------------- -->
          <!-- Portfolio Header -->
          <!-- ---------------- --> */}
      <div
        id="portfolio-header"
        className="flex flex-col w-[361px] h-[143px] gap-[11px] items-center lg:w-[1160px] lg:h-[99px]"
      >
        <h2 className="w-auto h-[76px] font-bold text-[28px]/[38px] text-[#0A0D12] text-center lg:h-14 lg:text-10/14 dark:text-current">
          From Vision to Launch! Projects We’re Proud Of
        </h2>
        <p className="w-auto h-[56px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-8 lg:text-[18px]/[32px] dark:text-[#A4A7AE]">
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </div>
      {/* <!-- --------- -->
            <!-- Portfolio -->
            <!-- --------- --> */}
      {/* <!-- Card Container --> */}
      <div className="w-auto h-[1321px] grid grid-cols-1 gap-5 lg:w-[1159px] lg:h-[449px] lg:grid-cols-3">
        {/* <!-- Card 1 --> */}
        <div className="flex flex-col w-auto h-[427px] gap-2 lg:h-[449px] lg:gap-3">
          <img
            src="../public/assets/Portfolio 1.svg"
            alt="Portfolio 1"
            className="size-[361px] rounded-2xl lg:size-[373px]"
          />
          <div className="w-auto h-[58px] lg:h-[64px]">
            <p className="text-sm/[28px] text-[#FF623E] font-medium lg:text-[16px]/[30px]">
              Landing Page
            </p>
            <p className="text-[16px]/[30px] text-[#0A0D12] font-bold lg:text-[20px]/[34px] dark:text-current">
              Portofolio 1
            </p>
          </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="flex flex-col w-auto h-[427px] gap-2 lg:h-[449px] lg:gap-3">
          <img
            src="../public/assets/Portfolio 2.svg"
            alt="Portfolio 2"
            className="size-[361px] rounded-2xl lg:size-[373px]"
          />
          <div className="w-auto h-[58px] lg:h-[64px]">
            <p className="text-sm/[28px] text-[#FF623E] font-medium lg:text-[16px]/[30px]">
              Landing Page
            </p>
            <p className="text-[16px]/[30px] text-[#0A0D12] font-bold lg:text-[20px]/[34px] dark:text-current">
              Portofolio 2
            </p>
          </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="flex flex-col w-auto h-[427px] gap-2 lg:h-[449px] lg:gap-3">
          <img
            src="../public/assets/Portfolio 3.svg"
            alt="Portfolio 3"
            className="size-[361px] rounded-2xl lg:size-[373px]"
          />
          <div className="w-auto h-[58px] lg:h-[64px]">
            <p className="text-sm/[28px] text-[#FF623E] font-medium lg:text-[16px]/[30px]">
              Landing Page
            </p>
            <p className="text-[16px]/[30px] text-[#0A0D12] font-bold lg:text-[20px]/[34px] dark:text-current">
              Portofolio 3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
