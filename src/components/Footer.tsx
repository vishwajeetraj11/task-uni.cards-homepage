import React from "react";
import Pcisss from "./svgs/Pcisss";
import { LogoWhite } from "./Logo";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section>
      <div className="relative w-full bg-[#222222]">
        <div className="flex items-center justify-center p-4 text-[#8d8d95]">
          <p>Uni maintains the highest level of security standards</p>
          <Pcisss className="ml-3" />
        </div>
      </div>
      <footer
        className="flex flex-col items-center bg-[#121212] text-white pt-[30px] px-4 md:px-14 md:pt-[50px] pb-40"
        id="footer"
      >
        <div className="w-full max-w-[1240px] min-h-[auto]">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <div className="flex flex-col w-full lg:w-1/2 items-start">
              <div className="mx-0 md:m-0">
                <LogoWhite />
              </div>
              <div className="text-[#8d8d95] text-[13px] lg:text-base">
                <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                  Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony,
                  Koramangala, Bengaluru, Karnataka 560034
                </p>
                <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px] mt-4">
                  Contact Us:<a href="tel: 080 68216821">080 68216821</a>
                </p>
                <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                  Email:<a href="mailto: care@uni.club">care@uni.club</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] h-[1px] w-full max-w-[1240px] mt-8"></div>
        <div className="py-4 w-full max-w-[1240px] min-h-[auto]">
          <p className="text-left">
            <a
              href="https://www.sbmbank.co.in/aboutus/grievance-redressal-mechanism.php"
              className="text-[#FFFFFF]"
            >
              <u>Grievance Redressal Mechanism</u> - SBM Bank India
            </a>
          </p>
        </div>
        <div
          className="h-[1px] w-full max-w-[1240px] mx-0 mb-5 md:mb-8"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#00dcc8 26.31%,#00dcc8 61.59%,#fff061 74.32%,#fff061 85.31%)",
          }}
        ></div>
        <div className="flex w-full max-w-[1240px] flex-col justify-center md:flex-row md:justify-between">
          <div className="flex w-full flex-wrap flex-1 justify-center md:justify-start">
            <div className="h-10 w-30">
              <a
                className="py-0 px-[18px] h-[60px]"
                href="https://www.instagram.com/uni_cards/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="h-10 w-30">
              <a
                className="py-0 px-[18px] h-[60px]"
                href="https://www.linkedin.com/company/uni-cards"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="h-10 w-30">
              <a
                className="py-0 px-[18px] h-[60px]"
                href="https://twitter.com/cards_uni"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
            <div className="h-10 w-30">
              <a
                className="py-0 px-[18px] h-[60px]"
                href="https://www.facebook.com/Uni-Cards-104179288358904"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div className="h-10 w-30">
              <a
                className="py-0 px-[18px] h-[60px]"
                href="https://careers.uni.cards/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </a>
            </div>
          </div>
          <div className="p-0 pb-5 flex justify-center flex-wrap">
            <span data-testid="cc-kfs">
              <a
                className="h-[60px]"
                href="/credit-card-key-facts"
                target="_blank"
              >
                Credit Card KFS
              </a>
              <span className="px-2">|</span>
            </span>
            <span data-testid="nxwave-tnc">
              <a
                className="h-[60px]"
                href="/docs/Credit_Card_MITC.pdf"
                target="_blank"
              >
                Credit Card T&amp;Cs
              </a>
              <span className="px-2">|</span>
            </span>
            <span data-testid="uni-tnc">
              <a
                className="h-[60px]"
                href="/privacy-policy-main"
                target="_blank"
              >
                Uni T&amp;Cs
              </a>
              <span className="px-2">|</span>
            </span>
            <span data-testid="nbfc-tnc">
              <a className="h-[60px]" href="/nbfc-terms" target="_blank">
                Lending Partner TnCs
              </a>
            </span>
          </div>
        </div>
        <div className="sm:h-40 md:hidden"></div>
      </footer>
    </section>
  );
};

export default Footer;
