function AccordionItem({
  index,
  openIndex,
  setOpenIndex,
  question,
  answer,
}: {
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
  question: string;
  answer: string;
}) {
  const isOpen = openIndex === index;

  return (
    <div
      className="block w-auto gap-2 pb-6 cursor-pointer"
      onClick={() => setOpenIndex(isOpen ? null : index)}
    >
      {/* Header */}
      <div className="flex flex-row w-auto h-auto gap-2 pt-4 justify-between select-none">
        <p className="w-[337px] h-auto font-bold text-[18px] lg:w-[770px] lg:h-[36px] lg:text-2xl/9">
          {question}
        </p>

        {/* PLUS icon */}
        <picture
          className={`transition-transform duration-300 ${
            isOpen ? "hidden" : "block"
          }`}
        >
          <source
            srcSet="../public/assets/D-Icon-(+).svg"
            media="(prefers-color-scheme: dark)"
          />
          <img
            src="../public/assets/Icon-(+).svg"
            alt="Open"
            className="size-6 p-1"
          />
        </picture>

        {/* MINUS icon */}
        <picture
          className={`transition-transform duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <source
            srcSet="../public/assets/D-Icon-(-).svg"
            media="(prefers-color-scheme: dark)"
          />
          <img
            src="../public/assets/Icon-(-).svg"
            alt="Close"
            className="size-6 p-1"
          />
        </picture>
      </div>

      {/* Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm/[28px] font-medium text-[#717680] lg:text-[20px]/[34px] dark:text-[#A4A7AE]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
