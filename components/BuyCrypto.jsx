import { useState } from "react";
import CryptoSelect from "./CryptoSelect";
import PayCard from "./PayCard";
import Button from "./Button";
import CryptoSelectFull from "./CryptoSelectFull";

const BuyCrypto = () => {
  const [activeComponent, setActiveComponent] = useState("one");
  return (
    <div className="dark:bg-[#1E2142] bg-white rounded-lg py-6 px-8 mb-12">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 bg-[#F2F2F2] dark:bg-[#272A4E] mt-2 mx-2 w-full rounded flex">
          <button
            className={`h-10 w-1/2 m-2 rounded ${
              activeComponent === "one"
                ? "dark:bg-[#2C3058] bg-[#7F66FF] text-white dark:text-[#7F66FF]"
                : "bg-transparent dark:text-[#999999] text-[#808080]"
            }`}
            onClick={() => setActiveComponent("one")}
          >
            Buy Crypto
          </button>
          <button
            className={`h-10 w-1/2 m-2 rounded ${
              activeComponent === "two"
                ? "dark:bg-[#2C3058] bg-[#7F66FF] text-white dark:text-[#7F66FF]"
                : "bg-transparent dark:text-[#999999] text-[#808080]"
            }`}
            onClick={() => setActiveComponent("two")}
          >
            Sell Crypto
          </button>
        </div>
        <div className="w-full max-w-md">
          {activeComponent === "one" && (
            <div className="">
              <CryptoSelect num={0} title={"You Pay"} />
              <CryptoSelect num={1} title={"You Get"} />
              <PayCard />
              <div className="mt-[100px]">
                <Button text={"Buy Crypto"} />
              </div>
            </div>
          )}
          {activeComponent === "two" && (
            <div className="">
              <CryptoSelect num={0} title={"You Pay"} />
              <CryptoSelect num={2} title={"You Get"} />
              <CryptoSelectFull num={0} title={"Sell From"} />
              <CryptoSelectFull num={1} title={"Deposit To"} />
              <div className="flex justify-between mt-2 text-[#999999] text-xs dark:text-[#F2F2F2]">
                <p>Weekly limit</p>
                <p>Weekly limit</p>
              </div>
              <div className="mt-[100px]">
                <Button text={"Sell Crypto"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyCrypto;
