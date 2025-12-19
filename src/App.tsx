import Header from "./components/container/HeaderSection";
import Hero from "./components/container/HeroSection";
import Client from "./components/container/ClientSection";
import Achievement from "./components/container/AchievementSection";
import Process from "./components/container/ProcessSection";
import Service from "./components/container/ServiceSection";
import Industry from "./components/container/IndustrySection";
import Portfolio from "./components/container/PortfolioSection";
import Testimony from "./components/container/TestimonySection";
import FaQ from "./components/container/FaqSection";
import LetsTalk from "./components/container/LetsTalkSection";
import Footer from "./components/container/FooterSection";
// import Footer from "./components/container/FooterSection";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Client />
        <Achievement />
        <Process />
        <Service />
        <Industry />
        <Portfolio />
        <Testimony />
        <FaQ />
        <LetsTalk />
        <Footer />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
