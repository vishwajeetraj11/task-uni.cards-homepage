import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Loading from "./svgs/Loading";
type Props = {
  phone: string;
  error: boolean;
  checkbox: boolean;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  inView: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  success: boolean;
  setCheckbox: React.Dispatch<React.SetStateAction<boolean>>;
};

const StickySection = (props: Props) => {
  const {
    phone,
    error,
    checkbox,
    onPhoneChange,
    setPhone,
    inView,
    loading,
    setLoading,
    setSuccess,
    success,
    setCheckbox,
  } = props;
  const mainControls = useAnimation();

  useEffect(() => {
    if (!inView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [inView]);

  const [isActiveForm, setIsActiveForm] = useState(false);

  const onApply = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!phone) return;
    setLoading(true);
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    });
    setLoading(false);
    setSuccess(true);
  };

  return (
    <>
      <motion.section
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="hidden sm:block fixed bottom-0 w-screen bg-[#f5f5f5] py-5 z-10"
      >
        <div className="mx-auto max-w-7xl px-12 w-full flex justify-between">
          <div
            className={`${
              (!success && !loading) || (!success && loading)
                ? "flex"
                : "hidden"
            } justify-between items-center w-full`}
          >
            <div className="flex w-full flex-row justify-between items-center">
              <form onSubmit={onApply}>
                <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                  <div className="flex items-center">
                    <input
                      className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                      placeholder="Enter Phone Number"
                      value={phone}
                      onChange={onPhoneChange}
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
                    className="flex items-center justify-center text-center text-sm leading-7 pt-2 ml-2 bg-[#FDEF78] rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
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
              success && !loading ? "flex" : "hidden"
            } w-full flex-row items-center justify-between`}
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
      </motion.section>
      <div
        className="w-full bottom-0 z-40 fixed md:hidden py-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%)",
        }}
      >
        <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
          {success ? (
            <div className="flex justify-center">
              <div className="flex block max-w-xs flex-col justify-start">
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
          ) : (
            <div className="flex flex-col transition-all ease-in">
              {isActiveForm && (
                <div
                  className="overflow-hidden"
                  style={{
                    background: "#192231",
                    border: "1px solid #fdef78",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                >
                  <div className="flex items-center bg-[#192233]">
                    <input
                      value={phone}
                      onChange={onPhoneChange}
                      id="phone"
                      className="w-full text-lg border-0 outline-none rounded-tr-xl rounded-tl-xl py-3"
                      style={{
                        background: "#192233",
                        color: "#fdef78",
                        padding: "8px 18px 16px",
                        fontWeight: 500,
                      }}
                      autoComplete="off"
                      placeholder="Enter your phone number"
                      type="tel"
                    />
                    <span className="w-6 h-full bg-[#192233]">
                      {" "}
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
                </div>
              )}
              <button
                type="submit"
                onClick={() => {
                  if (!isActiveForm) {
                    setIsActiveForm(true);
                    return;
                  }
                  onApply();
                }}
                disabled={
                  loading ||
                  error ||
                  (Boolean(phone.length) && phone.length < 10) ||
                  (Boolean(phone.length) && phone.length > 10)
                }
                className="w-full p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
              >
                <span>{loading ? "Applying..." : "Apply Now"}</span>

                {loading ? (
                  <Loading />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="17"
                    viewBox="0 0 23 17"
                    fill="none"
                    className="ml-3 inline"
                  >
                    <path
                      d="M0.9989 8.24414L22 8.24414"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.7563 15.4873L22 8.24364L14.7563 0.999978"
                      stroke="black"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              {isActiveForm && (
                <div className="consent flex items-center py-4 px-2 max-w-xs">
                  <input type="checkbox" id="consent-msg" checked />
                  <label
                    htmlFor="consent-msg"
                    className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                  >
                    You agree to be contacted by Uni Cards over Call, SMS, Email
                    or WhatsApp to guide you through your application.
                  </label>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StickySection;
