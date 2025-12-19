const Footer = () => {
  return (
    <section
      id="footer"
      className="flex flex-col w-[393px] h-[544px] py-6 px-4 gap-2 items-center lg:w-full lg:h-[408px] lg:px-35 lg:py-10"
    >
      {/* <!-- Footer Card --> */}
      <div className="flex flex-col w-[361px] h-[496px] border-[1px] border-[#DFDFDF] rounded-3xl p-5 gap-6 bg-[#FAFAFA] lg:w-[1160px] lg:h-[338px] lg:p-10 lg:gap-[60px] dark:bg-[#0A0D12] dark:border-[#252B37]">
        {/* <!-- Header Area --> */}
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:w-[1080px] lg:h-[88px]">
          {/* <!-- Logo left for mobile --> */}
          <picture className="order-1 lg:order-3">
            <source
              srcSet="../src/assets/D-Your-Logo-White-L.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="../src/assets/Your-Logo-black-L.svg"
              alt="Logo"
              className="w-[141px] h-[32px] lg:w-[158.63px] lg:h-[36px]"
            />
          </picture>

          {/* <!-- Text --> */}
          <p className="order-2 font-bold text-[28px]/[38px] lg:text-[36px]/[44px] dark:text-current lg:w-[281px] lg:h-[88px]">
            LET'S DISCUSS YOUR IDEAS
          </p>
        </div>

        <hr className="w-[321] border-[#DFDFDF] lg:w-[1080px]" />

        {/* <!-- Footer Area --> */}
        <div className="flex flex-col justify-between w-[321px] h-[276px] gap-6 lg:w-[1080px] lg:h-[40px] lg:flex-row lg:justify-between">
          {/* <!-- Navigation Menu --> */}
          <nav className="flex flex-col gap-4 w-auto h-[212px] lg:flex-row lg:w-[447px] lg:h-[36px]">
            <a
              href="#hero"
              className="font-medium text-sm/[28px] text-[#0A0D12] lg:w-[77px] lg:text-4/[30px] lg:px-4 lg:py-2 dark:text-current"
            >
              About
            </a>
            <a
              href="#service"
              className="font-medium text-sm/[28px] text-[#0A0D12] lg:w-[88px] lg:text-4/[30px] lg:px-4 lg:py-2 dark:text-current"
            >
              Service
            </a>
            <a
              href="#portfolio"
              className="font-medium text-sm/[28px] text-[#0A0D12] lg:w-[93px] lg:text-4/[30px] lg:px-4 lg:py-2 dark:text-current"
            >
              Projects
            </a>
            <a
              href="#testimony"
              className="font-medium text-sm/[28px] text-[#0A0D12] lg:w-[125px] lg:text-4/[30px] lg:px-4 lg:py-2 dark:text-current"
            >
              Tertimonials
            </a>
            <a
              href="#faq"
              className="font-medium text-sm/[28px] text-[#0A0D12] lg:w-[64px] lg:text-4/[30px] lg:px-4 lg:py-2 dark:text-current"
            >
              FAQ
            </a>
          </nav>
          {/* <!-- Social Media Icons --> */}
          <picture>
            <source
              srcSet="../src/assets/D-Social-Media-Icons.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="../src/assets/Social Media Icons.svg"
              alt="Sosmed Icons"
              className="size-full flex w-auto h-[40px]"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Footer;
