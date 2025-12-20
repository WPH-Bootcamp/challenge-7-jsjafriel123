const Testimony = () => {
  return (
    <section
      id="testimony"
      className="flex flex-col w-[393px] h-[583px] gap-8 py-8 items-center lg:w-full lg:h-[723px] lg:px-0 lg:py-16 lg:gap-16"
    >
      {/* <!-- ---------------- -->
            <!-- Testimony Header -->
            <!-- ---------------- --> */}
      <div
        id="portfolio-header"
        className="flex flex-col w-[361px] h-[115px] gap-[11px] items-center lg:w-full lg:h-[99px]"
      >
        <h2 className="w-auto h-[76px] font-bold text-[28px]/[38px] text-[#0A0D12] text-center lg:h-14 lg:text-10/14 dark:text-current">
          What Partners Say About Working With Us
        </h2>
        <p className="w-auto h-[28px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-8 lg:text-[18px]/[32px] dark:text-[#A4A7AE]">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>
      {/* <!-- --------- -->
            <!-- Testimony -->
            <!-- --------- --> */}
      {/* <!-- Testimonial Cards --> */}
      <div className="w-full h-auto flex flex-row justify-center gap-4 overflow-hidden lg:relative">
        {/* <!-- Card 1 -->
          <!-- Container for Card and Icons --> */}
        <div className="flex flex-col w-auto h-[328px] relative items-center pt-5 pb-6 lg:h-[350px] lg:pt-6 lg:pb-8">
          {/* <!-- Card Container 1--> */}
          <div className="flex flex-col w-[361px] h-[284px] pt-4 px-4 pb-12 gap-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[594px] lg:h-[292px] lg:gap-6 dark:bg-[#0A0D12] dark:border-[#181D27]">
            <div className="flex flex-col w-[329] h-[148px] gap-3 items-center lg:w-[546px] lg:h-[132px]">
              <img
                src="../src/assets/Rating.svg"
                alt="Rating"
                className="w-34 h-6"
              />
              <p className="text-[#0A0D12] font-semibold text-sm/[28px] text-center lg:text-[18px]/8 dark:text-current">
                “The team delivered exactly what we needed — on time and with
                outstanding quality. Their attention to detail and communication
                were top-notch.”
              </p>
            </div>
            {/* <!-- Author --> */}
            <div className="flex flex-col w-[329px] h-[56px] items-center lg:w-[546px] lg:h-[64px]">
              <p className="text-sm/[28px] font-semibold text-[#0A0D12] lg:text-[18px]/8 dark:text-current">
                Sarah Tan 1
              </p>
              <p className="text-sm/[28px] font-semibold text-[#FF623E] lg:text-[18px]/8">
                Product Manager at Finovate
              </p>
            </div>
          </div>
          {/* <!-- Card Icon --> */}
          <img
            src="../src/assets/Icon-Quote.svg"
            alt="Logo Quote"
            className="h-[37.33px] w-auto absolute top-0 left-6 lg:h-[47px]"
          />
          <img
            src="../src/assets/Testi-Sarah.svg"
            alt="Testimony Card"
            className="size-[60px] absolute bottom-0 lg:h-[75px]"
          />
        </div>
        {/* <!-- Card 2 -->
          <!-- Container for Card and Icons --> */}
        <div className="flex flex-col w-auto h-[328px] relative items-center pt-5 pb-6 lg:h-[350px] lg:pt-6 lg:pb-8">
          {/* <!-- Card Container 2--> */}
          <div className="flex flex-col w-[361px] h-[284px] pt-4 px-4 pb-12 gap-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[594px] lg:h-[292px] lg:gap-6 dark:bg-[#0A0D12] dark:border-[#181D27]">
            <div className="flex flex-col w-[329] h-[148px] gap-3 items-center lg:w-[546px] lg:h-[132px]">
              <img
                src="../src/assets/Rating.svg"
                alt="Rating"
                className="w-34 h-6"
              />
              <p className="text-[#0A0D12] font-semibold text-sm/[28px] text-center lg:text-[18px]/8 dark:text-current">
                “The team delivered exactly what we needed — on time and with
                outstanding quality. Their attention to detail and communication
                were top-notch.”
              </p>
            </div>
            {/* <!-- Author --> */}
            <div className="flex flex-col w-[329px] h-[56px] items-center lg:w-[546px] lg:h-[64px]">
              <p className="text-sm/[28px] font-semibold text-[#0A0D12] lg:text-[18px]/8 dark:text-current">
                Sarah Tan 2
              </p>
              <p className="text-sm/[28px] font-semibold text-[#FF623E] lg:text-[18px]/8">
                Product Manager at Finovate
              </p>
            </div>
          </div>
          {/* <!-- Card Icon --> */}
          <img
            src="../src/assets/Icon-Quote.svg"
            alt="Logo Quote"
            className="h-[37.33px] w-auto absolute top-0 left-6 lg:h-[47px]"
          />
          <img
            src="../src/assets/Testi-Sarah.svg"
            alt="Testimony Card"
            className="size-[60px] absolute bottom-0 lg:h-[75px]"
          />
        </div>
        {/* <!-- Card 3 -->
          <!-- Container for Card and Icons --> */}
        <div className="flex flex-col w-auto h-[328px] relative items-center pt-5 pb-6 lg:h-[350px] lg:pt-6 lg:pb-8">
          {/* <!-- Card Container 3--> */}
          <div className="flex flex-col w-[361px] h-[284px] pt-4 px-4 pb-12 gap-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[594px] lg:h-[292px] lg:gap-6 dark:bg-[#0A0D12] dark:border-[#181D27]">
            <div className="flex flex-col w-[329] h-[148px] gap-3 items-center lg:w-[546px] lg:h-[132px]">
              <img
                src="../src/assets/Rating.svg"
                alt="Rating"
                className="w-34 h-6"
              />
              <p className="text-[#0A0D12] font-semibold text-sm/[28px] text-center lg:text-[18px]/8 dark:text-current">
                “The team delivered exactly what we needed — on time and with
                outstanding quality. Their attention to detail and communication
                were top-notch.”
              </p>
            </div>
            {/* <!-- Author --> */}
            <div className="flex flex-col w-[329px] h-[56px] items-center lg:w-[546px] lg:h-[64px]">
              <p className="text-sm/[28px] font-semibold text-[#0A0D12] lg:text-[18px]/8 dark:text-current">
                Sarah Tan 3
              </p>
              <p className="text-sm/[28px] font-semibold text-[#FF623E] lg:text-[18px]/8">
                Product Manager at Finovate
              </p>
            </div>
          </div>
          {/* <!-- Card Icon --> */}
          <img
            src="../src/assets/Icon-Quote.svg"
            alt="Logo Quote"
            className="h-[37.33px] w-auto absolute top-0 left-6 lg:h-[47px]"
          />
          <img
            src="../src/assets/Testi-Sarah.svg"
            alt="Testimony Card"
            className="size-[60px] absolute bottom-0 lg:h-[75px]"
          />
        </div>
        {/* <!-- Right shadowing --> */}
        <div className="hidden lg:flex lg:absolute lg:left-0 lg:top-0 lg:w-[400px] lg:h-[389px] lg:bg-gradient-to-r lg:from-white lg:to-white/0 dark:from-black dark:to-black/0"></div>
        {/* <!-- Left shadowing --> */}
        <div className="hidden lg:flex lg:absolute lg:right-0 lg:top-0 lg:w-[400px] lg:h-[389px] lg:bg-gradient-to-l lg:from-white lg:to-white/0 dark:from-black dark:to-black/0"></div>
      </div>
      {/* <!-- Pagination --> */}
      <img
        src="../src/assets/Pagination.svg"
        alt="Pagination"
        className="w-9 h-2 lg:w-12 lg:h-3"
      />
    </section>
  );
};

export default Testimony;
