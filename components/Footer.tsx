"use client";
import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center  text-center p-4 mt-20">
      <h1 className="text-5xl gradient_h font-medium leading-normal lg:w-3/4">
        {" "}
        Automate all aspects of your delivery process with AI support.
      </h1>
      <p className="text-xl tracking-wider leading-normal p-4 track_07">
        Get Early Access
      </p>
      <div
        className="flex flex-row w-fit mx-auto mt-5 p-4"
        style={{
          borderImage:
            "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%)",
          borderImageSlice: 1,
          borderRadius: "50%",
          borderWidth: "2px",
        }}
      >
        <Input
          className="w-fit border border-transparent bg-black"
          placeholder="Your Email"
        />
        <Button className="border border-white font-light rounded-full p-3">
          JOIN WAITLIST
        </Button>
      </div>
      <p className="text-2xl track_07 leading-normal p-4 pt-20">
        Copyright © 2023{" "}
        <span className="font-bold tracking-tightest">
          EXOCODE TECHNOLOGIES
        </span>{" "}
        | All rights reserved
      </p>
    </div>
  );
}

export default Footer;
