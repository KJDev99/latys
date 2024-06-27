import change from "@/assets/images/change.svg";
import change1 from "@/assets/images/change1.svg";
import Image from "next/image";
const Portfolio = ({
  imgbig,
  name,
  nameSpan,
  prosent,
  status,
  prosent1,
  endTitle,
  endInfo,
}) => {
  return (
    <div className="flex justify-between my-4">
      <div className="flex">
        <img src={imgbig} alt="crypto" />
        <div className="flex flex-col justify-center ml-3">
          <h4 className="dark:text-[#FFFFFF] text-sm text-[#2F2F37]">
            {name}{" "}
            <span className="dark:text-[#9C9CAB] text text-[#7F66FF]">
              {nameSpan}
            </span>
          </h4>
          <p className="text-xs text-[#7F66FF]">{prosent}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#717184] text-xs">change</p>
        <div className="flex  mt-[6px]">
          {status === "up" ? (
            <Image src={change} alt="change" />
          ) : (
            <Image src={change1} alt="change" />
          )}
          <p className=" ml-1 text-xs dark:text-white">{prosent1}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h4 className="text-sm dark:text-[#FFFFFF]">{endTitle}</h4>
        <p className="text-xs text-[#7F66FF]">{endInfo}</p>
      </div>
    </div>
  );
};

export default Portfolio;
