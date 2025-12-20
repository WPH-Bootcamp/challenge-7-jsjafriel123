import AchievementCard from "../../ui/AchievementCard";

const Achievement = () => {
  return (
    <section
      id="achievement"
      className="flex flex-col w-[393px] h-[688px] gap-6 px-4 py-20 items-center lg:w-full lg:gap-16 lg:h-[598px] lg:px-35"
    >
      <div
        id="achievement-header"
        className="flex flex-col w-[361px] h-[143px] gap-[11px] items-center lg:w-[1160px] lg:h-[99px]"
      >
        <h2 className="w-auto h-[76px] font-bold text-[28px] text-[#0A0D12] text-center lg:h-[56px] lg:text-[40px]/[56px] dark:text-current">
          End-to-End IT Solutions That Drive Results
        </h2>
        <p className="w-auto h-[56px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-[36px] lg:text-[18px]/[36px] dark:text-[#A4A7AE]">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </div>
      <div
        id="achievement-cards"
        className="grid grid-cols-2 gap-4 lg:w-[1160px] lg:h-[275px] lg:flex lg:flex-row lg:gap-5"
      >
        {/* <!-- Achievement 1 --> */}
        <AchievementCard figure="50+" text="Projects Delivered" />
        {/* <!-- Achievement 2 --> */}
        <AchievementCard figure="5+" text="Years of Experience" />
        {/* <!-- Achievement 3 --> */}
        <AchievementCard figure="10+" text="Industry Awards Won" />
        {/* <!-- Achievement 4 --> */}
        <AchievementCard figure="100%" text="Client Satisfaction Rate" />
      </div>
    </section>
  );
};

export default Achievement;
