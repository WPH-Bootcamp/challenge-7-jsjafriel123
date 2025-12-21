import TestiCard from "../../ui/TestiCard";

type testicard = {
  id: number;
  rating: string;
  testimony: string;
  name: string;
  title: string;
  photo: string;
};

const testicards: testicard[] = [
  {
    id: 0,
    rating: "../public/assets/Rating.svg",
    testimony: `“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”`,
    name: "John Lee",
    title: "Creative Director at Innovate Corp",
    photo: "../public/assets/Testi-Lee.svg",
  },
  {
    id: 1,
    rating: "../public/assets/Rating.svg",
    testimony: `“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”`,
    name: "Sarah Tan",
    title: "Product Manager at Finovate",
    photo: "../public/assets/Testi-Sarah.svg",
  },
  {
    id: 2,
    rating: "../public/assets/Rating.svg",
    testimony: `“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”`,
    name: "Emily Chen",
    title: "Marketing Head at Tech Solutions",
    photo: "../public/assets/Testi-Emily.svg",
  },
];

const Testimony = () => {
  return (
    <section
      id="testimony"
      className="flex flex-col w-[393px] h-[583px] gap-8 py-8 items-center lg:w-full lg:h-[723px] lg:px-0 lg:py-16 lg:gap-16"
    >
      {/* <!-- ---------------- -->
            <!-- Testimony Header -->
            <!-- ---------------- --> */}
      <div
        id="portfolio-header"
        className="flex flex-col w-[361px] h-[115px] gap-[11px] items-center lg:w-full lg:h-[99px]"
      >
        <h2 className="w-auto h-[76px] font-bold text-[28px]/[38px] text-[#0A0D12] text-center lg:h-14 lg:text-10/14 dark:text-current">
          What Partners Say About Working With Us
        </h2>
        <p className="w-auto h-[28px] font-medium text-sm/[28px] text-[#717680] text-center lg:h-8 lg:text-[18px]/[32px] dark:text-[#A4A7AE]">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>
      {/* <!-- --------- -->
            <!-- Testimony -->
            <!-- --------- --> */}
      {/* <!-- Testimonial Cards --> */}
      <div className="w-full h-auto flex flex-row justify-center gap-4 overflow-hidden lg:relative">
        {testicards.map((testicard) => (
          <TestiCard
            rating={testicard.rating}
            testimony={testicard.testimony}
            name={testicard.name}
            title={testicard.title}
            photo={testicard.photo}
          />
        ))}
        ;{/* <!-- Right shadowing --> */}
        <div className="hidden lg:flex lg:absolute lg:left-0 lg:top-0 lg:w-[400px] lg:h-[389px] lg:bg-gradient-to-r lg:from-white lg:to-white/0 dark:from-black dark:to-black/0"></div>
        {/* <!-- Left shadowing --> */}
        <div className="hidden lg:flex lg:absolute lg:right-0 lg:top-0 lg:w-[400px] lg:h-[389px] lg:bg-gradient-to-l lg:from-white lg:to-white/0 dark:from-black dark:to-black/0"></div>
      </div>
      {/* <!-- Pagination --> */}
      <div className="flex justify-between w-9 h-2 lg:w-12 lg:h-3">
        <button className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#FF6C37]"></button>
        <button className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#DEDCDC] dark:bg-[#181D27]"></button>
        <button className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#DEDCDC] dark:bg-[#181D27]"></button>
      </div>
      {/* <img
        src="../public/assets/Pagination.svg"
        alt="Pagination"
        className="w-9 h-2 lg:w-12 lg:h-3"
      /> */}
    </section>
  );
};

export default Testimony;
