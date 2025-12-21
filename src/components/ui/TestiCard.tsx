const TestiCard = ({
  rating,
  testimony,
  name,
  title,
  photo,
}: {
  rating: string;
  testimony: string;
  name: string;
  title: string;
  photo: string;
}) => {
  return (
    //   Card Container
    <div className="flex flex-col w-auto h-[328px] relative items-center pt-5 pb-6 lg:h-[350px] lg:pt-6 lg:pb-8 transition-all duration-300 ease-in-out">
      {/* <!-- Card Container 3--> */}
      <div className="flex flex-col w-[361px] h-[284px] pt-4 px-4 pb-12 gap-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[594px] lg:h-[292px] lg:gap-6 dark:bg-[#0A0D12] dark:border-[#181D27] transition-transform duration-1300 ease-in-out">
        <div className="flex flex-col w-[329] h-[148px] gap-3 items-center lg:w-[546px] lg:h-[132px]">
          <img src={rating} alt="Rating" className="w-34 h-6" />
          <p className="text-[#0A0D12] font-semibold text-sm/[28px] text-center lg:text-[18px]/8 dark:text-current">
            {testimony}
          </p>
        </div>
        {/* <!-- Author --> */}
        <div className="flex flex-col w-[329px] h-[56px] items-center lg:w-[546px] lg:h-[64px]">
          <p className="text-sm/[28px] font-semibold text-[#0A0D12] lg:text-[18px]/8 dark:text-current">
            {name}
          </p>
          <p className="text-sm/[28px] font-semibold text-[#FF623E] lg:text-[18px]/8">
            {title}
          </p>
        </div>
      </div>
      {/* <!-- Card Icon --> */}
      <img
        src="../assets/Icon-Quote.svg"
        alt="Logo Quote"
        className="h-[37.33px] w-auto absolute top-0 left-6 lg:h-[47px]"
      />
      <img
        src={photo}
        alt="Testimony Card"
        className="size-[60px] absolute bottom-0 lg:h-[75px]"
      />
    </div>
  );
};

export default TestiCard;
