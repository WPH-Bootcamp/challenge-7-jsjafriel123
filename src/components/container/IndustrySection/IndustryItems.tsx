import React from "react";
import { useState } from "react";

const INDUSTRIES = [
  {
    id: 0,
    label: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: "../src/assets/Industry-Fintech.svg",
  },
  {
    id: 1,
    label: "E-Commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: "../src/assets/Industry-Ecommerce.svg",
  },
  {
    id: 2,
    label: "Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: "../src/assets/Industry-Health.svg",
  },
];

export default function IndustryItems() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selected = INDUSTRIES[selectedIndex];

  return (
    <div className="grid grid-cols-1 lg:w-[1160px] lg:h-[435px] lg:grid-cols-[256px_1fr]">
      {/* Text List */}
      <div className="flex flex-col justify-between w-[361px] h-[114px] gap-3">
        {INDUSTRIES.map((option, index) => {
          const isActive = selectedIndex === index;

          return (
            <div
              key={option.id ?? index}
              role="button"
              tabIndex={0}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedIndex(index);
                }
              }}
              className={`flex flex-row items-center w-auto h-[30px] gap-1.5 lg:h-[32px] ${
                isActive ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <div
                className={`w-1 h-6 lg:h-8 ${
                  isActive ? "bg-[#FF623E]" : "bg-[#AAAAAA]"
                }`}
              ></div>
              <p
                className={`text-[16px]/[30px] font-bold lg:text-[20px]/[34px]  ${
                  isActive ? "text-black dark:text-[#FDFDFD]" : "text-[#AAAAAA]"
                }`}
              >
                {option.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Content Container */}
      <div className="flex flex-col w-[361px] h-[304px] gap-5 lg:w-[840px] lg:h-[435px]">
        <p className="h-[84px] text-[14px]/[28px] text-[#0A0D12] lg:h-[64px] lg:text-[18px]/[32px] dark:text-[#FDFDFD]">
          {selected.description}
        </p>
        <img
          src={selected.image}
          alt={selected.label}
          className="w-auto h-[200px] rounded-[12px] lg:h-[351px]"
        />
      </div>
    </div>
  );
}
