const AchievementCard = ({
  figure,
  text,
}: {
  figure: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center size-[172.5px] rounded-full bg-[#FAFAFA] border-[#DEDCDC] lg:size-[275px] dark:bg-[#0A0D12] dark:border-[#181D27]">
      <h2 className="w-[140px] h-[44px] text-[36px]/[44px] font-bold text-center text-[#FF623E] lg:w-[243px] lg:h-[60px] lg:text-[48px]/[60px]">
        {figure}
      </h2>
      <p className="text-[14px]/[28px] font-semibold text-[#0A0D12] text-center lg:text-[20px]/[34px] dark:text-current">
        {text}
      </p>
    </div>
  );
};

export default AchievementCard;
