import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => {
  return <div className="mx-auto max-w-[1280px] w-full">{props.children}</div>;
};

export default Container;
