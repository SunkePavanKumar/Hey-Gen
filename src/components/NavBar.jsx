import { Link } from "react-router-dom";
// import { IoMenu } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [clickUseCase, setClickUseCase] = useState(false);
  const [clickArrow, setClickArrow] = useState(false);
  const [features, setFeatures] = useState(false);
  const [resources, setResources] = useState(false);
  const [pricing, setPricing] = useState(false);
  function onClick() {
    setClicked(!clicked);
  }

  function onClickArrow() {
    setClickArrow(!clickArrow);
  }

  function enterClickUseCase() {
    setClickUseCase(true);
  }

  function leaveClickUseCase() {
    setClickUseCase(false);
  }

  function enterFeatures() {
    setFeatures(true);
  }

  function leaveFeatures() {
    setFeatures(false);
  }

  function enterResources() {
    setResources(true);
  }

  function leaveResources() {
    setResources(false);
  }

  function enterPricing() {
    setPricing(true);
  }

  function leavePricing() {
    setPricing(false);
  }
  return (
    <nav
      className={`h-auto p-8 w-full md:min-w-[963px]${
        clicked ? "bg-white md:bg-inherit relative" : ""
      }  z-50`}
    >
      <div className=" flex items-center justify-between w-full">
        <div className="">
          <img
            src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg"
            alt="logo"
            className=" md:cursor-pointer h-9 max-w-[100%] min-w-full"
          />
        </div>
        <div
          className={` flex  md:items-center gap-24  md:flex-row flex-col absolute md:static top-[101px] left-0 ${
            clicked
              ? " bg-white md:bg-inherit w-full px-8 py-3"
              : "hidden md:flex"
          }`}
          style={"z-index:1000"}
        >
          <ul className="flex md:items-center justify-center gap-8 md:flex-row flex-col">
            <li>
              <div
                className={`flex items-center justify-between gap-1 cursor-pointer ${
                  clickUseCase ? "bg-gray-100 rounded-full p-2" : ""
                }`}
                onMouseEnter={enterClickUseCase}
                onMouseLeave={leaveClickUseCase}
              >
                <Link
                  to="/"
                  className={`text-[16px] text-[#232833] font-medium ${
                    clickUseCase ? "text-[#7154f7]" : ""
                  }`}
                >
                  Use Cases
                </Link>

                {!clickUseCase ? (
                  <IoIosArrowDown
                    className=" w-4 h-4 text-[#7154f7]"
                    onMouseEnter={enterClickUseCase}
                    onMouseLeave={leaveClickUseCase}
                  />
                ) : (
                  <IoIosArrowUp
                    className=" w-4 h-4 text-[#7154f7]"
                    onMouseEnter={enterClickUseCase}
                    onMouseLeave={leaveClickUseCase}
                  />
                )}
              </div>

              <div
                className={`flex flex-col bg-white rounded-lg gap-6 md:absolute p-5 top-[85px] ${
                  !clickUseCase ? "hidden" : ""
                }`}
                onMouseEnter={enterClickUseCase}
                onMouseLeave={leaveClickUseCase}
              >
                <Link to={"/"}> Sales or reach</Link>
                <Link to={"/"}> Product Marketing</Link>
                <Link to={"/"}> content Marketing</Link>
                <Link to={"/"}> Learning and Development</Link>
              </div>
            </li>
            <li>
              <div
                className={`flex items-center justify-between gap-1 cursor-pointer ${
                  features ? "bg-gray-100 rounded-full p-2" : ""
                }`}
                onMouseEnter={enterFeatures}
                onMouseLeave={leaveFeatures}
              >
                <Link
                  to="/"
                  className={`text-[16px] text-[#232833] font-medium ${
                    features ? "text-[#7154f7]" : ""
                  }`}
                >
                  Features
                </Link>

                {!features ? (
                  <IoIosArrowDown
                    className=" w-4 h-4 text-[#7154f7]"
                    onMouseEnter={enterFeatures}
                    onMouseLeave={leaveFeatures}
                  />
                ) : (
                  <IoIosArrowUp
                    className=" w-4 h-4 text-[#7154f7]"
                    onMouseEnter={enterFeatures}
                    onMouseLeave={leaveFeatures}
                  />
                )}
              </div>

              <div
                className={`flex flex-col bg-white rounded-lg gap-6 md:absolute p-5 top-[85px] ${
                  !features ? "hidden" : ""
                }`}
                onMouseEnter={enterFeatures}
                onMouseLeave={leaveFeatures}
              >
                <Link to={"/"}> Instant Avatar</Link>
                <Link to={"/"}> Studio Avatar</Link>
                <Link to={"/"}> Voice Chart</Link>
                <Link to={"/"}> Photo Avatar</Link>
                <Link to={"/"}> AI Voices</Link>
                <Link to={"/"}> Personalized Video</Link>
                <Link to={"/"}> Streaming Avatar</Link>
                <Link to={"/"}> SI Avatars</Link>
                <Link to={"/"}> Templates</Link>
                <Link to={"/"}> Zapier</Link>
              </div>
            </li>
            <li>
              <div
                className={`flex items-center justify-between gap-1 cursor-pointer ${
                  resources ? "bg-gray-100 rounded-full p-2" : ""
                }`}
                onMouseEnter={enterResources}
                onMouseLeave={leaveResources}
              >
                <Link
                  to="/"
                  className={`text-[16px] text-[#232833] font-medium ${
                    resources ? "text-[#7154f7]" : ""
                  }`}
                >
                  Resources
                </Link>

                {!resources ? (
                  <IoIosArrowDown
                    className=" w-4 h-4 text-[#7154f7]"
                    onClick={onClickArrow}
                  />
                ) : (
                  <IoIosArrowUp
                    className=" w-4 h-4 text-[#7154f7]"
                    onMouseEnter={enterResources}
                    onMouseLeave={leaveResources}
                  />
                )}
              </div>

              <div
                className={`flex flex-col bg-white rounded-lg gap-6 md:absolute p-5 top-[85px] ${
                  !resources ? "hidden" : ""
                }`}
                onMouseEnter={enterResources}
                onMouseLeave={leaveResources}
              >
                <Link to={"/"}> Blog</Link>
                <Link to={"/"}> Weekly Webinar</Link>
                <Link to={"/"}> Case Studies</Link>
                <Link to={"/"}> Help Center</Link>
              </div>
            </li>
            <li>
              <div
                className={`flex items-center justify-between gap-1 cursor-pointer ${
                  pricing ? "bg-gray-100 rounded-full p-2" : ""
                }`}
                onMouseEnter={enterPricing}
                onMouseLeave={leavePricing}
              >
                <Link
                  to="/"
                  className={`text-[16px] text-[#232833] font-medium ${
                    pricing ? "text-[#7154f7]" : ""
                  }`}
                  onMouseEnter={enterPricing}
                  onMouseLeave={leavePricing}
                >
                  Pricing
                </Link>
              </div>
            </li>
          </ul>

          <div className="md:flex items-center justify-center gap-4 md:flex-initial hidden">
            <button className=" text-[16px] text-[#232833] font-medium hover:text-[#7154f7] md:inline-block hidden">
              Contact Sales
            </button>
            <button className=" bg-[#6142f7] min-w-[114px] h-[52px] rounded-xl font-semibold text-white">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center md:gap-4 md:hidden gap-3">
          <button className=" text-[16px] text-[#232833] font-medium hover:text-[#7154f7] md:inline-block hidden">
            Contact Sales
          </button>
          <button className=" bg-[#6142f7] min-w-[114px] h-[52px] rounded-xl font-semibold text-white">
            Get Started
          </button>

          {clicked ? (
            <button onClick={onClick}>
              <RxCross2 className="w-12 h-12 bg-[rgb(219 218 245)] rounded-lg" />
            </button>
          ) : (
            <button className=" " onClick={onClick}>
              <IoIosMenu className="w-12 h-12 bg-[rgb(219 218 245)] rounded-lg" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
