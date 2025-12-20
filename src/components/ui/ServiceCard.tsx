const ServiceCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="w-[361px] h-[160px] relative flex items-end lg:w-[373.33px] lg:h-[210px]">
      {/* <!-- Card Text 1--> */}
      <div className="flex items-end w-[361px] h-[130px] p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-full lg:h-[182px] lg:p-5 lg:px-5 lg:pt-16 lg:pb-5 dark:border-[#181D27] dark:bg-[#0A0D12]">
        <div className="flex flex-col h-[62px] w-[321px] gap-1 justify-center lg:w-[333.33px] lg:h-[98px]">
          <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px]">
            {title}
          </h3>
          <p className="text-[#717680] font-medium text-sm/[28px] lg:text-[16px]/[30px] dark:text-[#A4A7AE]">
            {description}
          </p>
        </div>
      </div>
      {/* <!-- Card Icon --> */}
      <img
        src={image}
        alt="Logo"
        className="size-16 absolute top-2.5 left-4 lg:size-20 lg:top-0"
      />
    </div>
  );
};

export default ServiceCard;
