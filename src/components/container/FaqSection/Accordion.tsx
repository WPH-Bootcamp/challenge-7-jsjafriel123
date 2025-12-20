import { useState } from "react";
import AccordionItem from "../../ui/Accordion";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const hrClass = "w-[361px] border border-[#DFDFDF] lg:w-[798px]";

  return (
    <>
      <AccordionItem
        index={0}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        question="What services do you offer?"
        answer="We provide custom web/app development, cloud solutions, UX/UI design, and more."
      />
      <hr className={hrClass} />

      <AccordionItem
        index={1}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        question="How do I know if this is right for my business?"
        answer="Book a free consult - we'll assess your goals and recommend the right approach."
      />
      <hr className={hrClass} />

      <AccordionItem
        index={2}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        question="How much does a project cost?"
        answer="Every project is different. Let's talk about your needs to get a tailored estimate."
      />
      <hr className={hrClass} />

      <AccordionItem
        index={3}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        question="How long does it take?"
        answer="Depends on scope - but we always prioritize quality and deadlines."
      />
      <hr className={hrClass} />

      <AccordionItem
        index={4}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        question="Can I start with a small project first?"
        answer="Absolutely. We often begin with MVPs or pilot projects."
      />
      {/* </div> */}
    </>
  );
}
