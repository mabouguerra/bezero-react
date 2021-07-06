import { useState } from "react";

export default function FAQ() {
  const [faq, setFaq] = useState(null);

  console.log(faq);
  return (
    <div>
      {/* section 3 mobile */}
      <div className="lg:hidden">
        <div className="border-b-2 border-black">
          <div
            className="
            mx-4
            border-l-2
            bg-[#09008C] bg-opacity-75
            border-r-2 border-black
          "
          >
            <img
              src="/assets/faq-mobile.png"
              alt=""
              className="object-cover w-full h-full mix-blend-multiply"
            />
          </div>
        </div>
        <div className="border-b-2 border-black">
          <div className="h-6 mx-4 border-l-2 border-r-2 border-black"></div>
        </div>
        <div className="border-b-2 border-black">
          <div className="bg-[#FFCF1A] px-5 py-7 mx-4 border-l-2 border-r-2 border-black">
            <h2 className="text-3xl font-bold">FAQ's</h2>
          </div>
        </div>
        <div className="relative">
          <div className="border-b-2 border-black">
            <div className="mx-4 border-l-2 border-r-2 border-black">
              <button
                onClick={() => setFaq("faq-1")}
                className="w-full px-5 py-6 text-sm font-bold text-left focus:outline-none"
              >
                Who are BeZero Carbon & Carbon Engineering?
              </button>
            </div>
          </div>

          <div className="border-b-2 border-black">
            <div className="mx-4 border-l-2 border-r-2 border-black">
              <button
                onClick={() => setFaq("faq-2")}
                className="w-full px-5 py-6 text-sm font-bold text-left focus:outline-none"
              >
                What is the BeZero Carbon Ratings Framework?
              </button>
            </div>
          </div>
          <div className="border-b-2 border-black">
            <div className="mx-4 border-l-2 border-r-2 border-black">
              <button
                onClick={() => setFaq("faq-3")}
                className="w-full px-5 py-6 text-sm font-bold text-left focus:outline-none"
              >
                What is Direct Air Capture technology?
              </button>
            </div>
          </div>
          <div className="border-b-2 border-black">
            <div className="mx-4 border-l-2 border-r-2 border-black">
              <button
                onClick={() => setFaq("faq-4")}
                className="w-full px-5 py-6 text-sm font-bold text-left focus:outline-none"
              >
                What happens when I buy DAC offsets?
              </button>
            </div>
          </div>
          <div className="border-b-2 border-black">
            <div className="mx-4 border-l-2 border-r-2 border-black">
              <button
                onClick={() => setFaq("faq-5")}
                className="w-full px-5 py-6 text-sm font-bold text-left focus:outline-none"
              >
                What happens when I buy the DAC basket?
              </button>
            </div>
          </div>
          <div className="border-b-2 border-black">
            <div className="mx-4 border-l-2 border-r-2 border-black">
              <button
                onClick={() => setFaq("faq-6")}
                className="w-full px-5 py-6 text-sm font-bold text-left focus:outline-none"
              >
                Why buy carbon removal offsets?
              </button>
            </div>
          </div>

          <div
            onClick={() => setFaq(null)}
            className={`absolute cursor-pointer inset-y-0 inset-x-[18px] bg-white ${
              faq !== "faq-1" ? "hidden" : ""
            }`}
          >
            <div className="px-5 py-6">
              <div className="flex items-center justify-between space-x-6">
                <h1 className="text-sm font-bold">
                  Who are BeZero Carbon & Carbon Engineering?
                </h1>
                <span>
                  <svg
                    className="h-3 rotate-45"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                      fill="#333333"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-8 space-y-6 text-lg">
                <p>
                  BeZero Carbon is a London-based Climate Asset and Liability
                  Management (C·A·L·M) solutions business launched in April,
                  2020. BeZero offers an integrated hub of data, products, and
                  services for the entire climate economy: decarbonisation,
                  offsetting, and natural capital. The BeZero team combines
                  experienced professionals across earth sciences, economics,
                  engineering, & technology. Our focus is on helping
                  organisations adapt to & prosper in a low carbon future by
                  taking a systematic approach to systematic change.
                </p>
                <p>
                  Carbon Engineering (CE) is a leading provider of Direct Air
                  Capture technology that captures carbon dioxide directly from
                  the atmosphere. CE is focused on the global deployment of
                  megaton-scale Direct Air Capture technology so it can have the
                  greatest impact on the huge climate challenge. This proven
                  technology can help any company, country or individual achieve
                  critical net zero targets by delivering solutions for
                  permanent carbon removal and ultra-low carbon synthetic fuels.
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setFaq(null)}
            className={`absolute cursor-pointer inset-0 bg-white ${
              faq !== "faq-2" ? "hidden" : ""
            }`}
          >
            <div className="py-8 px-14">
              <div className="flex items-center justify-between space-x-8">
                <h1 className="text-3xl">
                  What is the BeZero Carbon Ratings framework?
                </h1>
                <span>
                  <svg
                    className="rotate-45"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                      fill="#333333"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-8 space-y-6 text-lg">
                <p>
                  The BeZero Carbon Rating is a top-down assessment of the CO2e
                  efficacy of voluntary offsets. BeZero has rated all major
                  accreditation methodologies using a range of evidence and data
                  sources. This allows BeZero to rate any project accredited by:
                  VCS, UN CDM, Gold Standard, ACR, CAR and others. BeZero Carbon
                  Ratings provide an additional layer of analysis to accredited
                  projects, enabling buyers to understand the product and
                  incentivising sellers to pursue high-quality projects and
                  approaches. Click here to download our white paper.
                </p>
                <p>
                  Visit www.aircarbon.co to see BeZero Carbon Ratings in action
                  as the first-ever market-based ratings system to be hosted on
                  a voluntary carbon exchange. For more information, including
                  rating your carbon credit project, contact the BeZero Carbon
                  Ratings team at ratings@bezerocarbon.com.
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setFaq(null)}
            className={`absolute cursor-pointer inset-0 bg-white ${
              faq !== "faq-3" ? "hidden" : ""
            }`}
          >
            <div className="py-8 px-14">
              <div className="flex items-center justify-between space-x-8">
                <h1 className="text-3xl">
                  What is Direct Air Capture technology?
                </h1>
                <span>
                  <svg
                    className="rotate-45"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                      fill="#333333"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-8 space-y-6 text-lg">
                <p>
                  Direct Air Capture (DAC) is a technology that captures carbon
                  dioxide (CO2) directly out of the air with an engineered,
                  mechanical system. Major assessments on how to avoid the worst
                  impacts of climate change conclude that limiting global
                  warming to 1.5C will require billions of tonnes of CO2 to be
                  removed from the atmosphere. Tehcnologies like DAC, deployed
                  globally at megaton scale, will play a critical role in
                  achieving these targets.
                </p>
                <p>
                  Carbon Engineering’s (CE) DAC technology works by pulling in
                  atmospheric air, then through a series of chemical reactions,
                  extracts CO2 from it while returning the rest of the air to
                  the environment. The technology has been built using existing
                  equipment and processes that have been widely used in
                  large-scale industries for years. This is how the technology
                  is able to achieve megaton-scale with low scale-up risk and
                  improved costs. The process uses chemical reactions and a
                  closed loop system to continuously absorb CO2 from the air -
                  using the same chemicals over and over again to minimize waste
                  and consumables. It delivers atmospheic CO2 as a purified,
                  compressed gas that can then be permanently and safely stored
                  underground or used in the production of ultra-low carbon
                  transportation fuels. For more information visit
                  www.carbonengineering.com.
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setFaq(null)}
            className={`absolute cursor-pointer inset-0 bg-white ${
              faq !== "faq-4" ? "hidden" : ""
            }`}
          >
            <div className="py-8 px-14">
              <div className="flex items-center justify-between space-x-8">
                <h1 className="text-3xl">
                  What happens when I buy DAC Removal Units?
                </h1>
                <span>
                  <svg
                    className="rotate-45"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                      fill="#333333"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-8 space-y-6 text-lg">
                <p>
                  Each DAC removal unit represents one tonne of CO2 captured
                  from the atmosphere, through Carbon Engineering’s DAC
                  technology, and permanently stored through secure geological
                  storage. When a buyer pre-purchases a DAC removal unit, they
                  help finance the development of DAC facilities worldwide, each
                  one capable of capturing and storing up to one million tonnes
                  of CO2 per year. Once the facilities are operational (first
                  facilities scheduled for 2025), the carbon is physically
                  removed from the atmosphere and the environmental benefit is
                  retired on behalf of the buyer.
                </p>
                <p>
                  Pre-purchased DAC removal units will be assigned to buyers on
                  a first-come, first-served basis by default. Where available,
                  buyers can also request to have their carbon removed from
                  projects in specific geographies , though this may impact
                  timelines.
                </p>
                <p>
                  Warning: by pre-purchasing DAC removal units, you are helping
                  to create global demand for permanent carbon removal, thereby
                  helping to accelterate the deployment of this new, clean
                  infrastructure. In the highly unlikely event that Carbon
                  Engineering is unable to aggregate enough market demand to
                  enable these infrastructure projects, BeZero will substitute
                  pre-purchased DAC removal units with alternative high quality
                  carbon removal credits of an equivalent dollar value.
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setFaq(null)}
            className={`absolute cursor-pointer inset-0 bg-white ${
              faq !== "faq-5" ? "hidden" : ""
            }`}
          >
            <div className="py-8 px-14">
              <div className="flex items-center justify-between space-x-8">
                <h1 className="text-3xl">
                  What happens when I buy BeZero’s premium removal basket?
                </h1>
                <span>
                  <svg
                    className="rotate-45"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                      fill="#333333"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-8 space-y-6 text-lg">
                <p>
                  Every AAA+ BeZero Rated basket blends one DAC removal unit
                  with an optimised portfolio of the highest quality removal
                  offsets from the world’s three major carbon sinks - trees,
                  oceans, soil. These have been selected using the BeZero Carbon
                  Rating, which assesses the carbon efficacy of credits from
                  each project. Each basket is constructed to maximise the
                  carbon removal achieved, including purchasing more credits
                  than the number of tonnes required.
                </p>
                <p>
                  We source our carbon credits (wherever possible) on the open
                  market as we believe the offset market needs more transparency
                  on price and liquidity. Once we purchase the credits, we hold
                  them as inventory, ready to be retired on behalf of anyone who
                  purchases our basket. Retiring a credit on a public registry
                  ensures it can only be used once. We retire credits on behalf
                  of our customers, issuing them with a BeZero offset
                  certificate and holding the underlying registry certificates
                  internally.
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setFaq(null)}
            className={`absolute cursor-pointer inset-0 bg-white ${
              faq !== "faq-6" ? "hidden" : ""
            }`}
          >
            <div className="py-8 px-14">
              <div className="flex items-center justify-between space-x-8">
                <h1 className="text-3xl">
                  Why buy BeZero’s premium carbon removal basket?
                </h1>
                <span>
                  <svg
                    className="rotate-45"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                      fill="#333333"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-8 space-y-6 text-lg">
                <p>
                  BeZero is committed to a strict policy of reduction-first,
                  offset-second. In other words, individuals and businesses
                  should purchase offsets, if necessary, as part of a wider Net
                  Zero strategy. Buying offsets can be an effective way to
                  support climate action, but offsetting is not in and of itself
                  a sustainable climate strategy.
                </p>
                <p>
                  Not least because buying carbon credits can be beset with
                  risks. Are these projects real? Will they fail? Are they
                  actually avoiding or sequestering carbon? Are they good value?
                  Am I buying the right types of projects? Will I be accused of
                  greenwashing?
                </p>
                <p>
                  BeZero’s premium removals basket is our solution (see below).
                  It is the first ever instrument specifically designed for the
                  voluntary offset market offering the same level of confidence,
                  and the same price point, as Emissions Allowances sold in the
                  regulated carbon market (e.g. EU Emissions Trading Scheme). If
                  you have to offset, make sure it delivers true carbon
                  neutrality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-black">
          <div className="py-4 mx-4 border-l-2 bg-[#222222] border-r-2 border-black">
            <p className="w-full px-4 overflow-x-hidden text-base text-white whitespace-nowrap">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam blanditiis hic odit. Sequi saepe optio doloribus commodi
              placeat iure quaerat beatae quod obcaecati nostrum eum, blanditiis
              aperiam, repellendus laborum. Qui.
            </p>
          </div>
        </div>
      </div>
      {/* section 3 desktop */}
      <div className="hidden lg:block">
        <div className="border-b-2 border-black">
          <div className="flex mx-10 border-l-2 border-r-2 border-black">
            <div className="w-[27.5%] border-r-2 border-black">
              <div className="bg-[#09008C] relative h-full bg-opacity-75">
                <img
                  src="/assets/faq-desktop.png"
                  alt=""
                  className="absolute object-cover w-full h-full mix-blend-multiply"
                />
              </div>
            </div>
            <div className="w-[72.5%]">
              <div className="bg-[#FFCF1A] px-14 border-b-2 border-black relative py-6">
                <h2 className="text-4xl font-bold">
                  Frequently Asked Questions
                </h2>
                <span
                  aria-hidden="true"
                  className="
                  absolute
                  w-10
                  border-t-2
                  top-full
                  border-black
                  right-[-40px]
                "
                ></span>
              </div>
              <div className="relative">
                <button
                  onClick={() => setFaq("faq-1")}
                  className="relative flex items-center justify-between w-full py-8 space-x-8 text-left border-b-2 border-black focus:outline-none px-14"
                >
                  <p className="text-3xl">
                    Who are BeZero Carbon & Carbon Engineering?
                  </p>
                  <span>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                        fill="#333333"
                      />
                    </svg>
                  </span>
                  <span
                    aria-hidden="true"
                    className="
                  absolute
                  w-10
                  border-t-2
                  top-full
                  border-black
                  right-[-40px]
                "
                  ></span>
                </button>
                <button
                  onClick={() => setFaq("faq-2")}
                  className="relative flex items-center justify-between w-full py-8 space-x-8 text-left border-b-2 border-black focus:outline-none px-14"
                >
                  <p className="text-3xl">
                    What is the BeZero Carbon Ratings framework?
                  </p>
                  <span>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                        fill="#333333"
                      />
                    </svg>
                  </span>
                  <span
                    aria-hidden="true"
                    className="
                  absolute
                  w-10
                  border-t-2
                  top-full
                  border-black
                  right-[-40px]
                "
                  ></span>
                </button>
                <button
                  onClick={() => setFaq("faq-3")}
                  className="relative flex items-center justify-between w-full py-8 space-x-8 text-left border-b-2 border-black focus:outline-none px-14"
                >
                  <p className="text-3xl">
                    What is Direct Air Capture technology?
                  </p>
                  <span>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                        fill="#333333"
                      />
                    </svg>
                  </span>
                  <span
                    aria-hidden="true"
                    className="
                  absolute
                  w-10
                  border-t-2
                  top-full
                  border-black
                  right-[-40px]
                "
                  ></span>
                </button>
                <button
                  onClick={() => setFaq("faq-4")}
                  className="relative flex items-center justify-between w-full py-8 space-x-8 text-left border-b-2 border-black focus:outline-none px-14"
                >
                  <p className="text-3xl">
                    What happens when I buy DAC Removal Units?
                  </p>
                  <span>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                        fill="#333333"
                      />
                    </svg>
                  </span>
                  <span
                    aria-hidden="true"
                    className="
                  absolute
                  w-10
                  border-t-2
                  top-full
                  border-black
                  right-[-40px]
                "
                  ></span>
                </button>
                <button
                  onClick={() => setFaq("faq-5")}
                  className="relative flex items-center justify-between w-full py-8 space-x-8 text-left border-b-2 border-black focus:outline-none px-14"
                >
                  <p className="text-3xl">
                    Why buy BeZero’s premium carbon removal basket?
                  </p>
                  <span>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                        fill="#333333"
                      />
                    </svg>
                  </span>
                  <span
                    aria-hidden="true"
                    className="
                  absolute
                  w-10
                  border-t-2
                  top-full
                  border-black
                  right-[-40px]
                "
                  ></span>
                </button>
                <button
                  onClick={() => setFaq("faq-6")}
                  className="flex items-center justify-between w-full py-8 space-x-8 text-left focus:outline-none px-14"
                >
                  <p className="text-3xl">
                    What happens when I buy BeZero’s premium removal basket?
                  </p>
                  <span>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                        fill="#333333"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  onClick={() => setFaq(null)}
                  className={`absolute cursor-pointer inset-0 bg-white ${
                    faq !== "faq-1" ? "hidden" : ""
                  }`}
                >
                  <div className="py-8 px-14">
                    <div className="flex items-center justify-between space-x-8">
                      <h1 className="text-3xl">
                        Who are BeZero Carbon & Carbon Engineering?
                      </h1>
                      <span>
                        <svg
                          className="rotate-45"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                            fill="#333333"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-8 space-y-6 text-lg">
                      <p>
                        BeZero Carbon is a London-based Climate Asset and
                        Liability Management (C·A·L·M) solutions business
                        launched in April, 2020. BeZero offers an integrated hub
                        of data, products, and services for the entire climate
                        economy: decarbonisation, offsetting, and natural
                        capital. The BeZero team combines experienced
                        professionals across earth sciences, economics,
                        engineering, & technology. Our focus is on helping
                        organisations adapt to & prosper in a low carbon future
                        by taking a systematic approach to systematic change.
                      </p>
                      <p>
                        Carbon Engineering (CE) is a leading provider of Direct
                        Air Capture technology that captures carbon dioxide
                        directly from the atmosphere. CE is focused on the
                        global deployment of megaton-scale Direct Air Capture
                        technology so it can have the greatest impact on the
                        huge climate challenge. This proven technology can help
                        any company, country or individual achieve critical net
                        zero targets by delivering solutions for permanent
                        carbon removal and ultra-low carbon synthetic fuels.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setFaq(null)}
                  className={`absolute cursor-pointer inset-0 bg-white ${
                    faq !== "faq-2" ? "hidden" : ""
                  }`}
                >
                  <div className="py-8 px-14">
                    <div className="flex items-center justify-between space-x-8">
                      <h1 className="text-3xl">
                        What is the BeZero Carbon Ratings framework?
                      </h1>
                      <span>
                        <svg
                          className="rotate-45"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                            fill="#333333"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-8 space-y-6 text-lg">
                      <p>
                        The BeZero Carbon Rating is a top-down assessment of the
                        CO2e efficacy of voluntary offsets. BeZero has rated all
                        major accreditation methodologies using a range of
                        evidence and data sources. This allows BeZero to rate
                        any project accredited by: VCS, UN CDM, Gold Standard,
                        ACR, CAR and others. BeZero Carbon Ratings provide an
                        additional layer of analysis to accredited projects,
                        enabling buyers to understand the product and
                        incentivising sellers to pursue high-quality projects
                        and approaches. Click here to download our white paper.
                      </p>
                      <p>
                        Visit www.aircarbon.co to see BeZero Carbon Ratings in
                        action as the first-ever market-based ratings system to
                        be hosted on a voluntary carbon exchange. For more
                        information, including rating your carbon credit
                        project, contact the BeZero Carbon Ratings team at
                        ratings@bezerocarbon.com.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setFaq(null)}
                  className={`absolute cursor-pointer inset-0 bg-white ${
                    faq !== "faq-3" ? "hidden" : ""
                  }`}
                >
                  <div className="py-8 px-14">
                    <div className="flex items-center justify-between space-x-8">
                      <h1 className="text-3xl">
                        What is Direct Air Capture technology?
                      </h1>
                      <span>
                        <svg
                          className="rotate-45"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                            fill="#333333"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-8 space-y-6 text-lg">
                      <p>
                        Direct Air Capture (DAC) is a technology that captures
                        carbon dioxide (CO2) directly out of the air with an
                        engineered, mechanical system. Major assessments on how
                        to avoid the worst impacts of climate change conclude
                        that limiting global warming to 1.5C will require
                        billions of tonnes of CO2 to be removed from the
                        atmosphere. Tehcnologies like DAC, deployed globally at
                        megaton scale, will play a critical role in achieving
                        these targets.
                      </p>
                      <p>
                        Carbon Engineering’s (CE) DAC technology works by
                        pulling in atmospheric air, then through a series of
                        chemical reactions, extracts CO2 from it while returning
                        the rest of the air to the environment. The technology
                        has been built using existing equipment and processes
                        that have been widely used in large-scale industries for
                        years. This is how the technology is able to achieve
                        megaton-scale with low scale-up risk and improved costs.
                        The process uses chemical reactions and a closed loop
                        system to continuously absorb CO2 from the air - using
                        the same chemicals over and over again to minimize waste
                        and consumables. It delivers atmospheic CO2 as a
                        purified, compressed gas that can then be permanently
                        and safely stored underground or used in the production
                        of ultra-low carbon transportation fuels. For more
                        information visit www.carbonengineering.com.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setFaq(null)}
                  className={`absolute cursor-pointer inset-0 bg-white ${
                    faq !== "faq-4" ? "hidden" : ""
                  }`}
                >
                  <div className="py-8 px-14">
                    <div className="flex items-center justify-between space-x-8">
                      <h1 className="text-3xl">
                        What happens when I buy DAC Removal Units?
                      </h1>
                      <span>
                        <svg
                          className="rotate-45"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                            fill="#333333"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-8 space-y-6 text-lg">
                      <p>
                        Each DAC removal unit represents one tonne of CO2
                        captured from the atmosphere, through Carbon
                        Engineering’s DAC technology, and permanently stored
                        through secure geological storage. When a buyer
                        pre-purchases a DAC removal unit, they help finance the
                        development of DAC facilities worldwide, each one
                        capable of capturing and storing up to one million
                        tonnes of CO2 per year. Once the facilities are
                        operational (first facilities scheduled for 2025), the
                        carbon is physically removed from the atmosphere and the
                        environmental benefit is retired on behalf of the buyer.
                      </p>
                      <p>
                        Pre-purchased DAC removal units will be assigned to
                        buyers on a first-come, first-served basis by default.
                        Where available, buyers can also request to have their
                        carbon removed from projects in specific geographies ,
                        though this may impact timelines.
                      </p>
                      <p>
                        Warning: by pre-purchasing DAC removal units, you are
                        helping to create global demand for permanent carbon
                        removal, thereby helping to accelterate the deployment
                        of this new, clean infrastructure. In the highly
                        unlikely event that Carbon Engineering is unable to
                        aggregate enough market demand to enable these
                        infrastructure projects, BeZero will substitute
                        pre-purchased DAC removal units with alternative high
                        quality carbon removal credits of an equivalent dollar
                        value.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setFaq(null)}
                  className={`absolute cursor-pointer inset-0 bg-white ${
                    faq !== "faq-5" ? "hidden" : ""
                  }`}
                >
                  <div className="py-8 px-14">
                    <div className="flex items-center justify-between space-x-8">
                      <h1 className="text-3xl">
                        What happens when I buy BeZero’s premium removal basket?
                      </h1>
                      <span>
                        <svg
                          className="rotate-45"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                            fill="#333333"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-8 space-y-6 text-lg">
                      <p>
                        Every AAA+ BeZero Rated basket blends one DAC removal
                        unit with an optimised portfolio of the highest quality
                        removal offsets from the world’s three major carbon
                        sinks - trees, oceans, soil. These have been selected
                        using the BeZero Carbon Rating, which assesses the
                        carbon efficacy of credits from each project. Each
                        basket is constructed to maximise the carbon removal
                        achieved, including purchasing more credits than the
                        number of tonnes required.
                      </p>
                      <p>
                        We source our carbon credits (wherever possible) on the
                        open market as we believe the offset market needs more
                        transparency on price and liquidity. Once we purchase
                        the credits, we hold them as inventory, ready to be
                        retired on behalf of anyone who purchases our basket.
                        Retiring a credit on a public registry ensures it can
                        only be used once. We retire credits on behalf of our
                        customers, issuing them with a BeZero offset certificate
                        and holding the underlying registry certificates
                        internally.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setFaq(null)}
                  className={`absolute cursor-pointer inset-0 bg-white ${
                    faq !== "faq-6" ? "hidden" : ""
                  }`}
                >
                  <div className="py-8 px-14">
                    <div className="flex items-center justify-between space-x-8">
                      <h1 className="text-3xl">
                        Why buy BeZero’s premium carbon removal basket?
                      </h1>
                      <span>
                        <svg
                          className="rotate-45"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.93 16.9H10.77V10.48H17.13V6.7H10.77V0.189999H6.93V6.7H0.57V10.48H6.93V16.9Z"
                            fill="#333333"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-8 space-y-6 text-lg">
                      <p>
                        BeZero is committed to a strict policy of
                        reduction-first, offset-second. In other words,
                        individuals and businesses should purchase offsets, if
                        necessary, as part of a wider Net Zero strategy. Buying
                        offsets can be an effective way to support climate
                        action, but offsetting is not in and of itself a
                        sustainable climate strategy.
                      </p>
                      <p>
                        Not least because buying carbon credits can be beset
                        with risks. Are these projects real? Will they fail? Are
                        they actually avoiding or sequestering carbon? Are they
                        good value? Am I buying the right types of projects?
                        Will I be accused of greenwashing?
                      </p>
                      <p>
                        BeZero’s premium removals basket is our solution (see
                        below). It is the first ever instrument specifically
                        designed for the voluntary offset market offering the
                        same level of confidence, and the same price point, as
                        Emissions Allowances sold in the regulated carbon market
                        (e.g. EU Emissions Trading Scheme). If you have to
                        offset, make sure it delivers true carbon neutrality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-black">
          <div className="py-6 mx-10 border-l-2 bg-[#222222] border-r-2 border-black">
            <p className="w-full px-6 overflow-x-hidden text-lg text-white whitespace-nowrap">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam blanditiis hic odit. Sequi saepe optio doloribus commodi
              placeat iure quaerat beatae quod obcaecati nostrum eum, blanditiis
              aperiam, repellendus laborum. Qui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
