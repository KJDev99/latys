"use client";
import { useEffect, useState } from "react";
import Recently from "@/components/Recently";
import Image from "next/image";
import cashelok from "@/assets/images/cashelok.svg";
import cashelok1 from "@/assets/images/cashelok1.svg";
import TradeItem from "@/components/TradeItem";
const Trade = () => {
  const [activeComponent, setActiveComponent] = useState("USD");
  const [myMoney, setMyMoney] = useState("$0.32533");
  const [btcMoney, setBtcMoney] = useState("$53,260.20");
  const [btcPrice, setBtcPrice] = useState("$361.32B");
  useEffect(() => {
    if (activeComponent == "USD") {
      setMyMoney("$0.12343");
      setBtcMoney("$53,260.20");
      setBtcPrice("$111.32B");
    } else if (activeComponent == "Ethereum") {
      setMyMoney("$0.43123");
      setBtcMoney("$45,260.20");
      setBtcPrice("$331.32B");
    } else if (activeComponent == "USDT") {
      setMyMoney("$0.76543");
      setBtcMoney("$34,260.20");
      setBtcPrice("$651.32B");
    } else if (activeComponent == "Dogecoin") {
      setMyMoney("$0.54321");
      setBtcMoney("$76,260.20");
      setBtcPrice("$961.32B");
    }
  }, [activeComponent]);
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
            <div className="w-full  border-b-2 my-6 border-[#E3E3E8] dark:border-[#E3E3E833] cursor-pointer">
              <Recently
                imgbig={"./Coin.svg"}
                name={"USDT"}
                prosent={"ITC"}
                activeComponent={activeComponent}
                setActiveComponent={() => setActiveComponent("USDT")}
              />
            </div>
            <div className="w-full  border-b-2 my-6 border-[#E3E3E8] dark:border-[#E3E3E833] cursor-pointer">
              <Recently
                imgbig={"./Crypto.svg"}
                name={"Dogecoin"}
                prosent={"DOGE"}
                activeComponent={activeComponent}
                setActiveComponent={() => setActiveComponent("Dogecoin")}
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
            <div className="w-full px-7 flex flex-col ">
              <div className="dark:bg-[#1F2243] bg-[#F5F5F5] border-2 dark:border-[#F3F3F333] border-[#C8C8D0] rounded-xl mb-10 flex justify-between py-3 px-4 items-center">
                <div className="flex h-full items-center">
                  <Image
                    className="h-6 w-auto hidden dark:block"
                    src={cashelok1}
                    alt="PropertyPulse"
                  />
                  <Image
                    className="h-6 w-auto dark:hidden block"
                    src={cashelok}
                    alt="PropertyPulse"
                  />
                  <h2 className="text dark:text-white ml-3 text-[#717184]">
                    Transactions History
                  </h2>
                </div>
                <p className="text dark:text-white text-2xl">{myMoney}</p>
              </div>
              <div className="dark:bg-[#282B4E] bg-white border-2 dark:border-[#F3F3F333] border-[#F3F3F3] rounded-xl mb-10 px-10 py-8">
                <div className="px-6 py-3 mb-4 rounded-md flex justify-between items-center dark:bg-[#1E2142] bg-[#F9F9FA]">
                  <p className="dark:text-[#7F66FF] font-medium text-sm w-2/5">
                    Currency
                  </p>
                  <div className="w-1/5 flex justify-center">
                    <p className="dark:text-[#7F66FF] font-medium text-sm w-1/5">
                      Balance
                    </p>
                  </div>
                  <div className="w-1/5 flex justify-center">
                    <p className="dark:text-[#7F66FF] font-medium text-sm w-1/5">
                      Price
                    </p>
                  </div>
                  <div className="w-1/5 flex justify-center">
                    <p className="dark:text-[#7F66FF] font-medium text-sm w-1/5">
                      Action
                    </p>
                  </div>
                </div>
                <div className="px-6 flex flex-col justify-between items-center dark:bg-[#191B32] py-3 rounded-lg">
                  <TradeItem
                    imgbig={"./Coin.svg"}
                    name={"Bitcoin"}
                    prosent={"BTC"}
                    balance={btcMoney}
                    price={btcPrice}
                  />
                  <TradeItem
                    imgbig={"./Crypto.svg"}
                    name={"Ethereum"}
                    prosent={"ETH"}
                    balance={"$1,643.80"}
                    price={"$158.77B"}
                  />
                  <TradeItem
                    imgbig={"./Coin.svg"}
                    name={"IoT Chain"}
                    prosent={"ITC"}
                    balance={"$0.5657"}
                    price={"$67.94B"}
                  />
                  <TradeItem
                    imgbig={"./Crypto.svg"}
                    name={"Dogecoin"}
                    prosent={"DOGE"}
                    balance={"$40,355.12"}
                    price={"$49.91B"}
                  />
                  <TradeItem
                    imgbig={"./Coin.svg"}
                    name={"Digibyte"}
                    prosent={"DGB"}
                    balance={"$40,355.12"}
                    price={"$44.34B"}
                  />
                  <TradeItem
                    imgbig={"./Coin.svg"}
                    name={"Achain"}
                    prosent={"ACN"}
                    balance={"$10,355.12"}
                    price={"$30.31B"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
