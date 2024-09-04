import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo_dark.svg";

function Hero() {
  const title = " Become a React Dev";
  const subtitle = "Find the React job that fits your skill set";
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <img src={logo} alt="" className="inline-block w-20" />
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
