"use client";

import InfoText from "@/components/InfoText";
import InfoTitle from "@/components/InfoTitle";
import Link from "next/link";
import Button from "@/components/Button";
import emailNotice from "@/assets/images/Email-notice.svg";
import { useRef } from "react";

const PageVerification = () => {
  const inputRefs = useRef([]);

  const handleInput = (index, e) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  return (
    <div className="dark:bg-[#181B33] bg-[#F2F2F2] h-screen-minus-80 flex justify-center items-center relative">
      <div className="flex flex-col dark:bg-[#1E2142] bg-white py-16 px-14 rounded-lg">
        <InfoTitle title={"Account verification"} />
        <div className="mt-2 flex  w-[400px] items-center mb-10">
          <img src={emailNotice.src} className="h-10 w-auto mr-4" />
          <InfoText
            text={
              "Please enter the 6-digit verification code that was sent to john.doe@example.com. The code is valid for 30 minutes."
            }
            textAlign={"left"}
          />
        </div>
        <div className="enter_code mb-8">
          <p className="font-medium text-[#080033] dark:text-white mb-4">
            Enter your code
          </p>
          <div className="flex justify-between">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                className="h-12 w-12 rounded-md bg-[#F2F2F2] dark:bg-[#272A4E] text-center dark:text-white"
                type="text"
                maxLength="1"
                onInput={(e) => handleInput(index, e)}
              />
            ))}
          </div>
        </div>
        <Link href="/dashboard">
          <Button text={"Verify"}></Button>
        </Link>
        <p className="mt-5 text-sm text-center text-[#999999] dark:text-[#F2F2F2]">
          Not get a code?{" "}
          <span className="text-[#080033] dark:text-[#080033]">
            <Link href="/login" className="text-[#7F66FF]">
              Resend Code
            </Link>
          </span>
        </p>
      </div>
      <p className="dark:text-[#F2F2F2] text-[#808080] text-sm absolute left-[50%] bottom-5 translate-x-[-50%]">
        © 2024-2030 latys. All Right Reserved.
      </p>
    </div>
  );
};

export default PageVerification;
