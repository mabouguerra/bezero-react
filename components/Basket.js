import { useState } from "react";

export default function Basket() {
  const [tab, setTab] = useState("tab-1");
  return (
    <div>
      {/* section 4 mobile*/}
      <div className="lg:hidden">
        <div className="border-b-2 border-black">
          <div
            className="
            mx-4
            border-l-2 border-r-2 border-black
            px-5
            py-10
            bg-[#741F64]
          "
          >
            <h3 className="text-base font-bold text-white">
              The world’s premium carbon removal basket
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white">
              BeZero has assessed hundreds of carbon offsetting projects
              worldwide to identify the highest quality credits available today
              at the best prices. The BeZero basket offers you a
              <span className="font-bold">
                simple, diversified portfolio, optimised to offset a true tonne
                of carbon.{" "}
              </span>
              We do this by purchasing more than one credit for every tonne of
              carbon sold, according to how a project scores in our ratings
              framework.
            </p>
          </div>
        </div>
        <div className="border-b-2 border-black">
          <div className="py-4 mx-4 border-l-2 border-r-2 border-black">
            <div className="flex items-center justify-center">
              <img src="./assets/process-mobile.png" alt="process" />
            </div>
          </div>
        </div>
      </div>
      {/*section 4 desktop*/}
      <div className="hidden lg:block">
        <div className="border-b-2 border-black">
          <div className="flex mx-10 border-l-2 border-r-2 border-black">
            <div className="w-[55%] border-black border-r-2 flex">
              <div className={`${tab !== "tab-1" ? "hidden" : ""}`}>
                <div>
                  <button
                    onClick={() => setTab("tab-1")}
                    className="flex items-center justify-center p-2 border-b-2 border-black w-28 focus:outline-none"
                  >
                    <img src="/assets/icon-0.svg" alt="" className="h-24" />
                  </button>
                  <button
                    onClick={() => setTab("tab-2")}
                    className="
                  flex
                  items-center
                  w-28
                  justify-center
                  p-2
                  border-b-2 border-r-2 border-black
                  bg-[#741F64]
                  focus:outline-none
                "
                  >
                    <img src="/assets/icon-2.svg" alt="" className="h-24" />
                  </button>
                  <button
                    onClick={() => setTab("tab-3")}
                    className="
                  flex
                  bg-[#0F8B5D]
                  items-center
                  justify-center
                  p-2
                  border-b-2 border-r-2 border-black
                  w-28
                  focus:outline-none
                "
                  >
                    <img src="/assets/icon-3.svg" alt="" className="h-24" />
                  </button>
                  <button
                    onClick={() => setTab("tab-4")}
                    className="
                  flex
                  items-center
                  justify-center
                  border-r-2
                  p-2
                  bg-[#212121]
                  border-b-2 border-black
                  w-28
                  focus:outline-none
                "
                  >
                    <img src="/assets/icon-1.svg" alt="" className="h-24" />
                  </button>
                  <button
                    onClick={() => setTab("tab-5")}
                    className="
                  flex
                  items-center
                  bg-[#FDCE31]
                  justify-center
                  p-2
                  border-b-2 border-r-2 border-black
                  w-28
                  focus:outline-none
                "
                  >
                    <img src="/assets/icon-5.svg" alt="" className="h-24" />
                  </button>
                  <button
                    onClick={() => setTab("tab-6")}
                    className="
                  flex
                  items-center
                  justify-center
                  bg-[#0F8B5D]
                  p-2
                  border-r-2 border-black
                  w-28
                  focus:outline-none
                "
                  >
                    <img src="/assets/icon-3.svg" alt="" className="h-24" />
                  </button>
                </div>
                <div className="px-10 pt-10">
                  <h2 className="text-3xl font-bold">BeZero Carbon Ratings</h2>
                  <h3 className="mt-4 text-lg font-bold leading-tight">
                    A top-down assessment of the CO2e efficacy of voluntary
                    offsets
                  </h3>
                  <p className="mt-6 text-lg">
                    BeZero’s innovative premium removal basket allows
                    individuals and businesses to achieve true net zero today.
                  </p>
                  <p className="mt-3 text-lg">
                    Every AAA+ BeZero Carbon Rated basket blends one DAC removal
                    unit with an optimised portfolio of the highest quality
                    removal offsets from the world’s three major carbon sinks -
                    trees, i oceans and soil.
                  </p>
                  <p className="mt-3 text-lg">
                    BeZero Carbon Ratings provide an additional layer of
                    analysis to accredited projects, enabling buyers to
                    understand the product and incentivising sellers to pursue
                    high-quality projects and approaches.
                  </p>
                  <p className="mt-3 text-lg">
                    Our diversified portfolio is optimised to offset a true
                    tonne of carbon by purchasing more than one credit for every
                    tonne of carbon sold, according to how a project scores in
                    our ratings framework. ..click the icons to learn more.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-col">
              <div className="flex items-center justify-center flex-1 border-b-2 border-black ">
                <img
                  src="/assets/chart-desktop.png"
                  alt="chart"
                  className="max-w-sm"
                />
              </div>
              <div className="bg-[#222222] py-5 px-2">
                <p className="text-3xl text-center text-white">
                  BeZero premium removal basket
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
