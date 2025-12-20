const LetsTalk = () => {
  return (
    <section
      id="letstalk"
      className="flex flex-col w-[393px] h-[906px] pt-10 px-4 gap-16 items-center lg:w-full lg:h-[956px] lg:gap-16 lg:px-[140px] lg:py-20"
    >
      {/* <!-- ----------------------- -->
          <!------ Let's Talk form ------>
          <!-- ----------------------- --> */}
      <div className="flex flex-col w-[361px] h-auto gap-6 lg:w-[720px] lg:h-[796px] lg:gap-12">
        {/* <!-- Header Container --> */}
        <div
          id="letstalk-header"
          className="flex flex-col w-auto h-[82px] lg:h-[104px] lg:gap-4"
        >
          <h2 className="w-auto h-[38px] font-bold text-[28px]/[38px] text-[#0A0D12] text-center lg:h-[56px] lg:text-[40px]/[56px] dark:text-current">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="w-auto h-[28px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-[32px] lg:text-[18px]/[32px] dark:text-[#A4A7AE]">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>
        {/* <!-- form Fields --> */}
        <div className="flex flex-col size-auto">
          {/* <!-- Input Fields --> */}
          <div className="flex flex-col w-auto h-[676px] gap-5">
            {/* <!-- Name --> */}
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
            {/* <!-- Email --> */}
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
            {/* <!-- Message --> */}
            <div className="gap-1.5 w-auto h-[168px]">
              <p className="w-auto h-[28px] font-bold text-sm/[28px]">
                Message
              </p>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Enter your message"
                className="w-[361px] h-[134px] rounded-xl border-[1px] gap-2 py-2 px-4 lg:w-full"
              ></textarea>
            </div>

            {/* <!-- ------------------- -->
                <!--- Service Container --->
                <!-- ------------------- --> */}
            {/* <!-- Service Header --> */}
            <div className="flex flex-col w-auto h-[284px] gap-3.5 lg:w-full lg:h-[164px]">
              <p className="w-auto h-[28px] font-bold text-sm/[28px]">
                Services
              </p>
              {/* <!-- Start of Service Checkboxes --> */}
              <div className="flex flex-col w-auto h-auto gap-3.5 lg:w-full lg:h-[122px] lg:flex-row lg:gap-[37px]">
                {/* <!-- Column Container 1 --> */}
                <div className="flex flex-col w-[361px] h-auto gap-3.5 lg:w-[232px] lg:gap-4">
                  <div className="flex h-7 gap-2.5 items-center">
                    <input
                      type="checkbox"
                      id="cb-web"
                      className="size-5 rounded-1.5"
                    />
                    <label
                      htmlFor="cb-web"
                      className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                    >
                      Web Development
                    </label>
                  </div>
                  <div className="flex h-7 gap-2.5 items-center">
                    <input
                      type="checkbox"
                      id="cb-mobile"
                      className="size-5 rounded-1.5"
                    />
                    <label
                      htmlFor="cb-mobile"
                      className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                    >
                      Mobile App Development
                    </label>
                  </div>
                  <div className="flex h-7 gap-2.5 items-center">
                    <input
                      type="checkbox"
                      id="cb-uiux"
                      className="size-5 rounded-1.5"
                    />
                    <label
                      htmlFor="cb-uiux"
                      className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                    >
                      UI/UX Development
                    </label>
                  </div>
                </div>
                {/* <!-- Column Container 2 --> */}
                <div className="flex flex-col w-[361px] h-auto gap-3.5 lg:w-[213px] lg:gap-4">
                  <div className="flex h-7 gap-2.5 items-center">
                    <input
                      type="checkbox"
                      id="cb-cloud"
                      className="size-5 rounded-1.5"
                    />
                    <label
                      htmlFor="cb-cloud"
                      className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                    >
                      Cloud Solutions
                    </label>
                  </div>
                  <div className="flex h-7 gap-2.5 items-center">
                    <input
                      type="checkbox"
                      id="cb-software"
                      className="size-5 rounded-1.5"
                    />
                    <label
                      htmlFor="cb-software"
                      className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                    >
                      Software Development
                    </label>
                  </div>
                  <div className="flex h-7 gap-2.5 items-center">
                    <input
                      type="checkbox"
                      id="cb-Other"
                      className="size-5 rounded-1.5"
                    />
                    <label
                      htmlFor="cb-Other"
                      className="text-sm/[28px] font-medium text-[#0A0D12] lg:text-[16px]/[30px] dark:text-current"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Submit Button --> */}
            <button className="w-[361px] h-[44px] p-2 Gap-1 rounded-r-full rounded-l-full bg-[#FF6C37] text-white font-bold mt-10 text-sm/[28px] lg:w-full lg:h-12 lg:text-[16px]/[30px]">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
