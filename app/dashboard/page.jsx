"use client";
import Button from "@/components/Button";
import CryptoSelect from "@/components/CryptoSelect";
import CryptoSelectFull from "@/components/CryptoSelectFull";
import LineChart from "@/components/LineChart";
import Recently from "@/components/Recently";
import Portfolio from "@/components/Portfolio";
import SelectTime from "@/components/SelectTime";
import React, { useState } from "react";

const Dashboard = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(0); // Default selection index
  const [selectedTime, setSelectedTime] = useState(0); // Default selection index
  const [chartData, setChartData] = useState([65, 59, 80, 81, 56, 55, 80]); // Default chart data

  const updateChartData = (newData) => {
    setChartData(newData);
  };

  const handleCryptoChange = (index) => {
    setSelectedCrypto(index);
    if (index == 0) updateChartData([65, 34, 64, 87, 34, 76, 25]);
    else if (index == 1) updateChartData([34, 87, 64, 23, 65, 53, 87]);
    else if (index == 2) updateChartData([45, 76, 87, 34, 65, 34, 60]);
  };

  const handleTimeChange = (index) => {
    setSelectedTime(index);
    if (index == 0) updateChartData([65, 59, 65, 45, 56, 55, 80]);
    else if (index == 1) updateChartData([45, 76, 87, 34, 65, 34, 60]);
    else if (index == 2) updateChartData([34, 87, 64, 23, 65, 53, 87]);
  };
  return (
    <div className="dark:bg-[#181B33] bg-[#FFFFFF] h-screen-minus-80 w-full ">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-2/3  pl-2 sm:pl-6 lg:pl-8 pt-6">
            <div className="w-full bg-white px-6 pb-3 dark:bg-[#191B32]  rounded-lg border border-[#E3E3E8] dark:border-[#E3E3E833] shadow-md">
              <div className="flex justify-between mt-7 mb-12">
                <h2 className=" dark:text-[#FFFFFF] text-lg text-[#131316]">
                  Portfolio Stats
                </h2>
                <div className="flex">
                  <CryptoSelectFull
                    num={selectedCrypto}
                    onChange={handleCryptoChange}
                  />
                  <SelectTime num={selectedTime} onChange={handleTimeChange} />
                </div>
              </div>
              <LineChart data={chartData} />
            </div>
            <div className="w-full bg-white px-6 dark:bg-[#191B32]  border-y-2 my-6 border-[#E3E3E8] dark:border-[#E3E3E833]">
              <div className="flex justify-between mt-6 mb-2">
                <h2 className=" dark:text-[#FFFFFF] text-lg text-[#131316]">
                  My Portfolio
                </h2>
                <div className="flex">
                  <p className="text-xs text-[#7F66FF]">See all</p>
                </div>
              </div>
              <Portfolio
                imgbig={"./Crypto.svg"}
                name={"Ethereum"}
                nameSpan={"ETH"}
                prosent={"56%"}
                status={"up"}
                prosent1={"0.15%"}
                endTitle={"0.124567 ETH"}
                endInfo={"$1,467"}
              />
            </div>
            <div className="w-full bg-white px-6 dark:bg-[#191B32]  border-b-2 my-6 border-[#E3E3E8] dark:border-[#E3E3E833]">
              <Portfolio
                imgbig={"./Crypto(1).svg"}
                name={"XRP"}
                nameSpan={"XRP"}
                prosent={"34%"}
                status={"down"}
                prosent1={"0.29%"}
                endTitle={"0.5657 XRP"}
                endInfo={"$1,060"}
              />
            </div>
          </div>
          <div className="w-1/3 lg:ml-8 pt-6 border-l-2 border-[#E3E3E8] dark:border-transparent bg-white dark:bg-[#1E2142] flex flex-col">
            <h2 className=" dark:text-[#FFFFFF] text-lg text-[#131316] ml-12 mt-4">
              Wallet
            </h2>
            <div className="flex flex-col items-center justify-center border-b-2 my-6 border-[#E3E3E8] dark:border-[#E3E3E833]">
              <div className="flex items-center mt-4">
                <img src="./Coin.svg" alt="coin" className="dark:hidden" />
                <img
                  src="./Coin1.svg"
                  alt="coin"
                  className="dark:block hidden"
                />
                <p className="ml-2 text-[#ffffff]">USD</p>
              </div>
              <p className="dark:text-[#93989A] mt-[21px] mb-[9px]">
                Your Balance
              </p>
              <p className="dark:text-[#FFFFFF] text-2xl font-semibold">
                $185,424.52
              </p>
              <img src="./line.svg" alt="line" className="mt-8 mb-10" />
              <div className="flex justify-aroud px-11 mb-12 w-full gap-6">
                <Button text={"Pay"} />
                <Button text={"Request"} />
              </div>
            </div>
            <div className="px-14">
              <div className="flex justify-between my-5">
                <h2 className=" dark:text-[#FFFFFF] text-lg text-[#131316]">
                  Recent Activity
                </h2>
                <div className="flex">
                  <p className="text-xs text-[#7F66FF]">See all</p>
                </div>
              </div>
              <div className="w-full  border-b-2 my-6 border-[#E3E3E8] dark:border-[#E3E3E833]">
                <Recently
                  imgbig={"./person1.png"}
                  name={"Ahmed #4390"}
                  prosent={"From Ishfaque I."}
                  endTitle={"3.25 ETH"}
                />
              </div>
              <div className="w-full  border-b-2 my-6 border-[#E3E3E8] dark:border-[#E3E3E833]">
                <Recently
                  imgbig={"./person2.png"}
                  name={"Vishal #3486"}
                  prosent={"From Ninja Storm"}
                  endTitle={"5.12 ETH"}
                />
              </div>
              <div className="w-full  border-b-2 my-6 border-[#E3E3E8] dark:border-[#E3E3E833]">
                <Recently
                  imgbig={"./person3.png"}
                  name={"Usman #3486"}
                  prosent={"From Usman"}
                  endTitle={"5.12 ETH"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
