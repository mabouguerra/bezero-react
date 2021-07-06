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
          <div
            className={`flex ${
              tab !== "tab-1" ? "hidden" : ""
            } mx-10 border-l-2 border-r-2 border-black`}
          >
            <div className="w-[55%] border-black border-r-2 ">
              <div className="flex bg-white">
                <div>
                  <button
                    onClick={() => setTab("tab-1")}
                    className="flex items-center justify-center p-2 bg-white border-r-2 border-black border-r-transparent w-28 focus:outline-none"
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
                  border-r-2 border-t-2 border-black
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
                  border-black border-r-2 border-t-2
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
                  p-2
                  bg-[#212121]
                  border-r-2 border-black border-t-2
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
                  border-r-2 border-black border-t-2
                  justify-center
                  p-2
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
                  border-r-2 border-black border-t-2
                  justify-center
                  bg-[#0F8B5D]
                  p-2
                  border-b-2
                  w-28
                  focus:outline-none
                "
                  >
                    <img src="/assets/icon-3.svg" alt="" className="h-24" />
                  </button>
                </div>
                <div className="px-10 py-10">
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
                  src="/assets/chart-1.png"
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

          <div
            className={`flex ${
              tab !== "tab-2" ? "hidden" : ""
            } mx-10 border-l-2 border-r-2 border-black`}
          >
            <div className="w-[55%] border-black border-r-2 ">
              <div className="bg-[#741F64] flex">
                <div>
                  <button
                    onClick={() => setTab("tab-1")}
                    className="flex items-center justify-center p-2 bg-white border-b-2 border-r-2 border-black w-28 focus:outline-none"
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
                  border-r-2 border-r-transparent border-black
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
                  border-black border-r-2 border-t-2
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
                  p-2
                  bg-[#212121]
                  border-r-2 border-black border-t-2
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
                  border-r-2 border-black border-t-2
                  justify-center
                  p-2
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
                  border-r-2 border-black border-t-2
                  justify-center
                  bg-[#0F8B5D]
                  border-b-2
                  p-2
                  w-28
                  focus:outline-none
                "
                  >
                    <img src="/assets/icon-3.svg" alt="" className="h-24" />
                  </button>
                </div>
                <div className="px-10 py-10 text-white">
                  <h2 className="text-3xl font-bold">Carbon Removal</h2>
                  <h3 className="mt-4 text-lg font-bold leading-tight">
                    Carbon Engineering (CE) DAC technology{" "}
                  </h3>
                  <p className="mt-6 text-lg">
                    Plants using CE’s carbon removal technology will enable the
                    issuance of negative emission credits, offersing a solution
                    to remove legacy emissions and permanently remove carbon
                    dioxide from the biosphere.
                  </p>
                  <p className="mt-3 text-lg">
                    <span className="font-bold">Additionality:</span> very high
                    scoring as carbon revenues fundamental to financing
                    expensive and complex technical infrastructure required to
                    deliver credits.
                    <br />
                    <span className="font-bold">Over-crediting:</span> risk is
                    low as carbon removal can be reliably measured throughout
                    the process.
                    <br />
                    <span className="bold">Leakage:</span> displacement
                    (activity shifting) risks are low given the smaller land
                    footprint required than other forms of sequestration and
                    life-cycle assessment used for carbon calculations.
                    <br />
                    <span className="font-bold">Permanence:</span> high scoring
                    as continual monitoring in line with national regulations to
                    identify leaks. Standards expected to contain risk buffer
                    pool to counter reversals. Low risk of mining for re-use
                    after geological sequestration.
                    <br />
                    <span className="font-bold">Policy environment:</span>
                    moderately high score as rising transport policy support
                    (e.g. California credits, EU/ UK Carbon Intensity-based fuel
                    policies); rising carbon intensity reductions set to
                    increase credit value, make DACCS more competitive. High
                    costs remain barrier to wider policy support. BeZero’s
                    innovative premium removal basket allows individuals and
                    businesses to achieve true net zero today.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-col">
              <div className="flex-1 px-12 py-10 border-b-2 border-black ">
                <h2 className="text-3xl font-bold text-center">
                  BeZero Carbon Rating: AAA+
                </h2>
                <div className="max-w-sm mx-auto mt-10">
                  <img
                    src="/assets/chart-2.png"
                    alt="chart"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="bg-[#222222] py-5 px-2">
                <p className="text-3xl text-center text-white">
                  Direct Air Capture & Storage
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex ${
              tab !== "tab-3" ? "hidden" : ""
            } mx-10 border-l-2 border-r-2 border-black`}
          >
            <div className="w-[55%] border-black border-r-2 ">
              <div className="bg-[#0F8B5D] flex">
                <div>
                  <button
                    onClick={() => setTab("tab-1")}
                    className="flex items-center justify-center p-2 bg-white border-b-2 border-r-2 border-black w-28 focus:outline-none"
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
                  border-r-2 border-b-2 border-black
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
                  border-black border-r-2 border-r-transparent
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
                  p-2
                  bg-[#212121]
                  border-r-2 border-black border-t-2
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
                  border-r-2 border-black border-t-2
                  justify-center
                  p-2
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
                  border-r-2 border-black border-t-2
                  justify-center
                  border-b-2
                  bg-[#0F8B5D]
                  p-2
                  w-28
                  focus:outline-none
                "
                  >
                    <img src="/assets/icon-3.svg" alt="" className="h-24" />
                  </button>
                </div>
                <div className="px-10 py-10 text-white">
                  <h2 className="text-3xl font-bold">Forestry</h2>
                  <h3 className="mt-4 text-lg font-bold leading-tight">
                    Revegetation with fruit trees in Mozambique (VCS 2085){" "}
                  </h3>
                  <p className="mt-6 text-lg">
                    This revegetation project plants fruit trees in the North
                    Manica Province of Mozambique, sequestering carbon on
                    previously abandoned land and creating long-term sustainable
                    livelihoods in the area.
                  </p>
                  <p className="mt-3 text-lg">
                    <span className="font-bold">Additionality:</span> moderately
                    high scoring as multiple tests conducted during
                    accreditation and conservative baselines used. No
                    project-specific risks found.
                    <br />
                    <span className="font-bold">Over-crediting:</span>{" "}
                    reasonable crediting mechanism with some discounting due to
                    uncertainties on biomass accumulation from regrowing
                    vegetation.
                    <br />
                    <span className="font-bold">Leakage:</span> use of abandoned
                    land reduces the risk that emissions have been shifted
                    elsewhere.
                    <br />
                    <span className="font-bold">Permanence:</span> inherent to
                    forestry projects (e.g. illegal logging, natural disasters)
                    mitigated with the use of a project-specific risk assessment
                    to define contribution to a global buffer pool.
                    <br />
                    <span className="font-bold">Policy environment:</span>{" "}
                    although local policies supportive of forestry exist, there
                    is limited proof of implementation or enforcement.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-col">
              <div className="flex-1 px-12 py-10 border-b-2 border-black ">
                <h2 className="text-3xl font-bold text-center">
                  BeZero Carbon Rating: AA+
                </h2>
                <div className="max-w-sm mx-auto mt-10">
                  <img
                    src="/assets/chart-3.png"
                    alt="chart"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="bg-[#222222] py-5 px-2">
                <p className="text-3xl text-center text-white">Reforestation</p>
              </div>
            </div>
          </div>

          <div
            className={`flex ${
              tab !== "tab-4" ? "hidden" : ""
            } mx-10 border-l-2 border-r-2 border-black`}
          >
            <div className="w-[55%] border-black border-r-2 ">
              <div className="flex bg-[#212121]">
                <div>
                  <button
                    onClick={() => setTab("tab-1")}
                    className="flex items-center justify-center p-2 bg-white border-b-2 border-r-2 border-black w-28 focus:outline-none"
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
                  border-r-2 border-b-2 border-black
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
                  border-black border-r-2 border-b-2
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
                  p-2
                  bg-[#212121]
                  border-r-2 border-black border-r-transparent
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
                  border-r-2 border-black border-t-2
                  justify-center
                  p-2
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
                  border-r-2 border-black border-t-2
                  justify-center
                  border-b-2
                  bg-[#0F8B5D]
                  p-2
                  w-28
                  focus:outline-none
                "
                  >
                    <img src="/assets/icon-3.svg" alt="" className="h-24" />
                  </button>
                </div>
                <div className="px-10 py-10 text-white">
                  <h2 className="text-3xl font-bold">Blue Carbon</h2>
                  <h3 className="mt-4 text-lg font-bold leading-tight">
                    Mangroves reforestation & restoration in Myanmar (VCS 1764)
                  </h3>
                  <p className="mt-6 text-lg">
                    The project engages the local population of a coastal region
                    in Myanmar to restore degraded mangrove ecosystems. It
                    enhances protection from natural disasters and conserves
                    biodiversity while diversifying livelihoods of local
                    communities. Myanmar has one of the highest rates of
                    mangrove loss.
                  </p>
                  <p className="mt-3 text-lg">
                    <span className="font-bold">Additionality:</span> scores
                    highly due to low restoration efforts and a lack of
                    regulation to enforce conservation. Longer payback periods
                    align incentives to carbon sequestration timings.
                    <br />
                    <span className="font-bold">Over-crediting:</span>{" "}
                    conservative baselines used but some discounting applied due
                    to some calculation uncertainties.
                    <br />
                    <span className="font-bold">Leakage:</span> some risk of
                    activity-shifting outside project boundary but employment of
                    local communities works to prevent displacement.
                    <br />
                    <span className="font-bold">Permanence:</span> some risks
                    due to expected sea level rise and national land use
                    policies which are considered in accreditation.
                    <br />
                    <span className="font-bold">Policy environment:</span>{" "}
                    existing policy support through the The National Land Use
                    Policy which aims to overcome land use conflict and promote
                    economic development and natural conservation
                    simultaneously.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-col">
              <div className="flex-1 px-12 py-10 border-b-2 border-black ">
                <h2 className="text-3xl font-bold text-center">
                  BeZero Carbon Rating: AAA-
                </h2>
                <div className="max-w-sm mx-auto mt-10">
                  <img
                    src="/assets/chart-4.png"
                    alt="chart"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="bg-[#222222] py-5 px-2">
                <p className="text-3xl text-center text-white">
                  Mangroves restoration
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex ${
              tab !== "tab-5" ? "hidden" : ""
            } mx-10 border-l-2 border-r-2 border-black`}
          >
            <div className="w-[55%] border-black border-r-2 ">
              <div className="flex bg-[#FDCE31]">
                <div>
                  <button
                    onClick={() => setTab("tab-1")}
                    className="flex items-center justify-center p-2 bg-white border-b-2 border-r-2 border-black w-28 focus:outline-none"
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
                  border-r-2 border-b-2 border-black
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
                  border-black border-r-2 border-b-2
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
                  p-2
                  bg-[#212121]
                  border-r-2 border-black border-b-2
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
                  border-r-2 border-black border-r-transparent
                  justify-center
                  p-2
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
                  border-r-2 border-black border-t-2
                  border-b-2
                  justify-center
                  bg-[#0F8B5D]
                  p-2
                  w-28
                  focus:outline-none
                "
                  >
                    <img src="/assets/icon-3.svg" alt="" className="h-24" />
                  </button>
                </div>
                <div className="px-10 py-10 text-white">
                  <h2 className="text-3xl font-bold">Soil Carbon</h2>
                  <h3 className="mt-4 text-lg font-bold leading-tight">
                    Restoration of degraded grasslands in Mongolia (Plan Vivo
                    2016_015)
                  </h3>
                  <p className="mt-6 text-lg">
                    This is a community-driven project sequesters carbon through
                    improved rangeland management, emphasising the livelihood
                    benefits to nomadic herders. It conserves globally important
                    biodiversity heritage and a range of broader ecosystem
                    services.
                  </p>
                  <p className="mt-3 text-lg">
                    <span className="font-bold">Additionality:</span> easily
                    demonstrated due to the lack of local precedent, knowledge
                    and financial capacity to implement the biodiversity
                    conservation and grassland management activities without
                    access to carbon credits.
                    <br />
                    <span className="font-bold">Over-crediting:</span> high
                    quality soil carbon modelling applied with adjustments made
                    for uncertainty.
                    <br />
                    <span className="font-bold">Leakage:</span> displacement of
                    grazing considered but broader potential leakage
                    considerations not included.
                    <br />
                    <span className="font-bold">Permanence:</span> risks are
                    mitigated by a buffer pool and the soil carbon model
                    accounts for various sources of uncertainty.
                    <br />
                    <span className="font-bold">Policy environment:</span> the
                    principal legislation guiding rangeland management in
                    Mongolia does not specify particular regulations on herders
                    themselves in respect of grazing management.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-col">
              <div className="flex-1 px-12 py-10 border-b-2 border-black ">
                <h2 className="text-3xl font-bold text-center">
                  BeZero Carbon Rating: AAA
                </h2>
                <div className="max-w-sm mx-auto mt-10">
                  <img
                    src="/assets/chart-5.png"
                    alt="chart"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="bg-[#222222] py-5 px-2">
                <p className="text-3xl text-center text-white">
                  Grassland restoration
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex ${
              tab !== "tab-6" ? "hidden" : ""
            } mx-10 border-l-2 border-r-2 border-black`}
          >
            <div className="w-[55%] border-black border-r-2 ">
              <div className="flex bg-[#0F8B5D]">
                <div>
                  <button
                    onClick={() => setTab("tab-1")}
                    className="flex items-center justify-center p-2 bg-white border-b-2 border-r-2 border-black w-28 focus:outline-none"
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
                  border-r-2 border-b-2 border-black
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
                  border-black border-r-2 border-b-2
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
                  p-2
                  bg-[#212121]
                  border-r-2 border-black border-b-2
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
                  border-r-2 border-black border-b-2
                  justify-center
                  p-2
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
                  border-r-2 border-black border-r-transparent
                  justify-center
                  bg-[#0F8B5D]
                  p-2
                  w-28
                  focus:outline-none
                "
                  >
                    <img src="/assets/icon-3.svg" alt="" className="h-24" />
                  </button>
                </div>
                <div className="px-10 py-10 text-white">
                  <h2 className="text-3xl font-bold">Forestry</h2>
                  <h3 className="mt-4 text-lg font-bold leading-tight">
                    Afforestation project in China (VCS 2087)
                  </h3>
                  <p className="mt-6 text-lg">
                    Afforestation project on degraded land in China to plant
                    native tree species. This project helps prevent
                    desertification and improves the soil quality. It also aims
                    to enhances local biodiversity conservation by increasing
                    the connectivity of forests, and generates income and job
                    opportunities for local communities
                  </p>
                  <p className="mt-3 text-lg">
                    <span className="font-bold">Additionality:</span> multiple
                    tests were conducted during accreditation and conservative
                    baselines used. We find no project-specific risks to
                    additionality.
                    <br />
                    <span className="font-bold">Over-crediting:</span>{" "}
                    reasonable crediting mechanism used with some discounting
                    applied due to potential crossovers with national targets.
                    <br />
                    <span className="font-bold">Leakage:</span> some evidence of
                    potential sector-level international market leakage.
                    <br />
                    <span className="font-bold">Permanence:</span> uncertainty
                    risks inherent to forestry projects, mitigated with the use
                    of a project-specific risk assessment to define contribution
                    to a global buffer pool.
                    <br />
                    <span className="font-bold">Policy environment:</span> some
                    local policies exist, but there is limited proof of
                    implementation or enforcement. China has set national
                    targets within its NDC to increase forest cover (24.1% by
                    2035).
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-col">
              <div className="flex-1 px-12 py-10 border-b-2 border-black ">
                <h2 className="text-3xl font-bold text-center">
                  BeZero Carbon Rating: AA+
                </h2>
                <div className="max-w-sm mx-auto mt-10">
                  <img
                    src="/assets/chart-6.png"
                    alt="chart"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="bg-[#222222] py-5 px-2">
                <p className="text-3xl text-center text-white">Afforestation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
