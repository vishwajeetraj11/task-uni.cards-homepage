import React from "react";
import Logo from "./Logo";
import UniCheckButton from "./UniCheckButton";
import Container from "./Container";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="flex min-h-[80px] z-[15] w-full absolute justify-between px-[45px] min-w-[1330px]">
      <Logo />
      <UniCheckButton />
    </div>
  );
};

export default Nav;
