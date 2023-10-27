import React from "react";

type Props = {};

const UniCheckButton = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <a
        href="https://paychek.uni.club/"
        className="apply_btn no-underline visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[11px] px-[30px]"
      >
        Uni Paychek
      </a>
    </div>
  );
};

export default UniCheckButton;
