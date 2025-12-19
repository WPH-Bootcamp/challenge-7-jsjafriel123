export default function StaticPage() {
  return (
    <div className="min-h-screen">
    
<div lang="en" className="scroll-smooth font-['Quicksand']">
    {/* <!-- $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ -->
    <!-- ---------------------------------------PAGE HEADER---------------------------------------------- -->
    <!-- $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ --> */}
    <header className="relative">
      <div
        className="fixed flex items-center justify-between w-full h-[64px] py-6 px-4 bg-white/40 backdrop-blur-md z-50 lg:h-[84px] lg:px-35 dark:bg-black/70"
      >
        <div id="logo" className="flex items-center">
          <a href="#hero">
            <picture>
              <source
                srcset="../src/assets/D-Your-Logo-white-L.svg"
                media="(prefers-color-scheme: dark)"
              />
              <img
                src="../src/assets/Your-Logo-black-L.svg"
                alt="Logo Black Large"
                className="h-[32px] lg: h-[36px]"
              />
            </picture>
          </a>
        </div>
        <!-- =================================================================== -->
        <!-- ==========================HIDDEN Elements========================== -->
        <!-- =================================================================== -->
        <!-- Hidden checkbox to toggle menu -->
        <!-- <input type="checkbox" id="menu-toggle" className="peer sr-only" /> -->
        <input
          type="radio"
          id="rad0"
          name="curtain-switch"
          className="radio0 sr-only"
          checked
        />
        <input
          type="radio"
          id="rad1"
          name="curtain-switch"
          className="radio1 sr-only"
        />
        <input
          type="radio"
          id="rad2"
          name="curtain-switch"
          className="radio2 sr-only"
        />
        <!-- Menu Container -->
        <div
          id="mobile-menu"
          className="slide-curtain absolute top-0 right-0 w-full h-[852px] flex flex-col items-center gap-4 bg-white/90 backdrop-blur-3xl border border-gray-200 shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-300 ease-in-out lg:static lg:flex-row lg:w-auto lg:h-[84px] lg:rounded-none lg:items-center lg:justify-between lg:border-none lg:bg-transparent lg:shadow-none lg:opacity-100 lg:scale-100 lg:pointer-events-auto dark:border-gray-100"
        >
          <!-- peer-checked:opacity-100 peer-checked:scale-100 peer-checked:pointer-events-auto  -->
          <div
            id="menu-header"
            className="w-[393px] h-[64px] border-b-[1px] px-4 py-6 flex justify-between items-center lg:hidden"
          >
            <!-- Logo in header menu -->
            <picture>
              <source
                srcset="../src/assets/D-Your-Logo-white-L.svg"
                media="(prefers-color-scheme: dark)"
              />
              <img
                src="../src/assets/Your-Logo-black-L.svg"
                alt="Logo Black Small"
                className="w-[141px] h-[32px]"
              />
            </picture>

            <label
              for="rad2"
              className="cursor-pointer size-6 font-bold pointer-events-auto"
              >X</label
            >
            <!-- <hr /> -->
          </div>
          <div
            className="w-auto h-[260px] flex flex-col lg:flex-row lg:h-auto lg:justify-between lg:items-center"
          >
            <nav
              className="w-[361px] h-[180px] flex flex-col gap-2 text-sm/[28px] font-semibold text-[#0A0D12] pointer-events-auto lg:flex lg:flex-row lg:justify-between lg:w-[499px] lg:h-[36px] lg:gap-3 dark:text-current"
            >
              <a href="#hero" className="lg:font-semibold lg:text-[16px]/[30px]"
                >About</a
              >
              <a href="#service" className="lg:font-semibold lg:text-[16px]/[30px]"
                >Service</a
              >
              <a
                href="#portfolio"
                className="lg:font-semibold lg:text-[16px]/[30px]"
                >Projects</a
              >
              <a
                href="#testimony"
                className="lg:font-semibold lg:text-[16px]/[30px]"
                >Testimonials</a
              >
              <a href="#faq" className="lg:font-semibold lg:text-[16px]/[30px]"
                >FAQ</a
              >
            </nav>
            <a
              href="#letstalk"
              className="flex w-[361px] h-[44px] p-2 Gap-1 rounded-r-full rounded-l-full bg-[#FF6C37] text-white font-bold mt-10 items-center justify-center pointer-events-auto lg:hidden dark:bg-[#FF623E] dark:shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)]"
            >
              Let's Talk
            </a>
          </div>
        </div>

        <!-- Label acts as the hamburger icon -->
        <label
          for="rad1"
          className="cursor-pointer text-2xl font-black pointer-events-auto lg:hidden"
          >☰</label
        >
        <a
          href="#letstalk"
          className="hidden w-[197px] h-[44px] p-2 Gap-1 rounded-r-full rounded-l-full bg-[#FF6C37] text-white font-bold items-center justify-center pointer-events-auto lg:flex lg:justify-center"
        >
          Let's Talk
        </a>
      </div>
    </header>

    <!--**********************************************************************************-->
    <main className="flex flex-col items-center w-full">
      <!-- item-center effects horizontally in flex-COL direction (Cross Axis) -->
      <!------------------------------------------------------------------------------------>
      <!------------------------------- HERO SECTION --------------------------------------->
      <!------------------------------------------------------------------------------------>
      <section
        id="hero"
        className="flex flex-col items-center w-[393px] pt-32 px-4 lg:w-full lg:pl-35 lg:pr-0.5 lg:grid lg:grid-cols-1 lg:grid-rows-1 lg:relative lg:pt-0"
      >
        <!-- Hero Text + Button -->
        <div
          id="hero-text"
          className="flex flex-col w-[361px] min-h-[240px] text-left lg:w-[653px] lg:min-h-75 lg:col-[1] lg:row-[1] lg:justify-self-start lg:z-20"
        >
          <h1 className="font-bold text-4xl/[44px] lg:text-14/17">
            Your Tech Partner for
            <span className="text-[#FF6C37]">Smarter Growth</span>
          </h1>
          <p className="text-base/[30px] font-semibold lg:text-5/[34px]">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
          <a
            href="#letstalk"
            className="flex w-[361px] h-[44px] p-2 Gap-1 rounded-r-full rounded-l-full bg-[#FF6C37] text-white font-bold mt-10 items-center justify-center lg:w-50 lg:h-12"
          >
            Let's Talk
          </a>
        </div>
        <!-- Hero Image -->
        <div
          id="hero-image"
          className="lg:col-[1] lg:row-[1] lg:justify-self-end lg:z-10"
        >
          <picture>
            <source
              srcset="../src/assets/D-Image-Hero.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="../src/assets/Image-Hero.svg"
              alt="Hero Image"
              className="size-[391px] lg:size-[747px] lg:p-10"
            />
          </picture>
        </div>
      </section>
      <!------------------------------------------------------------------------------------>
      <!----------------------------- CLIENT SECTION --------------------------------------->
      <!------------------------------------------------------------------------------------>
      <section
        id="client"
        className="flex flex-col w-[393px] h-[144px] gap-6 justify-between items-center lg:w-auto lg:h-[236px]"
      >
        <p className="h-[40px] text-[16px]/[30px] font-bold lg:text-6/9">
          Trusted by Global Innovators & Leading Brands
        </p>

        <div
          id="scrolling-logo"
          className="relative flex items-center w-[393px] h-[128px] overflow-hidden lg:w-full lg:h-50"
        >
          <!-- <marquee behavior="alternate" direction=""> -->
          <div
            className="inline-block animate-marquee-alternate"
            style="--move-distance: 2800px; --speed: 12s"
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
          <div
            className="absolute left-0 top-0 w-[46px] h-[98px] bg-gradient-to-r from-white to-white/0 lg:w-[260px] lg:h-[200px] dark:from-black dark:to-black/0"
          ></div>
          <div
            className="absolute right-0 top-0 w-[46px] h-[98px] bg-gradient-to-l from-white to-white/0 lg:w-[260px] lg:h-[200px] dark:from-black dark:to-black/0"
          ></div>
        </div>
      </section>
      <!------------------------------------------------------------------------------------>
      <!----------------------------- ACHIEVEMENT SECTION ---------------------------------->
      <!------------------------------------------------------------------------------------>
      <section
        id="achievement"
        className="flex flex-col w-[393px] h-[688px] gap-6 px-4 py-20 items-center lg:w-full lg:gap-16 lg:h-[598px] lg:px-35"
      >
        <div
          id="achievement-header"
          className="flex flex-col w-[361px] h-[143px] gap-[11px] items-center lg:w-[1160px] lg:h-[99px]"
        >
          <h2
            className="w-auto h-[76px] font-bold text-[28px] text-[#0A0D12] text-center lg:h-14 lg:text-[40px]/14 dark:text-current"
          >
            End-to-End IT Solutions That Drive Results
          </h2>
          <p
            className="w-auto h-[56px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-8 lg:text-[18px]/8"
          >
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>
        <div
          id="achievement-cards"
          className="grid grid-cols-2 gap-4 lg:w-[1160px] lg:h-[275px] lg:flex lg:flex-row lg:gap-5"
        >
          <!-- Achievement 1 -->
          <div
            className="flex flex-col justify-center items-center size-[172.5px] rounded-full bg-[#FAFAFA] border-[#DEDCDC] lg:size-[275px] dark:bg-[#0A0D12] dark:border-[#181D27]"
          >
            <h2
              className="w-[140px] h-[44px] text-[36px]/[44px] font-bold text-center text-[#FF623E] lg:w-[243px] lg:h-[60px] lg:text-[48px]/[60px]"
            >
              50+
            </h2>
            <p
              className="text-[14px]/[28px] font-semibold text-[#0A0D12] text-center lg:text-[20px]/[34px] dark:text-current"
            >
              Projects Delivered
            </p>
          </div>
          <!-- Achievement 2 -->
          <div
            className="flex flex-col justify-center items-center size-[172.5px] rounded-full bg-[#FAFAFA] border-[#DEDCDC] lg:size-[275px] dark:bg-[#0A0D12] dark:border-[#181D27]"
          >
            <h2
              className="w-[140px] h-[44px] text-[36px]/[44px] font-bold text-center text-[#FF623E] lg:w-[243px] lg:h-[60px] lg:text-[48px]/[60px]"
            >
              5+
            </h2>
            <p
              className="text-[14px]/[28px] font-semibold text-[#0A0D12] text-center lg:text-[20px]/[34px] dark:text-current"
            >
              Years of Experience
            </p>
          </div>

          <!-- Achievement 3 -->
          <div
            className="flex flex-col justify-center items-center size-[172.5px] rounded-full bg-[#FAFAFA] border-[#DEDCDC] lg:size-[275px] dark:bg-[#0A0D12] dark:border-[#181D27]"
          >
            <h2
              className="w-[140px] h-[44px] text-[36px]/[44px] font-bold text-center text-[#FF623E] lg:w-[243px] lg:h-[60px] lg:text-[48px]/[60px]"
            >
              10+
            </h2>
            <p
              className="text-[14px]/[28px] font-semibold text-[#0A0D12] text-center lg:text-[20px]/[34px] dark:text-current"
            >
              Industry Awards Won
            </p>
          </div>

          <!-- Achievement 4 -->
          <div
            className="flex flex-col justify-center items-center size-[172.5px] rounded-full bg-[#FAFAFA] border-[#DEDCDC] lg:size-[275px] dark:bg-[#0A0D12] dark:border-[#181D27]"
          >
            <h2
              className="w-[140px] h-[44px] text-[36px]/[44px] font-bold text-center text-[#FF623E] lg:w-[243px] lg:h-[60px] lg:text-[48px]/[60px]"
            >
              100%
            </h2>
            <p
              className="text-[14px]/[28px] font-semibold text-[#0A0D12] text-center lg:text-[20px]/[34px] dark:text-current"
            >
              Client Satisfaction Rate
            </p>
          </div>
        </div>
      </section>
      <!------------------------------------------------------------------------------------>
      <!------------------------------- PROCESS SECTION ------------------------------------>
      <!------------------------------------------------------------------------------------>
      <section
        id="process"
        className="flex flex-col w-[393px] h-[853px] gap-6 px-4 py-10 items-center lg:w-full lg:h-[1099px] lg:gap-16 lg:px-[140px] lg:py-20"
      >
        <!-- -------------- -->
        <!-- Process Header -->
        <!-- -------------- -->

        <div
          id="process-header"
          className="flex flex-col w-[361px] h-[105px] gap-[11px] px-1 justify-center lg:w-[1160px] lg:h-[99px]"
        >
          <h2
            className="w-auto h-[38px] font-bold text-[28px]/[38px] text-[#0A0D12] text-center lg:h-14 lg:text-10/14 dark:text-current"
          >
            Our Process
          </h2>
          <p
            className="w-auto h-[56px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-8 lg:text-[18px]/[32px]"
          >
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        <!-- ------------- -->
        <!-- Process Steps -->
        <!-- ------------- -->
        <div className="relative">
          <div
            className="absolute top-[44px] left-[18px] flex w-0 h-[554px] border border-[#DFDFDF] z-0 lg:left-[578px] lg:h-[680px] dark:border-[#252B37]"
          ></div>

          <div
            id="process-steps"
            className="w-[361px] h-[644px] grid grid-cols-[40px_auto] gap-4 justify-center items-center z-10 lg:w-[1160px] lg:h-[776px] lg:grid-cols-[1fr_52px_1fr]"
          >
            <!-- Process Number 1-->
            <p
              className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:hidden"
            >
              1
            </p>
            <!-- Accordion 1-->
            <div
              className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[62px] w-[280px] gap-1 justify-center"
              >
                <h3 className="font-bold text-base lg:text-xl/[34px]">
                  Discovery & Consultation
                </h3>
                <p
                  className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Understand Your Needs & Goals
                </p>
              </div>
              <a href="#" className="font-bold text-2xl">^</a>
            </div>
            <!-- Process Number 1 (LG)-->
            <p
              className="hidden size-12 bg-[#FF623E] rounded-full items-center justify-center text-[16px] text-white bold z-10 lg:flex"
            >
              1
            </p>
            <!-- dummy box -->
            <div className="hidden w-[532px] h-[116px] lg:flex"></div>
            <!-- Process Number 2-->
            <!-- dummy box -->
            <div className="hidden w-[532px] h-[116px] lg:flex"></div>
            <p
              className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:size-12 lg:text-[16px]"
            >
              2
            </p>
            <!-- Accordion 2-->
            <div
              className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[62px] w-[280px] gap-1 justify-center"
              >
                <h3 className="font-bold text-base lg:text-xl/[34px]">
                  Planning & Strategy
                </h3>
                <p
                  className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Build a Clear, Scalable Roadmap
                </p>
              </div>
              <a href="#" className="font-bold text-2xl">^</a>
            </div>
            <!-- Process Number 3-->
            <p
              className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:hidden"
            >
              3
            </p>
            <!-- Accordion 3-->
            <div
              className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[62px] w-[280px] gap-1 justify-center"
              >
                <h3 className="font-bold text-base lg:text-xl/[34px]">
                  Design & Prototyping
                </h3>
                <p
                  className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Craft UX That Converts
                </p>
              </div>
              <a href="#" className="font-bold text-2xl">^</a>
            </div>
            <!-- Process Number 3 (LG)-->
            <p
              className="hidden size-12 bg-[#FF623E] rounded-full items-center justify-center text-[16px] text-white bold z-10 lg:flex"
            >
              3
            </p>
            <!-- dummy box -->
            <div className="hidden w-[532px] h-[116px] lg:flex"></div>

            <!-- Process Number 4-->
            <!-- dummy box -->
            <div className="hidden w-[532px] h-[116px] lg:flex"></div>

            <p
              className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:size-12 lg:text-[16px]"
            >
              4
            </p>
            <!-- Accordion 4-->
            <div
              className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[62px] w-[280px] gap-1 justify-center"
              >
                <h3 className="font-bold text-base lg:text-xl/[34px]">
                  Development & Implementation
                </h3>
                <p
                  className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Deliver With Speed & Precision
                </p>
              </div>
              <a href="#" className="font-bold text-2xl">^</a>
            </div>
            <!-- Process Number 5-->
            <p
              className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:hidden"
            >
              5
            </p>
            <!-- Accordion 5-->
            <div
              className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[62px] w-[280px] gap-1 justify-center"
              >
                <h3 className="font-bold text-base lg:text-xl/[34px]">
                  Testing & Optimization
                </h3>
                <p
                  className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Ensure Quality at Every Step
                </p>
              </div>
              <a href="#" className="font-bold text-2xl">^</a>
            </div>
            <p
              className="hidden size-12 bg-[#FF623E] rounded-full items-center justify-center text-[16px] text-white bold z-10 lg:flex"
            >
              5
            </p>
            <!-- dummy box -->
            <div className="hidden w-[532px] h-[116px] lg:flex"></div>
            <!-- Process Number 6-->
            <!-- dummy box -->
            <div className="hidden w-[532px] h-[116px] lg:flex"></div>

            <p
              className="flex size-10 bg-[#FF623E] rounded-full items-center justify-center text-xs text-white bold z-10 lg:size-12 lg:text-[16px]"
            >
              6
            </p>
            <!-- Accordion 6-->
            <div
              className="flex justify-between w-[309px] h-[94px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:h-[116px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[62px] w-[280px] gap-1 justify-center"
              >
                <h3 className="font-bold text-base lg:text-xl/[34px]">
                  Launch & Growth
                </h3>
                <p
                  className="text-[#717680] font-semibold text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Scale, Measure & Improve Continuously
                </p>
              </div>
              <a href="#" className="font-bold text-2xl">^</a>
            </div>
          </div>
        </div>
      </section>

      <!------------------------------------------------------------------------------------>
      <!------------------------------- SERVICE SECTION ------------------------------------>
      <!------------------------------------------------------------------------------------>
      <section
        id="service"
        className="flex flex-col w-[393px] h-[1921px] gap-10 px-4 py-10 items-center lg:w-full lg:h-[949px] lg:gap-16 lg:px-[140px] lg:py-20"
      >
        <!-- -------------- -->
        <!-- Service Header -->
        <!-- -------------- -->

        <div
          id="service-header"
          className="flex flex-col w-[361px] h-[115px] gap-[11px] justify-center lg:w-[1160px] lg:h-[99px]"
        >
          <h2
            className="w-auto h-[76px] font-bold text-[28px]/[38px] text-[#0A0D12] text-center lg:h-14 lg:text-10/14 dark:text-current"
          >
            Smart IT Solutions That Grow With You
          </h2>
          <p
            className="w-auto h-[28px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-8 lg:text-[18px]/[32px]"
          >
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        <!-- ------------- -->
        <!-- Service Cards -->
        <!-- ------------- -->

        <div
          id="service-cards"
          className="w-[361px] h-auto grid grid-cols-1 gap-2 justify-center items-center lg:w-[1160px] lg:grid-cols-3 lg:gap-10"
        >
          <!-- Card Container 1-->
          <div
            className="w-[361px] h-[160px] relative flex items-end lg:w-[373.33px] lg:h-[210px]"
          >
            <!-- Card Text 1-->
            <div
              className="flex items-end w-[361px] h-[130px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[62px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]"
              >
                <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                  Web Development
                </h3>
                <p
                  className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Build fast, scalable, and SEO-friendly websites.
                </p>
              </div>
            </div>
            <!-- Card Icon 1 -->
            <img
              src="../src/assets/Service-Icon 1.svg"
              alt="Logo"
              className="size-16 absolute top-2.5 left-4 lg:size-20 lg:top-0"
            />
          </div>

          <!-- Card Container 2-->
          <div
            className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]"
          >
            <!-- Card Text 2-->
            <div
              className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]"
              >
                <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                  Mobile App Development
                </h3>
                <p
                  className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Native & cross-platform apps tailored to user needs.
                </p>
              </div>
            </div>
            <!-- Card Icon 2 -->
            <img
              src="../src/assets/Service-Icon 2.svg"
              alt="Logo"
              className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
            />
          </div>

          <!-- Card Container 3-->
          <div
            className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]"
          >
            <!-- Card Text 3-->
            <div
              className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]"
              >
                <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                  UI/UX Design
                </h3>
                <p
                  className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Delight users with intuitive and beautiful interfaces
                </p>
              </div>
            </div>
            <!-- Card Icon 3 -->
            <img
              src="../src/assets/Service-Icon 3.svg"
              alt="Logo"
              className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
            />
          </div>

          <!-- Card Container 4-->
          <div
            className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]"
          >
            <!-- Card Text 4-->
            <div
              className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]"
              >
                <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                  Cloud Solutions
                </h3>
                <p
                  className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Secure and flexible cloud infrastructure for your growth.
                </p>
              </div>
            </div>
            <!-- Card Icon 4 -->
            <img
              src="../src/assets/Service-Icon 4.svg"
              alt="Logo"
              className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
            />
          </div>
          <!-- Card Container 5-->
          <div
            className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]"
          >
            <!-- Card Text 5-->
            <div
              className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]"
              >
                <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                  Software Development
                </h3>
                <p
                  className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Custom solutions built around your business logic.
                </p>
              </div>
            </div>
            <!-- Card Icon 5 -->
            <img
              src="../src/assets/Service-Icon 5.svg"
              alt="Logo"
              className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
            />
          </div>
          <!-- Card Container 6-->
          <div
            className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]"
          >
            <!-- Card Text 6-->
            <div
              className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]"
              >
                <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                  IT Infrastructure
                </h3>
                <p
                  className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Scale your backend with reliable tech foundations.
                </p>
              </div>
            </div>
            <!-- Card Icon 6 -->
            <img
              src="../src/assets/Service-Icon 6.svg"
              alt="Logo"
              className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
            />
          </div>
          <!-- Card Container 7-->
          <div
            className="w-[361px] h-[168px] relative flex items-end lg:w-[373.33px] lg:h-[210px]"
          >
            <!-- Card Text 7-->
            <div
              className="flex items-end w-[361px] h-[130px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[62px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]"
              >
                <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                  Cybersecurity Services
                </h3>
                <p
                  className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Stay protected with enterprise-grade security.
                </p>
              </div>
            </div>
            <!-- Card Icon 7 -->
            <img
              src="../src/assets/Service-Icon 7.svg"
              alt="Logo"
              className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
            />
          </div>
          <!-- Card Container 8-->
          <div
            className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]"
          >
            <!-- Card Text 8-->
            <div
              className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]"
              >
                <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                  QA Solutions
                </h3>
                <p
                  className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Ensure performance with rigorous testing frameworks.
                </p>
              </div>
            </div>
            <!-- Card Icon 8 -->
            <img
              src="../src/assets/Service-Icon 8.svg"
              alt="Logo"
              className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
            />
          </div>
          <!-- Card Container 9-->
          <div
            className="w-[361px] h-[188px] relative flex items-end lg:w-[373.33px] lg:h-[210px]"
          >
            <!-- Card Text 9-->
            <div
              className="flex items-end w-[361px] h-[158px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]"
            >
              <div
                className="flex flex-col h-[90px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]"
              >
                <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
                  IT Consulting & Support
                </h3>
                <p
                  className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px]"
                >
                  Make smarter tech decisions with expert guidance.
                </p>
              </div>
            </div>
            <!-- Card Icon 9 -->
            <img
              src="../src/assets/Service-Icon 9.svg"
              alt="Logo"
              className="size-16 absolute top-2.5 left-4 lg:size-20 lg:size-20 lg:top-0"
            />
          </div>
        </div>
      </section>
      <!------------------------------------------------------------------------------------>
      <!----------------------------- INDUSTRY SECTION ------------------------------------->
      <!------------------------------------------------------------------------------------>
      <section
        id="industry"
        className="flex flex-col w-[393px] h-[655px] gap-6 px-4 py-10 items-center lg:w-full lg:h-[758px] lg:px-35 lg:py-20 lg:gap-16"
      >
        <!-- -------------- -->
        <!-- Industry Header -->
        <!-- -------------- -->

        <div
          id="industry-header"
          className="flex flex-col w-[361px] h-[109px] gap-[11px] justify-center lg:w-[1160px] lg:h-[99px]"
        >
          <h2
            className="w-auto h-[42px] font-bold text-[32px]/[42px] text-[#0A0D12] lg:h-14 lg:text-10/14 dark:text-current"
          >
            Built for Your Industry
          </h2>
          <p
            className="w-auto h-[56px] font-medium text-sm/[28px] text-[#717680] lg:h-8 lg:text-[18px]/[32px]"
          >
            We’ve helped companies across industries launch smarter, faster, and
            more securely.
          </p>
        </div>
        <!-- ------------- -->
        <!-- Industry List -->
        <!-- ------------- -->
        <div
          className="grid grid-cols-1 lg:w-[1160px] lg:h-[435px] lg:grid-cols-[256px_1fr]"
        >
          <div className="flex flex-col justify-between w-[361px] h-[114px] gap-3">
            <div
              className="flex flex-row items-center w-auto h-[30px] gap-1.5 lg:h-[32px]"
            >
              <p className="w-1 h-6 bg-[#FF623E] lg:h-8"></p>
              <p className="text-[16px]/[30px] font-bold lg:text-[20px]/[34px]">
                Fintech
              </p>
            </div>
            <div
              className="flex flex-row items-center w-auto h-[30px] gap-1.5 lg:h-[32px]"
            >
              <p className="w-1 h-6 bg-[#AAAAAA] lg:h-8"></p>
              <p
                className="text-[16px]/[30px] font-bold text-[#AAAAAA] lg:text-[20px]/[34px]"
              >
                E-Commerce
              </p>
            </div>
            <div
              className="flex flex-row items-center w-auto h-[30px] gap-1.5 lg:h-[32px]"
            >
              <p className="w-1 h-6 bg-[#AAAAAA] lg:h-8"></p>
              <p
                className="text-[16px]/[30px] font-bold text-[#AAAAAA] lg:text-[20px]/[34px]"
              >
                Healtcare
              </p>
            </div>
          </div>
          <!-- ------------- -->
          <!-- Industry Detail -->
          <!-- ------------- -->
          <div
            className="flex flex-col w-[361px] h-[304px] gap-5 lg:w-[840px] lg:h-[435px]"
          >
            <p
              className="h-[84px] text-[14px]/[28px] text-[#0A0D12] lg:h-[64px] lg:text-[18px]/[32px] dark:text-[#FDFDFD]"
            >
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

      <!------------------------------------------------------------------------------------>
      <!----------------------------- PORTFOLIO SECTION ------------------------------------->
      <!------------------------------------------------------------------------------------>
      <section
        id="portfolio"
        className="flex flex-col w-[393px] h-[1568px] gap-6 px-4 py-10 items-center lg:w-full lg:h-[772px] lg:px-35 lg:py-20 lg:gap-16"
      >
        <!-- ---------------- -->
        <!-- Portfolio Header -->
        <!-- ---------------- -->
        <div
          id="portfolio-header"
          className="flex flex-col w-[361px] h-[143px] gap-[11px] items-center lg:w-[1160px] lg:h-[99px]"
        >
          <h2
            className="w-auto h-[76px] font-bold text-[28px]/[38px] text-[#0A0D12] text-center lg:h-14 lg:text-10/14 dark:text-current"
          >
            From Vision to Launch! Projects We’re Proud Of
          </h2>
          <p
            className="w-auto h-[56px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-8 lg:text-[18px]/[32px]"
          >
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>
        <!-- --------- -->
        <!-- Portfolio -->
        <!-- --------- -->
        <!-- Card Container -->
        <div
          className="w-auto h-[1321px] grid grid-cols-1 gap-5 lg:w-[1159px] lg:h-[449px] lg:grid-cols-3"
        >
          <!-- Card 1 -->
          <div
            className="flex flex-col w-auto h-[427px] gap-2 lg:h-[449px] lg:gap-3"
          >
            <img
              src="../src/assets/Portfolio 1.svg"
              alt="Portfolio 1"
              className="size-[361px] rounded-2xl lg:size-[373px]"
            />
            <div className="w-auto h-[58px] lg:h-[64px]">
              <p
                className="text-sm/[28px] text-[#FF623E] font-medium lg:text-[16px]/[30px]"
              >
                Landing Page
              </p>
              <p
                className="text-[16px]/[30px] text-[#0A0D12] font-bold lg:text-[20px]/[34px] dark:text-current"
              >
                Portofolio 1
              </p>
            </div>
          </div>
          <!-- Card 2 -->
          <div
            className="flex flex-col w-auto h-[427px] gap-2 lg:h-[449px] lg:gap-3"
          >
            <img
              src="../src/assets/Portfolio 2.svg"
              alt="Portfolio 2"
              className="size-[361px] rounded-2xl lg:size-[373px]"
            />
            <div className="w-auto h-[58px] lg:h-[64px]">
              <p
                className="text-sm/[28px] text-[#FF623E] font-medium lg:text-[16px]/[30px]"
              >
                Landing Page
              </p>
              <p
                className="text-[16px]/[30px] text-[#0A0D12] font-bold lg:text-[20px]/[34px] dark:text-current"
              >
                Portofolio 2
              </p>
            </div>
          </div>
          <!-- Card 3 -->
          <div
            className="flex flex-col w-auto h-[427px] gap-2 lg:h-[449px] lg:gap-3"
          >
            <img
              src="../src/assets/Portfolio 3.svg"
              alt="Portfolio 3"
              className="size-[361px] rounded-2xl lg:size-[373px]"
            />
            <div className="w-auto h-[58px] lg:h-[64px]">
              <p
                className="text-sm/[28px] text-[#FF623E] font-medium lg:text-[16px]/[30px]"
              >
                Landing Page
              </p>
              <p
                className="text-[16px]/[30px] text-[#0A0D12] font-bold lg:text-[20px]/[34px] dark:text-current"
              >
                Portofolio 3
              </p>
            </div>
          </div>
        </div>
      </section>

      <!------------------------------------------------------------------------------------>
      <!----------------------------- TESTIMONY SECTION ------------------------------------->
      <!------------------------------------------------------------------------------------>
      <section
        id="testimony"
        className="flex flex-col w-[393px] h-[583px] gap-8 py-8 items-center lg:w-full lg:h-[723px] lg:px-0 lg:py-16 lg:gap-16"
      >
        <!-- ---------------- -->
        <!-- Testimony Header -->
        <!-- ---------------- -->
        <div
          id="portfolio-header"
          className="flex flex-col w-[361px] h-[115px] gap-[11px] items-center lg:w-full lg:h-[99px]"
        >
          <h2
            className="w-auto h-[76px] font-bold text-[28px]/[38px] text-[#0A0D12] text-center lg:h-14 lg:text-10/14 dark:text-current"
          >
            What Partners Say About Working With Us
          </h2>
          <p
            className="w-auto h-[28px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-8 lg:text-[18px]/[32px]"
          >
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>
        <!-- --------- -->
        <!-- Testimony -->
        <!-- --------- -->
        <!-- Testimonial Cards -->
        <div
          className="w-full h-auto flex flex-row justify-center gap-4 overflow-hidden lg:relative"
        >
          <!-- Card 1 -->
          <!-- Container for Card and Icons -->
          <div
            className="flex flex-col w-auto h-[328px] relative items-center pt-5 pb-6 lg:h-[350px] lg:pt-6 lg:pb-8"
          >
            <!-- Card Container 1-->
            <div
              className="flex flex-col w-[361px] h-[284px] pt-4 px-4 pb-12 gap-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[594px] lg:h-[292px] lg:gap-6 dark:bg-[#0A0D12] dark:border-[#181D27]"
            >
              <div
                className="flex flex-col w-[329] h-[148px] gap-3 items-center lg:w-[546px] lg:h-[132px]"
              >
                <img
                  src="../src/assets/Rating.svg"
                  alt="Rating"
                  className="w-34 h-6"
                />
                <p
                  className="text-[#0A0D12] font-semibold text-sm/[28px] text-center lg:text-[18px]/8 dark:text-current"
                >
                  “The team delivered exactly what we needed — on time and with
                  outstanding quality. Their attention to detail and
                  communication were top-notch.”
                </p>
              </div>
              <!-- Author -->
              <div
                className="flex flex-col w-[329px] h-[56px] items-center lg:w-[546px] lg:h-[64px]"
              >
                <p
                  className="text-sm/[28px] font-semibold text-[#0A0D12] lg:text-[18px]/8 dark:text-current"
                >
                  Sarah Tan 1
                </p>
                <p
                  className="text-sm/[28px] font-semibold text-[#FF623E] lg:text-[18px]/8"
                >
                  Product Manager at Finovate
                </p>
              </div>
            </div>
            <!-- Card Icon -->
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
          <!-- Card 2 -->
          <!-- Container for Card and Icons -->
          <div
            className="flex flex-col w-auto h-[328px] relative items-center pt-5 pb-6 lg:h-[350px] lg:pt-6 lg:pb-8"
          >
            <!-- Card Container 1-->
            <div
              className="flex flex-col w-[361px] h-[284px] pt-4 px-4 pb-12 gap-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[594px] lg:h-[292px] lg:gap-6 dark:bg-[#0A0D12] dark:border-[#181D27]"
            >
              <div
                className="flex flex-col w-[329] h-[148px] gap-3 items-center lg:w-[546px] lg:h-[132px]"
              >
                <img
                  src="../src/assets/Rating.svg"
                  alt="Rating"
                  className="w-34 h-6"
                />
                <p
                  className="text-[#0A0D12] font-semibold text-sm/[28px] text-center lg:text-[18px]/8 dark:text-current"
                >
                  “The team delivered exactly what we needed — on time and with
                  outstanding quality. Their attention to detail and
                  communication were top-notch.”
                </p>
              </div>
              <!-- Author -->
              <div
                className="flex flex-col w-[329px] h-[56px] items-center lg:w-[546px] lg:h-[64px]"
              >
                <p
                  className="text-sm/[28px] font-semibold text-[#0A0D12] lg:text-[18px]/8 dark:text-current"
                >
                  Sarah Tan 2
                </p>
                <p
                  className="text-sm/[28px] font-semibold text-[#FF623E] lg:text-[18px]/8"
                >
                  Product Manager at Finovate
                </p>
              </div>
            </div>
            <!-- Card Icon -->
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
          <!-- Card 3 -->
          <!-- Container for Card and Icons -->
          <div
            className="flex flex-col w-auto h-[328px] relative items-center pt-5 pb-6 lg:h-[350px] lg:pt-6 lg:pb-8"
          >
            <!-- Card Container 1-->
            <div
              className="flex flex-col w-[361px] h-[284px] pt-4 px-4 pb-12 gap-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[594px] lg:h-[292px] lg:gap-6 dark:bg-[#0A0D12] dark:border-[#181D27]"
            >
              <div
                className="flex flex-col w-[329] h-[148px] gap-3 items-center lg:w-[546px] lg:h-[132px]"
              >
                <img
                  src="../src/assets/Rating.svg"
                  alt="Rating"
                  className="w-34 h-6"
                />
                <p
                  className="text-[#0A0D12] font-semibold text-sm/[28px] text-center lg:text-[18px]/8 dark:text-current"
                >
                  “The team delivered exactly what we needed — on time and with
                  outstanding quality. Their attention to detail and
                  communication were top-notch.”
                </p>
              </div>
              <!-- Author -->
              <div
                className="flex flex-col w-[329px] h-[56px] items-center lg:w-[546px] lg:h-[64px]"
              >
                <p
                  className="text-sm/[28px] font-semibold text-[#0A0D12] lg:text-[18px]/8 dark:text-current"
                >
                  Sarah Tan 3
                </p>
                <p
                  className="text-sm/[28px] font-semibold text-[#FF623E] lg:text-[18px]/8"
                >
                  Product Manager at Finovate
                </p>
              </div>
            </div>
            <!-- Card Icon -->
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
          <!-- Right shadowing -->
          <div
            className="hidden lg:flex lg:absolute lg:left-0 lg:top-0 lg:w-[400px] lg:h-[389px] lg:bg-gradient-to-r lg:from-white lg:to-white/0 dark:from-black dark:to-black/0"
          ></div>
          <!-- Left shadowing -->
          <div
            className="hidden lg:flex lg:absolute lg:right-0 lg:top-0 lg:w-[400px] lg:h-[389px] lg:bg-gradient-to-l lg:from-white lg:to-white/0 dark:from-black dark:to-black/0"
          ></div>
        </div>
        <!-- Pagination -->
        <img
          src="../src/assets/Pagination.svg"
          alt="Pagination"
          className="w-9 h-2 lg:w-12 lg:h-3"
        />
      </section>
      <!------------------------------------------------------------------------------------>
      <!----------------------------- FAQ SECTION ------------------------------------->
      <!------------------------------------------------------------------------------------>
      <section
        id="faq"
        className="flex flex-col w-[393px] h-[1083px] gap-6 px-4 py-10 items-center lg:h-[822px] lg:gap-12 lg:px-20 lg:py-30"
      >
        <!-- ---------------- -->
        <!----- Q&A Header ----->
        <!-- ---------------- -->
        <div
          id="faq-header"
          className="flex flex-col w-[361px] h-[82px] gap-4 lg:flex-row lg:w-[1200px] lg:h-[112px] lg:gap-0 lg:justify-between lg:items-end"
        >
          <h2
            className="w-auto h-[38px] font-bold text-[28px]/[38px] text-[#0A0D12] lg:h-auto lg:w-[331px] lg:text-[40px]/[56px] dark:text-current"
          >
            Need Help? Start Here.
          </h2>
          <p
            className="w-auto h-[28px] font-medium text-sm/[28px] text-[#717680] lg:h-[64px] lg:w-[245px] lg:text-[18px]/[32px]"
          >
            Everything you need to know — all in one place.
          </p>
        </div>
        <!-- ----------------- -->
        <!----- FAQ Line ----->
        <!-- ----------------- -->
        <hr className="w-[361px] border border-[#DFDFDF] lg:w-[1200px]" />
        <!-- ----------------- -->
        <!----- FAQ Content ----->
        <!-- ----------------- -->
        <div
          className="flex w-[361px] flex-col gap-6 lg:flex-row lg:justify-between lg:w-[1200px] lg:h-[454px] lg:gap-7"
        >
          <!-- Accordions -->
          <div className="w-[393] lg:w-[798px]">
            <!-- FAQ 1 (Open) -->
            <label className="group block w-auto gap-2 pb-6 cursor-pointer">
              <input
                type="radio"
                name="accordion"
                className="sr-only peer"
                checked
              />
              <!-- sr-only hide the button but keeping the function -->
              <!-- Header -->
              <div
                className="flex flex-row w-auto h-auto gap-2 justify-between select-none"
              >
                <p
                  className="w-[337px] h-[32px] font-bold text-[18px] lg:w-[5w-28px] lg:h-[36px] lg:text-2xl/9"
                >
                  What services do you offer?
                </p>

                <picture
                  className="transition-transform duration-300 group-has-[:checked]:hidden"
                >
                  <source
                    srcset="../src/assets/D-Icon-(+).svg"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="../src/assets/Icon-(+).svg"
                    alt="Icon Open"
                    className="size-6 p-1"
                  />
                </picture>

                <picture
                  className="hidden transition-transform duration-300 group-has-[:checked]:block"
                >
                  <source
                    srcset="../src/assets/D-Icon-(-).svg"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="../src/assets/Icon-(-).svg"
                    alt="Icon Close"
                    className="size-6 p-1"
                  />
                </picture>
              </div>
              <!-- Subtitle -->
              <div
                className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-all duration-300 ease-in-out overflow-hidden"
              >
                <div className="overflow-hidden">
                  <p
                    className="text-sm/[28px] font-medium text-[#717680] lg:text-5/[34px]"
                  >
                    We provide custom web/app development, cloud solutions,
                    UX/UI design, and more.
                  </p>
                </div>
              </div>
            </label>

            <hr className="w-[361px] border border-[#DFDFDF] lg:w-[798px]" />
            <!-- FAQ 2 (Close) -->
            <label className="group block w-auto gap-2 py-6 cursor-pointer">
              <input type="radio" name="accordion" className="sr-only peer" />
              <!-- sr-only hide the button but keeping the function -->
              <!-- Header -->
              <div
                className="flex flex-row w-auto h-auto gap-2 justify-between select-none"
              >
                <p
                  className="w-[337px] h-auto font-bold text-[18px] lg:w-[528px] lg:h-[36px] lg:text-2xl/9"
                >
                  How do I know if this is right for my business?
                </p>
                <picture
                  className="transition-transform duration-300 group-has-[:checked]:hidden"
                >
                  <source
                    srcset="../src/assets/D-Icon-(+).svg"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="../src/assets/Icon-(+).svg"
                    alt="Icon Open"
                    className="size-6 p-1"
                  />
                </picture>

                <picture
                  className="hidden transition-transform duration-300 group-has-[:checked]:block"
                >
                  <source
                    srcset="../src/assets/D-Icon-(-).svg"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="../src/assets/Icon-(-).svg"
                    alt="Icon Close"
                    className="size-6 p-1"
                  />
                </picture>
              </div>
              <!-- Subtitle -->
              <div
                className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-all duration-300 ease-in-out overflow-hidden"
              >
                <div className="overflow-hidden">
                  <p
                    className="text-sm/[28px] font-medium text-[#717680] lg:text-5/[34px]"
                  >
                    Book a free consult - we'll assess your goals and recommend
                    the right approach.
                  </p>
                </div>
              </div>
            </label>

            <hr className="w-[361px] border border-[#DFDFDF] lg:w-[798px]" />
            <!-- FAQ 3 (Close) -->
            <label className="group block w-auto gap-2 py-6 cursor-pointer">
              <input type="radio" name="accordion" className="sr-only peer" />
              <!-- sr-only hide the button but keeping the function -->
              <!-- Header -->
              <div
                className="flex flex-row w-auto h-auto gap-2 justify-between select-none"
              >
                <p
                  className="w-[337px] h-auto font-bold text-[18px] lg:w-[528px] lg:h-[36px] lg:text-2xl/9"
                >
                  How much does a project cost?
                </p>
                <picture
                  className="transition-transform duration-300 group-has-[:checked]:hidden"
                >
                  <source
                    srcset="../src/assets/D-Icon-(+).svg"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="../src/assets/Icon-(+).svg"
                    alt="Icon Open"
                    className="size-6 p-1"
                  />
                </picture>

                <picture
                  className="hidden transition-transform duration-300 group-has-[:checked]:block"
                >
                  <source
                    srcset="../src/assets/D-Icon-(-).svg"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="../src/assets/Icon-(-).svg"
                    alt="Icon Close"
                    className="size-6 p-1"
                  />
                </picture>
              </div>
              <!-- Subtitle -->
              <div
                className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-all duration-300 ease-in-out overflow-hidden"
              >
                <div className="overflow-hidden">
                  <p
                    className="text-sm/[28px] font-medium text-[#717680] lg:text-5/[34px]"
                  >
                    Every project is different. Let's talk about your needs to
                    get a tailored estimate.
                  </p>
                </div>
              </div>
            </label>

            <hr className="w-[361px] border border-[#DFDFDF] lg:w-[798px]" />
            <!-- FAQ 4 (Close) -->
            <label className="group block w-auto gap-2 py-6 cursor-pointer">
              <input type="radio" name="accordion" className="sr-only peer" />
              <!-- sr-only hide the button but keeping the function -->
              <!-- Header -->
              <div
                className="flex flex-row w-auto h-auto gap-2 justify-between select-none"
              >
                <p
                  className="w-[337px] h-auto font-bold text-[18px] lg:w-[528px] lg:h-[36px] lg:text-2xl/9"
                >
                  How long does it take?
                </p>
                <picture
                  className="transition-transform duration-300 group-has-[:checked]:hidden"
                >
                  <source
                    srcset="../src/assets/D-Icon-(+).svg"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="../src/assets/Icon-(+).svg"
                    alt="Icon Open"
                    className="size-6 p-1"
                  />
                </picture>

                <picture
                  className="hidden transition-transform duration-300 group-has-[:checked]:block"
                >
                  <source
                    srcset="../src/assets/D-Icon-(-).svg"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="../src/assets/Icon-(-).svg"
                    alt="Icon Close"
                    className="size-6 p-1"
                  />
                </picture>
              </div>
              <!-- Subtitle -->
              <div
                className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-all duration-300 ease-in-out overflow-hidden"
              >
                <div className="overflow-hidden">
                  <p
                    className="text-sm/[28px] font-medium text-[#717680] lg:text-5/[34px]"
                  >
                    Depends on scope - but we always prioritize quality and
                    deadlines.
                  </p>
                </div>
              </div>
            </label>

            <hr className="w-[361px] border border-[#DFDFDF] lg:w-[798px]" />
            <!-- FAQ 5 (Close) -->
            <label className="group block w-auto gap-2 pt-6 cursor-pointer">
              <input type="radio" name="accordion" className="sr-only peer" />
              <!-- sr-only hide the button but keeping the function -->
              <!-- Header -->
              <div
                className="flex flex-row w-auto h-auto gap-2 justify-between select-none"
              >
                <p
                  className="w-[337px] h-auto font-bold text-[18px] lg:w-[528px] lg:h-[36px] lg:text-2xl/9"
                >
                  Can I start with a small project first?
                </p>
                <picture
                  className="transition-transform duration-300 group-has-[:checked]:hidden"
                >
                  <source
                    srcset="../src/assets/D-Icon-(+).svg"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="../src/assets/Icon-(+).svg"
                    alt="Icon Open"
                    className="size-6 p-1"
                  />
                </picture>

                <picture
                  className="hidden transition-transform duration-300 group-has-[:checked]:block"
                >
                  <source
                    srcset="../src/assets/D-Icon-(-).svg"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="../src/assets/Icon-(-).svg"
                    alt="Icon Close"
                    className="size-6 p-1"
                  />
                </picture>
              </div>
              <!-- Subtitle -->
              <div
                className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-all duration-300 ease-in-out overflow-hidden"
              >
                <div className="overflow-hidden">
                  <p
                    className="text-sm/[28px] font-medium text-[#717680] lg:text-5/[34px]"
                  >
                    Absolutely. We often begin with MVPs or pilot projects.
                  </p>
                </div>
              </div>
            </label>
          </div>

          <!-- Consultation Card -->
          <div
            className="size-[361px] p-5 gap-4 rounded-2xl bg-[#CC4E32] flex flex-col items-center lg:w-[329px] lg:h-[453.38px] lg:rounded-3xl lg:p-6 lg:gap-6"
          >
            <!-- Header Text -->
            <div
              id="consult-header"
              className="flex flex-col w-[321px] h-[70px] gap-1 lg:w-[281px] lg:h-[156px]"
            >
              <h2
                className="w-auto h-[38px] font-bold text-[28px]/[38px] text-[#FFFFFF] lg:h-[88px] lg:text-[36px]/[44px]"
              >
                Let’s talk it through
              </h2>
              <p
                className="w-auto h-[28px] font-medium text-sm/[28px] text-[#FFFFFF] lg:h-[64px] lg:text-[18px]/[32px]"
              >
                book a free consultation with our team.
              </p>
            </div>
            <!-- Image -->
            <img
              src="../src/assets/Consultation Image.svg"
              alt="Consultation Image"
              className="w-[321px] h-auto rounded-2xl lg:w-[281px]"
            />
            <!-- Button -->
            <a
              className="w-[321px] h-[44] gap-1 p-2 bg-black rounded-full text-[16px]/[30px] text-white font-bold text-center lg:w-[281px] lg:h-[48px]"
              href="#letstalk"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      <!------------------------------------------------------------------------------------>
      <!----------------------------- LET'S TALK SECTION ------------------------------------->
      <!------------------------------------------------------------------------------------>
      <section
        id="letstalk"
        className="flex flex-col w-[393px] h-[906px] pt-10 px-4 gap-16 items-center lg:w-full lg:h-[956px] lg:gap-16 lg:px-[140px] lg:py-20"
      >
        <!-- ----------------------- -->
        <!------ Let's Talk Form ------>
        <!-- ----------------------- -->
        <div
          className="flex flex-col w-[361px] h-auto gap-6 lg:w-[720px] lg:h-[796px] lg:gap-12"
        >
          <!-- Header Container -->
          <div
            id="letstalk-header"
            className="flex flex-col w-auto h-[82px] lg:h-[104px] lg:gap-4"
          >
            <h2
              className="w-auto h-[38px] font-bold text-[28px]/[38px] text-[#0A0D12] text-center lg:h-[56px] lg:text-[40px]/[56px] dark:text-current"
            >
              Ready to Start? Let’s Talk.
            </h2>
            <p
              className="w-auto h-[28px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-[32px] lg:text-[18px]/[32px]"
            >
              Tell us what you need, and we’ll get back to you soon.
            </p>
          </div>
          <!-- Form Fields -->
          <div className="flex flex-col size-auto">
            <!-- Input Fields -->
            <div className="flex flex-col w-auto h-[676px] gap-5">
              <!-- Name -->
              <div className="gap-1.5 w-auto h-[82px]">
                <p className="w-auto h-[28px] font-bold text-sm/[28px]">Name</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-[361px] h-[48px] rounded-xl border-[1px] gap-2 py-2 px-4 lg:w-full"
                />
              </div>
              <!-- Email -->
              <div className="gap-1.5 w-auto h-[82px]">
                <p className="w-auto h-[28px] font-bold text-sm/[28px]">Email</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-[361px] h-[48px] rounded-xl border-[1px] gap-2 py-2 px-4 lg:w-full"
                />
              </div>
              <!-- Message -->
              <div className="gap-1.5 w-auto h-[168px]">
                <p className="w-auto h-[28px] font-bold text-sm/[28px]">Message</p>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Enter your message"
                  className="w-[361px] h-[134px] rounded-xl border-[1px] gap-2 py-2 px-4 lg:w-full"
                >
                </textarea>
              </div>

              <!-- ------------------- -->
              <!--- Service Container --->
              <!-- ------------------- -->
              <!-- Service Header -->
              <div
                className="flex flex-col w-auto h-[284px] gap-3.5 lg:w-full lg:h-[164px]"
              >
                <p className="w-auto h-[28px] font-bold text-sm/[28px]">Services</p>
                <!-- Start of Service Checkboxes -->
                <div
                  className="flex flex-col w-auto h-auto gap-3.5 lg:w-full lg:h-[122px] lg:flex-row lg:gap-[37px]"
                >
                  <!-- Column Container 1 -->
                  <div
                    className="flex flex-col w-[361px] h-auto gap-3.5 lg:w-[232px] lg:gap-4"
                  >
                    <div className="flex h-7 gap-2.5 items-center">
                      <input
                        type="checkbox"
                        id="cb-web"
                        className="size-5 rounded-1.5"
                      />
                      <label
                        for="cb-web"
                        className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                        >Web Development</label
                      >
                    </div>
                    <div className="flex h-7 gap-2.5 items-center">
                      <input
                        type="checkbox"
                        id="cb-mobile"
                        className="size-5 rounded-1.5"
                      />
                      <label
                        for="cb-mobile"
                        className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                        >Mobile App Development</label
                      >
                    </div>
                    <div className="flex h-7 gap-2.5 items-center">
                      <input
                        type="checkbox"
                        id="cb-uiux"
                        className="size-5 rounded-1.5"
                      />
                      <label
                        for="cb-uiux"
                        className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                        >UI/UX Development</label
                      >
                    </div>
                  </div>
                  <!-- Column Container 2 -->
                  <div
                    className="flex flex-col w-[361px] h-auto gap-3.5 lg:w-[213px] lg:gap-4"
                  >
                    <div className="flex h-7 gap-2.5 items-center">
                      <input
                        type="checkbox"
                        id="cb-cloud"
                        className="size-5 rounded-1.5"
                      />
                      <label
                        for="cb-cloud"
                        className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                        >Cloud Solutions</label
                      >
                    </div>
                    <div className="flex h-7 gap-2.5 items-center">
                      <input
                        type="checkbox"
                        id="cb-software"
                        className="size-5 rounded-1.5"
                      />
                      <label
                        for="cb-software"
                        className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                        >Software Development</label
                      >
                    </div>
                    <div className="flex h-7 gap-2.5 items-center">
                      <input
                        type="checkbox"
                        id="cb-Other"
                        className="size-5 rounded-1.5"
                      />
                      <label
                        for="cb-Other"
                        className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                        >Other</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- Submit Button -->
              <button
                className="w-[361px] h-[44px] p-2 Gap-1 rounded-r-full rounded-l-full bg-[#FF6C37] text-white font-bold mt-10 text-sm/[28px] lg:w-full lg:h-12 lg:text-[16px]/[30px]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      <!------------------------------------------------------------------------------------>
      <!----------------------------- FOOTER SECTION ------------------------------------->
      <!------------------------------------------------------------------------------------>
      <section
        id="footer"
        className="flex flex-col w-[393px] h-[544px] py-6 px-4 gap-2 items-center lg:w-full lg:h-[408px] lg:px-35 lg:py-10"
      >
        <!-- Footer Card -->
        <div
          className="flex flex-col w-[361px] h-[496px] border-[1px] border-[#DFDFDF] rounded-3xl p-5 gap-6 bg-[#FAFAFA] lg:w-[1160px] lg:h-[338px] lg:p-10 lg:gap-[60px] dark:bg-[#0A0D12] dark:border-[#252B37]"
        >
          <!-- Header Area -->
          <div
            className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:w-[1080px] lg:h-[88px]"
          >
            <!-- Logo left for mobile -->
            <picture className="order-1 lg:order-3">
              <source
                srcset="../src/assets/D-Your-Logo-White-L.svg"
                media="(prefers-color-scheme: dark)"
              />
              <img
                src="../src/assets/Your-Logo-black-L.svg"
                alt="Logo"
                className="w-[141px] h-[32px] lg:w-[158.63px] lg:h-[36px]"
              />
            </picture>

            <!-- Text -->
            <p
              className="order-2 font-bold text-[28px]/[38px] lg:text-[36px]/[44px] dark:text-current lg:w-[281px] lg:h-[88px]"
            >
              LET'S DISCUSS YOUR IDEAS
            </p>
          </div>

          <hr className="w-[321] border-[#DFDFDF] lg:w-[1080px]" />

          <!-- Footer Area -->
          <div
            className="flex flex-col justify-between w-[321px] h-[276px] gap-6 lg:w-[1080px] lg:h-[40px] lg:flex-row lg:justify-between"
          >
            <!-- Navigation Menu -->
            <nav
              className="flex flex-col gap-4 w-auto h-[212px] lg:flex-row lg:w-[447px] lg:h-[36px]"
            >
              <a
                href="#hero"
                className="font-medium text-sm/[28px] text-[#0A0D12] lg:w-[77px] lg:text-4/[30px] lg:px-4 lg:py-2 dark:text-current"
                >About</a
              >
              <a
                href="#service"
                className="font-medium text-sm/[28px] text-[#0A0D12] lg:w-[88px] lg:text-4/[30px] lg:px-4 lg:py-2 dark:text-current"
                >Service</a
              >
              <a
                href="#portfolio"
                className="font-medium text-sm/[28px] text-[#0A0D12] lg:w-[93px] lg:text-4/[30px] lg:px-4 lg:py-2 dark:text-current"
                >Projects</a
              >
              <a
                href="#testimony"
                className="font-medium text-sm/[28px] text-[#0A0D12] lg:w-[125px] lg:text-4/[30px] lg:px-4 lg:py-2 dark:text-current"
                >Tertimonials</a
              >
              <a
                href="#faq"
                className="font-medium text-sm/[28px] text-[#0A0D12] lg:w-[64px] lg:text-4/[30px] lg:px-4 lg:py-2 dark:text-current"
                >FAQ</a
              >
            </nav>
            <!-- Social Media Icons -->
            <picture>
              <source
                srcset="../src/assets/D-Social-Media-Icons.svg"
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
    </main>
</div>
    </div>
  );
}