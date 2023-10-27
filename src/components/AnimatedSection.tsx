"use client";
import React from "react";
import Down from "./svgs/Down";
import { motion } from "framer-motion";
type Props = {};

const nodeArr = [
  <>
    {" "}
    Earn 1% assured cashback{" "}
    <span className="css-1ggwlzr text-[#9ea7ae]">on your spends. Get</span>
  </>,
  <>
    more value than cashback{" "}
    <span className="css-1ggwlzr text-[#9ea7ae]"> at the Uni Store. Enjoy</span>
  </>,
  <>
    {" "}
    <span className="text-[#9EA7AE] css-1ggwlzr">round the clock </span>
    Whatsapp support.{" "}
    <span className="text-[#9EA7AE] css-1ggwlzr">And it&apos;s</span>
  </>,
  <>
    {" "}
    lifetime free
    <span className="css-1ggwlzr text-[#9ea7ae]">
      ; no joining fee, no annual charges.
    </span>
  </>,
];

const AnimatedSection = (props: Props) => {
  return (
    <section>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4">
        <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
          {nodeArr.map((node, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.7, delay: i * 0.5 }}
            >
              {node}
            </motion.p>
          ))}
        </div>
        <div className="flex md:justify-center py-12">
          <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.7, delay: 0.7 * 3 }}
            style={{
              background:
                "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
            }}
            className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] items-center justify-center"
          >
            <Down className="w-9 md:w-14 css-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSection;
