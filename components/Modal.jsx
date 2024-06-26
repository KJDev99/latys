"use client";
import { useEffect, useState } from "react";
import verifi from "@/assets/images/verif.png";
import verifi2 from "@/assets/images/verif2.png";
import Clipboard from "@/assets/images/Clipboard.svg";
import Person from "@/assets/images/Person.svg";
import modalbigbg from "@/assets/images/modalbigbg.svg";
import Image from "next/image";
import SelectCountry from "./SelectCountry";

const Modal = ({ isOpen, onClose, stepModal }) => {
  const [step, setStep] = useState(stepModal);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    // setStep(stepModal);
    setStep(2);

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  if (step === 1) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
        <div className="absolute inset-0" onClick={onClose}></div>
        <div className="relative z-10 w-full max-w-lg p-6 dark:bg-[#272A4E] bg-white rounded-lg flex flex-col items-center">
          <div className="hidden dark:block">
            <Image src={verifi} alt="Image" />
          </div>
          <div className="dark:hidden">
            <Image src={verifi2} alt="Image" />
          </div>
          <h2 className="text-2xl dark:text-[#F2F2F2] mt-6 mb-2">
            Identity Verification
          </h2>
          <p className="dark:text-[#B3B3B3]">
            Please complete basic info to continue.
          </p>
          <div className="flex w-full gap-3 mt-6">
            <button
              onClick={() => {
                setStep((prev) => prev + 1);
              }}
              className="mt-4 px-4 w-full py-3 text text-[#F2F2F2] bg-[#7F66FF] rounded-md"
            >
              Verify now
            </button>
            <button
              onClick={onClose}
              className="mt-4 px-4 w-full py-3 text dark:text-[#F2F2F2] bg-transparent border dark:border-[#7F66FF] border-[#CCCCCC] rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
        <div className="absolute inset-0" onClick={onClose}></div>
        <div className="relative z-10 w-full max-w-4xl dark:bg-[#272A4E] rounded-lg flex h-max">
          <div className="w-1/2 dark:bg-[#2C3058] flex items-center justify-center h-full">
            <Image src={modalbigbg} alt="Image" />
          </div>
          <div className="w-1/2 px-10">
            <h2 className="text-2xl dark:text-[#F2F2F2] mt-10 mb-2">
              Select your country / region
            </h2>
            <p className="dark:text-[#B3B3B3]">
              Please select your primary country of residence:
            </p>
            <SelectCountry />
            <div className="flex flex-col mt-12">
              <div className="flex mb-2">
                <Image src={Clipboard} alt="Image" />
                <h3 className="text-xl dark:text-[#F2F2F2] ml-2">
                  Basic information
                </h3>
              </div>
              <ul>
                <li className="text-[#B3B3B3] list-disc ml-5 mb-2">
                  First and last name
                </li>
                <li className="text-[#B3B3B3] list-disc ml-5 mb-2">
                  Date of Birth
                </li>
                <li className="text-[#B3B3B3] list-disc ml-5 mb-2">
                  Residential Address
                </li>
              </ul>
              <div className="flex mb-2 mt-6">
                <Image src={Person} alt="Image" />
                <h3 className="text-xl dark:text-[#F2F2F2] ml-2">
                  Identity & facial verification
                </h3>
              </div>
              <ul>
                <li className="text-[#B3B3B3] list-disc ml-5 mb-2">
                  Upload photo of your ID
                </li>
                <li className="text-[#B3B3B3] list-disc ml-5 mb-2">
                  Take a picture of yourself to verify your identity
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setStep((prev) => prev + 1);
              }}
              className="mt-20 mb-10 px-4 w-full py-3 text text-[#F2F2F2] bg-[#7F66FF] rounded-md"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative z-10 w-full max-w-lg p-6 bg-white rounded-md shadow-md">
        <button
          onClick={() => {
            setStep((prev) => prev + 1);
          }}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
