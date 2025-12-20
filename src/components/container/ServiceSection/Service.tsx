import React from "react";
import ServiceCard from "../../ui/ServiceCard";

const Service = () => {
  return (
    <section
      id="service"
      className="flex flex-col w-[393px] h-[1800px] gap-10 px-4 py-10 items-center lg:w-full lg:h-[972px] lg:gap-16 lg:px-[140px] lg:py-20"
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
        <ServiceCard
          title="Web Development"
          description="Build fast, scalable, and SEO-friendly websites."
          image="../src/assets/Service-Icon 1.svg"
        />
        {/* <!-- Card Container 2--> */}
        <ServiceCard
          title="Mobile App Development"
          description="Native & cross-platform apps tailored to user needs."
          image="../src/assets/Service-Icon 2.svg"
        />

        {/* <!-- Card Container 3--> */}
        <ServiceCard
          title="UI/UX Design"
          description="Delight users with intuitive and beautiful interfaces."
          image="../src/assets/Service-Icon 3.svg"
        />

        {/* <!-- Card Container 4--> */}
        <ServiceCard
          title="Cloud Solutions"
          description="Secure and flexible cloud infrastructure for your growth."
          image="../src/assets/Service-Icon 4.svg"
        />

        {/* <!-- Card Container 5--> */}
        <ServiceCard
          title="Software Development"
          description="Custom solutions built around your business logic."
          image="../src/assets/Service-Icon 5.svg"
        />

        {/* <!-- Card Container 6--> */}
        <ServiceCard
          title="IT Infrastructure"
          description="Scale your backend with reliable tech foundations."
          image="../src/assets/Service-Icon 6.svg"
        />

        {/* <!-- Card Container 7--> */}
        <ServiceCard
          title="Cybersecurity Services"
          description="Stay protected with enterprise-grade security."
          image="../src/assets/Service-Icon 7.svg"
        />

        {/* <!-- Card Container 8--> */}
        <ServiceCard
          title="QA Solutions"
          description="Ensure performance with rigorous testing frameworks."
          image="../src/assets/Service-Icon 8.svg"
        />

        {/* <!-- Card Container 9--> */}
        <ServiceCard
          title="IT Consulting & Support"
          description="Make smarter tech decisions with expert guidance."
          image="../src/assets/Service-Icon 9.svg"
        />
      </div>
    </section>
  );
};

export default Service;
