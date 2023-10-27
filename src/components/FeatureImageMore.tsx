import React from "react";

type Props = {};

const FeatureImageMore = (props: Props) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-4 px-8">
      <div className="flex justify-center flex-col">
        <div
          className="flex md:items-center flex-col-reverse md:flex-row
                w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
        >
          <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div className="w-full md:w-[300px] lg:w-[510px]">
              <div>
                <span style={{ fontWeight: 700 }}>
                  1% assured cashback on your spends.
                </span>
                <span style={{ fontWeight: 700, color: "#9EA7AE" }}>
                  The more you spend, the more you earn.
                </span>
              </div>
            </div>
            <div className="info-caption">
              <div className="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">
                Not applicable on fuel purchase, rent &amp; wallet transfers,
                ATM withdrawals &amp; international transactions.
              </div>
            </div>
          </div>
          <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
            <div className="flex justify-center overflow-hidden">
              <div className="relative w-[280px] lg:w-[448px]">
                <img src="/one_percent_cashback.png" className="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex md:items-center flex-col-reverse md:flex-row-reverse
                
                w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
        >
          <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div className="w-full md:w-[300px] lg:w-[510px]">
              <div>
                <span style={{ fontWeight: 700 }}>
                  5x more value than your cashback,
                </span>
                <span style={{ fontWeight: 700, color: "#9EA7AE" }}>
                  {" "}
                  only at the Uni Store.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
            <div className="flex justify-center overflow-hidden">
              <div className="relative w-[280px] lg:w-[448px]">
                <img src="/five_x_rewards.png" className="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex md:items-center flex-col-reverse md:flex-row
                
                w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
        >
          <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div className="w-full md:w-[300px] lg:w-[510px]">
              <div>
                <span style={{ fontWeight: 700 }}>Zero Forex Markup.</span>
                <br />
                <span style={{ fontWeight: 700, color: "#9EA7AE" }}>
                  {" "}
                  Go international, without any fees.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
            <div className="flex justify-center overflow-hidden">
              <div className="relative w-[280px] lg:w-[448px]">
                <img src="/forex_globe.png" className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
          <p>
            Lifetime <span className="text-uni-green">free. </span>
            <span className="block sm:inline-block md:text-center">
              No joining fee.
            </span>
            <span className="block md:text-center"> No annual charges.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureImageMore;
