import React from "react";

const Header = () => {
  return (
    <header className="relative">
      <div className="fixed flex items-center justify-between w-full h-[64px] py-6 px-4 bg-white/40 backdrop-blur-md z-50 lg:h-[84px] lg:px-35 dark:bg-black/70">
        <div id="logo" className="flex items-center">
          <a href="#hero">
            <picture>
              <source
                srcSet="../src/assets/D-Your-Logo-white-L.svg"
                media="(prefers-color-scheme: dark)"
              />
              <img
                src="../src/assets/Your-Logo-black-L.svg"
                alt="Logo Black Large"
                className="h-[32px] lg:h-[36px]"
              />
            </picture>
          </a>
        </div>
        {/* =================================================================== */}
        {/* ==========================HIDDEN Elements========================== */}
        {/* =================================================================== */}
        {/* Hidden checkbox to toggle menu */}
        {/* <input type="checkbox" id="menu-toggle" className="peer sr-only" /> */}
        <input
          type="radio"
          id="rad0"
          name="curtain-switch"
          className="radio0 sr-only"
          defaultChecked
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
        {/* Menu Container */}
        <div
          id="mobile-menu"
          className="slide-curtain absolute top-0 right-0 w-full h-[852px] flex flex-col items-center gap-4 bg-white/90 backdrop-blur-3xl border border-gray-200 shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-300 ease-in-out lg:static lg:flex-row lg:w-auto lg:h-[84px] lg:rounded-none lg:items-center lg:justify-between lg:border-none lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:opacity-100 lg:scale-100 lg:pointer-events-auto dark:border-gray-100"
        >
          {/* peer-checked:opacity-100 peer-checked:scale-100 peer-checked:pointer-events-auto  */}
          <div
            id="menu-header"
            className="w-[393px] h-[64px] border-b-[1px] px-4 py-6 flex justify-between items-center lg:hidden"
          >
            {/* Logo in header menu */}
            <picture>
              <source
                srcSet="../src/assets/D-Your-Logo-white-L.svg"
                media="(prefers-color-scheme: dark)"
              />
              <img
                src="../src/assets/Your-Logo-black-L.svg"
                alt="Logo Black Small"
                className="w-[141px] h-[32px]"
              />
            </picture>

            <label
              htmlFor="rad2"
              className="cursor-pointer size-6 font-bold pointer-events-auto"
            >
              X
            </label>
            {/* <hr /> */}
          </div>
          <div className="w-auto h-[260px] flex flex-col lg:flex-row lg:h-auto lg:justify-between lg:items-center">
            <nav className="w-[361px] h-[180px] flex flex-col gap-2 text-sm/[28px] font-semibold text-[#0A0D12] pointer-events-auto lg:flex lg:flex-row lg:justify-between lg:w-[499px] lg:h-[36px] lg:gap-3 dark:text-current">
              <a
                href="#hero"
                className="lg:font-semibold lg:text-[16px]/[30px]"
              >
                About
              </a>
              <a
                href="#service"
                className="lg:font-semibold lg:text-[16px]/[30px]"
              >
                Service
              </a>
              <a
                href="#portfolio"
                className="lg:font-semibold lg:text-[16px]/[30px]"
              >
                Projects
              </a>
              <a
                href="#testimony"
                className="lg:font-semibold lg:text-[16px]/[30px]"
              >
                Testimonials
              </a>
              <a href="#faq" className="lg:font-semibold lg:text-[16px]/[30px]">
                FAQ
              </a>
            </nav>
            <a
              href="#letstalk"
              className="flex w-[361px] h-[44px] p-2 Gap-1 rounded-r-full rounded-l-full bg-[#FF6C37] text-white font-bold mt-10 items-center justify-center pointer-events-auto lg:hidden dark:bg-[#FF623E] dark:shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)]"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Label acts as the hamburger icon */}
        <label
          htmlFor="rad1"
          className="cursor-pointer text-2xl font-black pointer-events-auto lg:hidden"
        >
          ☰
        </label>
        <a
          href="#letstalk"
          className="hidden w-[197px] h-[44px] p-2 Gap-1 rounded-r-full rounded-l-full bg-[#FF6C37] text-white font-bold items-center justify-center pointer-events-auto lg:flex lg:justify-center"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
};

export default Header;
