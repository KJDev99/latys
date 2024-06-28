"use client";
import { useState } from "react";
import Recently from "@/components/Recently";
import SelectCountry from "@/components/SelectCountry";
import CashCard from "@/components/CashCard";
import Button from "@/components/Button";
import History from "@/components/History";
import Image from "next/image";
import message from "@/assets/images/message.svg";
const CashPage = () => {
  const [activeComponent, setActiveComponent] = useState("USD");
  return (
    <div className="dark:bg-[#1E2142] bg-[#FFFFFF] h-screen-minus-80 w-full ">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/5 pt-6 h-screen-minus-80 border-r-2 border-[#E3E3E8] dark:border-[#F4F4F633] px-10">
            <div className="w-full  border-b-2 my-6 border-[#E3E3E8] dark:border-[#E3E3E833] cursor-pointer">
              <Recently
                imgbig={"./Coin.svg"}
                name={"USD"}
                prosent={"USD"}
                activeComponent={activeComponent}
                setActiveComponent={() => setActiveComponent("USD")}
              />
            </div>
            <div className="w-full  border-b-2 my-6 border-[#E3E3E8] dark:border-[#E3E3E833] cursor-pointer">
              <Recently
                imgbig={"./Crypto.svg"}
                name={"Ethereum"}
                prosent={"ETH"}
                activeComponent={activeComponent}
                setActiveComponent={() => setActiveComponent("Ethereum")}
              />
            </div>
            <div className="fixed  bottom-10 flex items-center cursor-pointer">
              <div className="rounded-full h-12 w-12 bg-[#F9F9FA] flex items-center justify-center text-[#5235E8] text-3xl">
                +
              </div>
              <p className="text-black px-4 dark:text-white">Create Wallet</p>
            </div>
          </div>
          <div className="w-4/5 pt-6  bg-[#FDFDFD] dark:bg-[#191B32] flex flex-col h-screen-minus-80">
            <div className="w-full px-7 pb-6 flex justify-between items-center">
              <div className="flex flex-col">
                <div className="flex">
                  <img src="./antena.svg" alt="antena" />
                  <p className="text-sm ml-2 text-[#93989A]">Your Balance</p>
                </div>
                <p className="dark:text-white text-4xl mt-2">$2,260</p>
              </div>
              <div className="flex items-center">
                <SelectCountry />
                <button className="w-max px-3 ml-5 h-[54px] text text-[#F2F2F2] bg-[#7F66FF] rounded-md flex items-center justify-center">
                  External wallet
                  <p className="h-7 w-7 rounded-full dark:bg-[#F4F4F6] ml-1.5 dark:text-[#5235E8] flex items-center justify-center">
                    +
                  </p>
                </button>
              </div>
            </div>
            <div className="w-full px-7 flex justify-between items-center mt-8 mb-10">
              <CashCard
                img={"./balans1.svg"}
                title={"Available to trade"}
                text={"$111,215.32"}
              />
              <CashCard
                img={"./balans2.svg"}
                title={"Locked in Orders"}
                text={"$20,111.22"}
              />
              <CashCard
                img={"./cardbalans.svg"}
                title={"Pending deposits"}
                text={"$20,483.16"}
              />
              <CashCard
                img={"./cardbalans.svg"}
                title={"Pending withdrawl"}
                text={"$90,483.16"}
              />
            </div>
            <div className="w-full flex justify-center mb-10">
              <button className="w-max px-3 mx-2  h-[40px] text text-[#F2F2F2] bg-[#7F66FF] rounded-md flex items-center justify-center">
                Deposit
              </button>
              <button className="w-max px-3 mx-2  h-[40px] text text-[#F2F2F2] bg-[#7F66FF] rounded-md flex items-center justify-center">
                Withdraw
              </button>
              <button className="w-max px-3 mx-2  h-[40px] text text-[#F2F2F2] bg-[#7F66FF] rounded-md flex items-center justify-center">
                Convert
              </button>
            </div>
            <div className="w-full px-7 flex flex-col ">
              <h2 className="font-semibold text-lg dark:text-white mb-5">
                Transactions History
              </h2>
              <div className="dark:bg-[#1F2243] bg-white border-2 dark:border-[#F3F3F333] border-[#F3F3F3] rounded-xl mb-10">
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
            <div className="fixed right-8 bottom-10 h-[93px] w-[93px] flex items-center justify-center bg-[#7F66FF] rounded-full cursor-pointer">
              <Image src={message} alt="Image" className="w-[50px] h-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashPage;
