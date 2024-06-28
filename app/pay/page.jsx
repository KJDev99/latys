"use client";
import History from "@/components/History";
import Image from "next/image";
import valyutatransfer from "@/assets/images/valyutatransfer.svg";
import Pattern from "@/assets/images/Pattern.png";
import ConverterSelect from "@/components/ConverterSelect";
import Button from "@/components/Button";
import { useState } from "react";
import SendPay from "@/components/SendPay";

const Pay = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleSendClick = () => {
    setActiveComponent("first");
  };

  const handleRequestClick = () => {
    setActiveComponent("second");
  };

  const handleClose = () => {
    setActiveComponent(null);
  };
  return (
    <div className="dark:bg-[#191B33] bg-[#FFFFFF] h-screen-minus-80 w-full ">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-2/3  pl-2 sm:pl-6 lg:pl-8 pt-6">
            {!activeComponent && (
              <div className="w-full h-full bg-white px-6 pb-3 dark:bg-[#242747] rounded-lg border border-[#E3E3E8] dark:border-[#E3E3E833] shadow-md relative flex flex-col items-center justify-center">
                <Image
                  src={Pattern}
                  alt={"Pattern"}
                  className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] "
                />
                <h2 className="dark:text-[#FFFFFF] mb-10 text-[30px] font-medium">
                  Minimal Backdrop
                </h2>
                <div className="flex gap-x-5">
                  <button
                    onClick={handleSendClick}
                    className="z-10 h-[50px] w-[220px] flex justify-center items-center border rounded dark:border-[#A191F31A] dark:bg-[#1E2142] bg-white dark:text-[#7F66FF]"
                  >
                    Send
                  </button>
                  <button
                    onClick={handleRequestClick}
                    className="z-10 h-[50px] w-[220px] flex justify-center items-center border rounded dark:border-[#A191F31A] dark:bg-[#1E2142] bg-white dark:text-[#7F66FF]"
                  >
                    Request
                  </button>
                </div>
              </div>
            )}
            {activeComponent === "first" && (
              <SendPay onClose={handleClose} text={"Send"} />
            )}
            {activeComponent === "second" && (
              <SendPay onClose={handleClose} text={"Request"} />
            )}
          </div>
          <div className="w-1/3 lg:ml-8 pt-6 flex flex-col">
            <div className="border-y-2 rounded-l-xl border-l-2 border-[#E3E3E8] dark:border-[#E3E3E833] bg-white dark:bg-[#191B32] px-8 pb-7">
              <h2 className=" dark:text-[#FFFFFF] text-lg text-[#131316] ml-8 mt-4 mb-6">
                Currency Converter
              </h2>
              <div className="relative flex justify-center mb-10">
                <h2 className="dark:text-[#C8C8D0] text-[50px]">$0</h2>
                <div className="absolute top-0 right-8 ">
                  <div className="h-12 w-12 rounded-full bg-[#F4F4F6] flex items-center justify-center">
                    <Image src={valyutatransfer} alt="valyutatransfer" />
                  </div>
                  <p className="text-sm text-[#9C9CAB] mt-1 text-center">USD</p>
                </div>
              </div>
              <ConverterSelect />
              <div className="flex dark:bg-[#2C3058] bg-[white] border border-[#C8C8D0] dark:border-[#C8C8D033] w-full rounded-lg mb-4">
                <h2 className="m-4 w-1/3 border-r border-[#E3E3E833] text-[#F6F6F6]">
                  From
                </h2>
                <p className="flex justify-between items-center rounded-md dark:text-[#F2F2F2] px-4 py-1 w-2/3">
                  120.00$
                </p>
              </div>
              <Button text={"Convert"} />
            </div>
          </div>
        </div>
        <div className="dark:bg-[#1F2243] bg-white border-2 dark:border-[#F3F3F333] border-[#F3F3F3] rounded-xl mt-8 mx-10">
          <div className="p-6 flex justify-between items-center">
            <p className="dark:text-[#93989A] text-sm w-1/3">Item List</p>
            <p className="dark:text-[#93989A] text-sm w-1/6">Status</p>
            <p className="dark:text-[#93989A] text-sm w-1/6">Amount</p>
            <p className="dark:text-[#93989A] text-sm w-1/6">Charge</p>
            <p className="dark:text-[#93989A] text-sm w-1/6">Date</p>
          </div>
          <div className="px-6 flex flex-col justify-between items-center border-t-2 dark:border-[#F3F3F333] border-[#F3F3F3]">
            <div className="w-full  border-b-2  border-[#E3E3E8] dark:border-[#E3E3E833]">
              <History
                imgbig={"./person3.png"}
                name={"Ahmed"}
                prosent={"From Vishal"}
                endCenter={"5.62 ETH"}
                endTitle={"2.62 ETH"}
                date={"20.02.24"}
              />
            </div>
            <div className="w-full  border-[#E3E3E8] dark:border-[#E3E3E833]">
              <History
                imgbig={"./person2.png"}
                name={"Usman M."}
                prosent={"From Marvin McKinney"}
                endCenter={"5.62 ETH"}
                endTitle={"2.62 ETH"}
                date={"20.02.24"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
