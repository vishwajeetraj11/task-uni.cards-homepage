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
import StickySection from "@/components/StickySection";
import Header from "@/components/Header";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={``}>
      <Nav />
      <Header />
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
