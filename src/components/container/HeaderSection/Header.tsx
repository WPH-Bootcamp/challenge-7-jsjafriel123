import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="fixed inset-x-0 top-0 z-50 flex h-[64px] items-center justify-between bg-white/40 px-4 backdrop-blur-2xl lg:h-[84px] lg:px-[140px] dark:bg-black/40">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <picture>
            <source
              srcSet="../public/assets/D-Your-Logo-white-L.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="../public/assets/Your-Logo-black-L.svg"
              alt="Logo"
              className="h-[32px] lg:h-[36px]"
            />
          </picture>
        </a>

        {/* Sliding Mobile Menu */}
        <div
          className={`inset-0 flex flex-col absolute z-90 h-[852px] items-center gap-4 bg-white backdrop-blur-md transform transition-all duration-600 ease-in-out lg:static lg:z-auto lg:h-[84px] lg:flex-row lg:bg-transparent lg:backdrop-blur-none 
          ${
            isMenuOpen
              ? "opacity-100 dark:bg-black pointer-events-auto translate-x-0"
              : "opacity-0 pointer-events-none translate-x-full lg:opacity-100 lg:pointer-events-auto lg:translate-x-0 dark:bg-none"
          }
        `}
        >
          {/* Mobile Menu Header */}
          <div className="flex h-[64px] w-full items-center justify-between px-4 lg:hidden">
            <picture>
              <source
                srcSet="../public/assets/D-Your-Logo-white-L.svg"
                media="(prefers-color-scheme: dark)"
              />
              <img
                src="../public/assets/Your-Logo-black-L.svg"
                alt="Logo"
                className="h-[32px]"
              />
            </picture>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex w-[361px] flex-col gap-2 font-semibold text-[#0A0D12] lg:w-auto lg:flex-row lg:gap-3 lg:justify-between lg:h-[36px] dark:text-current">
            <a href="#hero" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#service" onClick={() => setIsMenuOpen(false)}>
              Service
            </a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#testimony" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
          </nav>

          {/* Mobile CTA */}
          <a
            href="#letstalk"
            onClick={() => setIsMenuOpen(false)}
            className="mt-10 flex h-[44px] w-[361px] items-center justify-center rounded-full bg-[#FF6C37] font-bold text-white lg:hidden"
          >
            Let's Talk
          </a>
        </div>
        {/* Desktop CTA */}
        <a
          href="#letstalk"
          className="hidden h-[44px] w-[197px] items-center justify-center rounded-full bg-[#FF6C37] font-bold text-white lg:flex"
        >
          Let's Talk
        </a>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
          className="text-2xl font-black lg:hidden"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
