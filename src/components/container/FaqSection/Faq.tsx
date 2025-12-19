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
        <p className="w-auto h-[28px] font-medium text-sm/[28px] text-[#717680] lg:h-[64px] lg:w-[245px] lg:text-[18px]/[32px]">
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
          {/* <!-- FAQ 1 (Open) --> */}
          <label className="group block w-auto gap-2 pb-6 cursor-pointer">
            <input
              type="radio"
              name="accordion"
              className="sr-only peer"
              defaultChecked
            />
            {/* <!-- sr-only hide the button but keeping the function -->
                        <!-- Header --> */}
            <div className="flex flex-row w-auto h-auto gap-2 justify-between select-none">
              <p className="w-[337px] h-[32px] font-bold text-[18px] lg:w-[5w-28px] lg:h-[36px] lg:text-2xl/9">
                What services do you offer?
              </p>

              <picture className="transition-transform duration-300 group-has-[:checked]:hidden">
                <source
                  srcSet="../src/assets/D-Icon-(+).svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="../src/assets/Icon-(+).svg"
                  alt="Icon Open"
                  className="size-6 p-1"
                />
              </picture>

              <picture className="hidden transition-transform duration-300 group-has-[:checked]:block">
                <source
                  srcSet="../src/assets/D-Icon-(-).svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="../src/assets/Icon-(-).svg"
                  alt="Icon Close"
                  className="size-6 p-1"
                />
              </picture>
            </div>
            {/* <!-- Subtitle --> */}
            <div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-all duration-300 ease-in-out overflow-hidden">
              <div className="overflow-hidden">
                <p className="text-sm/[28px] font-medium text-[#717680] lg:text-[20px]/[34px]">
                  We provide custom web/app development, cloud solutions, UX/UI
                  design, and more.
                </p>
              </div>
            </div>
          </label>

          <hr className="w-[361px] border border-[#DFDFDF] lg:w-[798px]" />
          {/* <!-- FAQ 2 (Close) --> */}
          <label className="group block w-auto gap-2 py-6 cursor-pointer">
            <input type="radio" name="accordion" className="sr-only peer" />
            {/* <!-- sr-only hide the button but keeping the function -->
                <!-- Header --> */}
            <div className="flex flex-row w-auto h-auto gap-2 justify-between select-none">
              <p className="w-[337px] h-auto font-bold text-[18px] lg:w-[528px] lg:h-[36px] lg:text-2xl/9">
                How do I know if this is right for my business?
              </p>
              <picture className="transition-transform duration-300 group-has-[:checked]:hidden">
                <source
                  srcSet="../src/assets/D-Icon-(+).svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="../src/assets/Icon-(+).svg"
                  alt="Icon Open"
                  className="size-6 p-1"
                />
              </picture>

              <picture className="hidden transition-transform duration-300 group-has-[:checked]:block">
                <source
                  srcSet="../src/assets/D-Icon-(-).svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="../src/assets/Icon-(-).svg"
                  alt="Icon Close"
                  className="size-6 p-1"
                />
              </picture>
            </div>
            {/* <!-- Subtitle --> */}
            <div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-all duration-300 ease-in-out overflow-hidden">
              <div className="overflow-hidden">
                <p className="text-sm/[28px] font-medium text-[#717680] lg:text-[20px]/[34px]">
                  Book a free consult - we'll assess your goals and recommend
                  the right approach.
                </p>
              </div>
            </div>
          </label>

          <hr className="w-[361px] border border-[#DFDFDF] lg:w-[798px]" />
          {/* <!-- FAQ 3 (Close) --> */}
          <label className="group block w-auto gap-2 py-6 cursor-pointer">
            <input type="radio" name="accordion" className="sr-only peer" />
            {/* <!-- sr-only hide the button but keeping the function -->
                <!-- Header --> */}
            <div className="flex flex-row w-auto h-auto gap-2 justify-between select-none">
              <p className="w-[337px] h-auto font-bold text-[18px] lg:w-[528px] lg:h-[36px] lg:text-2xl/9">
                How much does a project cost?
              </p>
              <picture className="transition-transform duration-300 group-has-[:checked]:hidden">
                <source
                  srcSet="../src/assets/D-Icon-(+).svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="../src/assets/Icon-(+).svg"
                  alt="Icon Open"
                  className="size-6 p-1"
                />
              </picture>

              <picture className="hidden transition-transform duration-300 group-has-[:checked]:block">
                <source
                  srcSet="../src/assets/D-Icon-(-).svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="../src/assets/Icon-(-).svg"
                  alt="Icon Close"
                  className="size-6 p-1"
                />
              </picture>
            </div>
            {/* <!-- Subtitle --> */}
            <div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-all duration-300 ease-in-out overflow-hidden">
              <div className="overflow-hidden">
                <p className="text-sm/[28px] font-medium text-[#717680] lg:text-[20px]/[34px]">
                  Every project is different. Let's talk about your needs to get
                  a tailored estimate.
                </p>
              </div>
            </div>
          </label>

          <hr className="w-[361px] border border-[#DFDFDF] lg:w-[798px]" />
          {/* <!-- FAQ 4 (Close) --> */}
          <label className="group block w-auto gap-2 py-6 cursor-pointer">
            <input type="radio" name="accordion" className="sr-only peer" />
            {/* <!-- sr-only hide the button but keeping the function -->
                <!-- Header --> */}
            <div className="flex flex-row w-auto h-auto gap-2 justify-between select-none">
              <p className="w-[337px] h-auto font-bold text-[18px] lg:w-[528px] lg:h-[36px] lg:text-2xl/9">
                How long does it take?
              </p>
              <picture className="transition-transform duration-300 group-has-[:checked]:hidden">
                <source
                  srcSet="../src/assets/D-Icon-(+).svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="../src/assets/Icon-(+).svg"
                  alt="Icon Open"
                  className="size-6 p-1"
                />
              </picture>

              <picture className="hidden transition-transform duration-300 group-has-[:checked]:block">
                <source
                  srcSet="../src/assets/D-Icon-(-).svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="../src/assets/Icon-(-).svg"
                  alt="Icon Close"
                  className="size-6 p-1"
                />
              </picture>
            </div>
            {/* <!-- Subtitle --> */}
            <div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-all duration-300 ease-in-out overflow-hidden">
              <div className="overflow-hidden">
                <p className="text-sm/[28px] font-medium text-[#717680] lg:text-[20px]/[34px]">
                  Depends on scope - but we always prioritize quality and
                  deadlines.
                </p>
              </div>
            </div>
          </label>

          <hr className="w-[361px] border border-[#DFDFDF] lg:w-[798px]" />
          {/* <!-- FAQ 5 (Close) --> */}
          <label className="group block w-auto gap-2 pt-6 cursor-pointer">
            <input type="radio" name="accordion" className="sr-only peer" />
            {/* <!-- sr-only hide the button but keeping the function -->
                <!-- Header --> */}
            <div className="flex flex-row w-auto h-auto gap-2 justify-between select-none">
              <p className="w-[337px] h-auto font-bold text-[18px] lg:w-[528px] lg:h-[36px] lg:text-2xl/9">
                Can I start with a small project first?
              </p>
              <picture className="transition-transform duration-300 group-has-[:checked]:hidden">
                <source
                  srcSet="../src/assets/D-Icon-(+).svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="../src/assets/Icon-(+).svg"
                  alt="Icon Open"
                  className="size-6 p-1"
                />
              </picture>

              <picture className="hidden transition-transform duration-300 group-has-[:checked]:block">
                <source
                  srcSet="../src/assets/D-Icon-(-).svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="../src/assets/Icon-(-).svg"
                  alt="Icon Close"
                  className="size-6 p-1"
                />
              </picture>
            </div>
            {/* <!-- Subtitle --> */}
            <div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-all duration-300 ease-in-out overflow-hidden">
              <div className="overflow-hidden">
                <p className="text-sm/[28px] font-medium text-[#717680] lg:text-[20px]/[34px]">
                  Absolutely. We often begin with MVPs or pilot projects.
                </p>
              </div>
            </div>
          </label>
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
            src="../src/assets/Consultation Image.svg"
            alt="Consultation Image"
            className="w-[321px] h-auto rounded-2xl lg:w-[281px]"
          />
          {/* <!-- Button --> */}
          <a
            className="w-[321px] h-[44] gap-1 p-2 bg-black rounded-full text-[16px]/[30px] text-white font-bold text-center lg:w-[281px] lg:h-[48px]"
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
