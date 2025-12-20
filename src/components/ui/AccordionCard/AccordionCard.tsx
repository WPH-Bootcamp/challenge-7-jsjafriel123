function AccordionCard({
  Title,
  Description,
}: {
  Title: string;
  Description: string;
}) {
  return (
    <div className="group flex flex-col w-[309px] gap-1 p-4 border-[1px] rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] lg:w-[532px] lg:p-6 dark:border-[#181D27] dark:bg-[#0A0D12]">
      <div className="flex justify-between h-auto w-full">
        <h3 className="font-bold text-base lg:text-xl/[34px]">{Title}</h3>
        <a
          href="#"
          className="rotate-180 font-bold text-2xl group-hover:rotate-0"
        >
          ^
        </a>
      </div>
      <div className="grid transition-all duration-300 ease-in-out overflow-hidden grid-rows-[0fr] group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p className="text-[#717680] font-semibold text-sm lg:text-[16px] dark:text-[#A4A7AE]">
            {Description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccordionCard;
