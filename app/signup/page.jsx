"use client";

import InfoText from "@/components/InfoText";
import InfoTitle from "@/components/InfoTitle";
import { HiOutlineMail } from "react-icons/hi";
import { GrKey } from "react-icons/gr";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@/components/Button";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="dark:bg-[#181B33] bg-[#F2F2F2] h-screen-minus-80 flex justify-center items-center relative">
      <div className="flex flex-col dark:bg-[#1E2142] bg-white py-16 px-14 rounded-lg">
        <InfoTitle title={"Create free account"} />
        <div className="mt-2">
          <InfoText text={"Welcome to Crypto"} />
        </div>
        <label htmlFor="Email" className="relative w-[400px]">
          <p className="dark:text-white">Email</p>
          <HiOutlineMail className="absolute text-xl left-3 bottom-3 text-[#999999]" />
          <input
            id="Email"
            type="email"
            className="w-full pr-4 pl-9 py-3 text-sm dark:text-white border border-gray-300 rounded-md outline-none dark:bg-[#272A4E] border-none bg-[#F2F2F2]"
            placeholder="john.doe@example.com"
          />
        </label>
        <label htmlFor="Password" className="relative mt-5">
          <p className="dark:text-white">Password</p>
          <GrKey className="absolute text-xl left-3 bottom-3 text-[#999999]" />
          <input
            id="Password"
            type={passwordVisible ? "text" : "password"}
            className="w-full pr-9 pl-9 py-3 text-sm dark:text-white border border-gray-300 rounded-md outline-none dark:bg-[#272A4E] border-none bg-[#F2F2F2]"
            placeholder="********"
          />
          {passwordVisible ? (
            <IoIosEyeOff
              className="absolute text-xl right-3 bottom-3 text-[#999999]"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <IoMdEye
              className="absolute text-xl right-3 bottom-3 text-[#999999]"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            />
          )}
        </label>
        <label htmlFor="check" className="mt-4 mb-8 flex">
          <input type="checkbox" id="check" />
          <p className="dark:text-[#F2F2F2] text-sm ">
            I have read and agreed to Crypto’s{" "}
            <span className="text-[#7F66FF]">Terms of Services.</span>
          </p>
        </label>
        <Link href="/signupverification">
          <Button text={"Create account"}></Button>
        </Link>
        <div className="">
          <p className="mt-5 text-sm text-center text-[#999999] dark:text-[#F2F2F2]">
            Already registered?{" "}
            <span className="text-[#080033] dark:text-[#080033]">
              <Link href="/login" className="text-[#7F66FF]">
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
      <p className="dark:text-[#F2F2F2] text-[#808080] text-sm absolute left-[50%] bottom-5 translate-x-[-50%]">
        © 2024-2030 latys. All Right Reserved.
      </p>
    </div>
  );
}
