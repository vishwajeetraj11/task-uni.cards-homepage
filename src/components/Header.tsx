import Star from "@/components/svgs/Star";
import BackgroundVideo from "@/components/BackgroundVideo";

import StickySection from "@/components/StickySection";
import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Loading from "./svgs/Loading";

type Props = {};

const Header = (props: Props) => {
  const [phone, setPhone] = useState("");
  const [checkbox, setCheckbox] = useState(true);
  const [error, setError] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const inView = useInView(divRef);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const regex = /^[0-9\b]+$/;
    if (value === "" || !regex.test(value)) {
      if (value.length === 0) {
        setPhone(value);
      }
      return;
    }

    if (
      value.startsWith("7") ||
      value.startsWith("8") ||
      value.startsWith("9")
    ) {
      setError(false);
    } else if (value.length === 10) {
      setError(true);
    } else if (value.length < 10) {
      setError(false);
    }

    if (value.length <= 10) {
      setPhone(value);
    }
  };
  return (
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
            <div
              ref={divRef}
              className="flex justify-between items-center block max-w-[94vw]"
            >
              <div
                className={`${
                  (!success && !loading) || (!success && loading)
                    ? "block"
                    : "hidden"
                } flex flex-col`}
              >
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!phone) return;
                    setLoading(true);
                    const data = await new Promise((resolve) => {
                      setTimeout(() => {
                        resolve(1);
                      }, 3000);
                    });
                    setLoading(false);
                    setSuccess(true);
                  }}
                >
                  <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                    <div className="flex items-center">
                      <input
                        className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={onPhoneChange}
                        type="tel"
                      />
                      <span className="w-6 flex items-center justify-end h-full">
                        {error && phone.length === 10 ? (
                          <>
                            <svg
                              width="4"
                              height="17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.688 11.664 3.336 0H.048l.648 11.664h1.992Zm-.984 5.328c.96 0 1.68-.72 1.68-1.68s-.72-1.68-1.68-1.68c-.984 0-1.704.72-1.704 1.68s.72 1.68 1.704 1.68Z"
                                fill="#F48282"
                              ></path>
                            </svg>
                          </>
                        ) : !error && phone.length < 10 && phone.length > 0 ? (
                          <button
                            type="button"
                            onClick={() => {
                              setPhone("");
                            }}
                          >
                            <svg
                              width="14"
                              height="15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.498.498.356 1.72l5.41 5.786L.41 13.233l1.17 1.25 5.355-5.728 5.41 5.786 1.142-1.22-5.41-5.787 5.492-5.873-1.17-1.25-5.491 5.873L1.498.498Z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </button>
                        ) : phone.length === 10 ? (
                          <svg
                            width="20"
                            height="14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.668.332a1.132 1.132 0 0 1 0 1.6L8.504 13.098a1.887 1.887 0 0 1-2.668 0L.332 7.593a1.132 1.132 0 0 1 1.6-1.601l5.238 5.237L18.067.332a1.132 1.132 0 0 1 1.601 0Z"
                              fill="#79E691"
                            ></path>
                          </svg>
                        ) : null}
                      </span>
                    </div>
                    <button
                      type="submit"
                      disabled={
                        loading ||
                        error ||
                        (Boolean(phone.length) && phone.length < 10) ||
                        (Boolean(phone.length) && phone.length > 10)
                      }
                      className="flex items-center justify-center text-center text-sm leading-7 pt-2 ml-2 bg-[#fdef78] rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
                    >
                      {loading ? <Loading /> : null}
                      <span>{loading ? "Applying..." : "Apply Now"}</span>
                    </button>
                  </div>
                </form>
                <div className="consent flex items-center py-4 px-2 max-w-xs">
                  <input
                    onChange={(e) => {
                      setCheckbox(e.target.checked);
                    }}
                    type="checkbox"
                    checked={checkbox}
                    id="consent-msg"
                    className="mr-2"
                  />
                  <label
                    htmlFor="consent-msg"
                    className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                  >
                    You agree to be contacted by Uni Cards over Call, SMS, Email
                    or WhatsApp to guide you through your application.
                  </label>
                </div>
              </div>
            </div>
            <div
              className={`${
                success ? "block" : "hidden"
              } max-w-xs flex-col justify-start`}
            >
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
                  <br /> Download the Uni Cards app now and get your Uni Card in
                  minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StickySection
        phone={phone}
        checkbox={checkbox}
        error={error}
        onPhoneChange={onPhoneChange}
        setPhone={setPhone}
        inView={inView}
        loading={loading}
        setLoading={setLoading}
        success={success}
        setCheckbox={setCheckbox}
        setSuccess={setSuccess}
      />
      <BackgroundVideo />
    </div>
  );
};

export default Header;
