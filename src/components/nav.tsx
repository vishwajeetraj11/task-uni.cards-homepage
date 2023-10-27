import React, { useState } from "react";
import Logo from "./Logo";
import UniCheckButton from "./UniCheckButton";
import Container from "./Container";

type Props = {};

const Nav = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive((p) => !p);
  return (
    <header className="absolute z-[15] min-h-[80px] w-full">
      <nav className="flex justify-between px-[45px] max-w-[1330px] mx-auto">
        <Logo />
        <div className="flex items-center justify-center">
          <UniCheckButton />
          <div className="block sm:hidden">
            {isActive ? (
              <svg
                width="24"
                height="24"
                fill="none"
                className="cursor-pointer"
                onClick={toggle}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z"
                ></path>
                <path
                  fill="#fff"
                  d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z"
                ></path>
                <path
                  fill="#fff"
                  d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z"
                ></path>
                <path
                  fill="#fff"
                  d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z"
                ></path>
                <path
                  fill="#fff"
                  d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z"
                ></path>
                <path
                  fill="#fff"
                  d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z"
                ></path>
              </svg>
            ) : (
              <svg
                width="31"
                height="20"
                className="cursor-pointer"
                onClick={toggle}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31 20"
              >
                <rect width="31" height="2" fill="white"></rect>
                <rect width="31" height="2" fill="white"></rect>
                <rect width="31" height="2" fill="white"></rect>
                <rect y="9" width="31" height="2" fill="white"></rect>
                <rect y="9" width="31" height="2" fill="white"></rect>
                <rect y="9" width="31" height="2" fill="white"></rect>
                <rect y="18" width="31" height="2" fill="white"></rect>
                <rect y="18" width="31" height="2" fill="white"></rect>
                <rect y="18" width="31" height="2" fill="white"></rect>
              </svg>
            )}
          </div>
        </div>
      </nav>
      <div className={`${isActive ? "block" : "hidden"} md:hidden`}>
        <div className="text-white bg-[#00000099] shadow-lg">
          <div className="p-4 px-5 font-medium text-sm leading-7 css-5z988z">
            <a
              href="https://paychek.uni.club/"
              className="flex justify-between"
            >
              <span>Uni Paychek</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
