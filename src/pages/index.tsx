import { Inter } from "next/font/google";
import Nav from "@/components/nav";
import Star from "@/components/svgs/Star";
import BackgroundVideo from "@/components/BackgroundVideo";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import Note from "@/components/Note";
import Committed from "@/components/Committed";
import FeatureCards from "@/components/FeatureCards";
import FeatureImageSection from "@/components/FeatureImageSection";
import FeatureImageMore from "@/components/FeatureImageMore";
import AnimatedSection from "@/components/AnimatedSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={``}>
      <Nav />
      <div className="relative h-[100vh] w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent">
          <img
            src="/nx_wave_hero.png"
            alt="card_asset"
            className="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6"
          />
          <div className="z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
            <h1 className="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6 ">
              <span>
                <strong>NX Wave.</strong>
                The next-gen credit card for those who love rewards.
              </span>
            </h1>

            <div className="mt-4 md:mt-0">
              <p className="font-medium text-sm md:text-base md:mb-9">
                1% Cashback
                <Star />
                5x Rewards
                <Star />
                Zero Forex Markup
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex justify-between items-center block max-w-[94vw]">
                <div className="flex flex-col">
                  <form>
                    <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                      <div className="flex items-center">
                        <input
                          className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                          placeholder="Enter Phone Number"
                          value=""
                        />
                        <span className="w-6 flex items-center justify-end h-full"></span>
                      </div>
                      <button
                        type="submit"
                        className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-uni-yellow rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
                      >
                        <span>Apply Now</span>
                      </button>
                    </div>
                  </form>
                  <div className="consent flex items-center py-4 px-2 max-w-xs">
                    <input type="checkbox" checked id="consent-msg" />
                    <label
                      htmlFor="consent-msg"
                      className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                    >
                      You agree to be contacted by Uni Cards over Call, SMS,
                      Email or WhatsApp to guide you through your application.
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex hidden max-w-xs flex-col justify-start">
                <div className="w-full max-w-[300px]">
                  <a
                    href="https://uni-growth.onelink.me/v6cm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
                  >
                    <div className="w-full flex justify-center items-center">
                      <span>Download</span>
                    </div>
                  </a>
                </div>
                <div className="my-2">
                  <p className="text-white md:text-black text-[10px] leading-3">
                    Thank you for your interest in the Uni Card.
                    <br /> Download the Uni Cards app now and get your Uni Card
                    in minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackgroundVideo />
      </div>
      <div className="py-12 md:py-[150px]">
        <AnimatedSection />
        <FeatureImageMore />
      </div>
      <FeatureImageSection />
      <FeatureCards />
      <Committed />
      <Note />
      <FooterCTA />
      <Footer />
    </div>
  );
}
