import React from "react";
import animationData from "../lotties/mobile";
import Lottie from "react-lottie";
import { TypeAnimation } from "react-type-animation";

const Mobile = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
        <div className="relative z-10 gap-5 items-center flex md:flex-row flex-col">
          <div className="flex-1 mt-5 mx-auto sm:max-w-[50%] lg:mt-0 lg:w-auto">
            {/* <img
              src="https://i.postimg.cc/kgd4WhyS/container.png"
              alt=""
              className="w-full"
            /> */}
            <Lottie options={defaultOptions} className="w-full h-full" />
          </div>
          <div className="flex-1 max-w-lg w-[50%] py-5 sm:mx-auto text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
              build your applications with{" "}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "high performance",
                  3000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Efficiency",
                  3000,
                  "Scalability",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                // style={{ fontSize: "2em", display: "inline-block",color:"red" }}
                className="text-indigo-600 font-bold"
                repeat={Infinity}
              />
              
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3">
              We develop mobile applications that support both IOS and Android.
            </p>
            <a
              className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
              href="javascript:void()"
            >
              Get Quote.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1 duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
