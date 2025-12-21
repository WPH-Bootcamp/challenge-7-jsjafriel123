import Accordion from "./Accordion";

const FaQ = () => {
  return (
    <section
      id="faq"
      className="flex flex-col w-[393px] h-[1083px] gap-6 px-4 py-10 items-center lg:h-[822px] lg:gap-12 lg:px-20 lg:py-30"
    >
      {/* <!-- ---------------- -->
          <!----- Q&A Header ----->
          <!-- ---------------- --> */}
      <div
        id="faq-header"
        className="flex flex-col w-[361px] h-[82px] gap-4 lg:flex-row lg:w-[1200px] lg:h-[112px] lg:gap-0 lg:justify-between lg:items-end"
      >
        <h2 className="w-auto h-[38px] font-bold text-[28px]/[38px] text-[#0A0D12] lg:h-auto lg:w-[331px] lg:text-[40px]/[56px] dark:text-current">
          Need Help? Start Here.
        </h2>
        <p className="w-auto h-[28px] font-medium text-sm/[28px] text-[#717680] lg:h-[64px] lg:w-[245px] lg:text-[18px]/[32px] dark:text-[#A4A7AE]">
          Everything you need to know — all in one place.
        </p>
      </div>
      {/* <!-- ----------------- -->
          <!------ FAQ Line ------->
          <!-- ----------------- --> */}
      <hr className="w-[361px] border border-[#DFDFDF] lg:w-[1200px]" />
      {/* <!-- ----------------- -->
          <!----- FAQ Content ----->
          <!-- ----------------- --> */}
      <div className="flex w-[361px] flex-col gap-6 lg:flex-row lg:justify-between lg:w-[1200px] lg:h-[454px] lg:gap-7">
        {/* <!-- Accordions --> */}
        <div className="w-[393] lg:w-[798px]">
          <Accordion />
        </div>

        {/* <!-- Consultation Card --> */}
        <div className="size-[361px] p-5 gap-4 rounded-2xl bg-[#CC4E32] flex flex-col items-center lg:w-[329px] lg:h-[453.38px] lg:rounded-3xl lg:p-6 lg:gap-6">
          {/* <!-- Header Text --> */}
          <div
            id="consult-header"
            className="flex flex-col w-[321px] h-[70px] gap-1 lg:w-[281px] lg:h-[156px]"
          >
            <h2 className="w-auto h-[38px] font-bold text-[28px]/[38px] text-[#FFFFFF] lg:h-[88px] lg:text-[36px]/[44px]">
              Let’s talk it through
            </h2>
            <p className="w-auto h-[28px] font-medium text-sm/[28px] text-[#FFFFFF] lg:h-[64px] lg:text-[18px]/[32px]">
              book a free consultation with our team.
            </p>
          </div>
          {/* <!-- Image --> */}
          <img
            src="../public/assets/Consultation Image.svg"
            alt="Consultation Image"
            className="w-[321px] h-auto rounded-2xl lg:w-[281px]"
          />
          {/* <!-- Button --> */}
          <a
            className="w-[321px] h-[44px] gap-1 p-2 bg-black rounded-full text-[16px]/[30px] text-white font-bold text-center lg:w-[281px] lg:h-[48px]"
            href="#letstalk"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaQ;
