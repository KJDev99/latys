import Image from "next/image";
import arrow from "@/assets/images/arrow.png";

const Recently = ({
  imgbig,
  name,
  prosent,
  endTitle,
  activeComponent,
  setActiveComponent,
  rightStyle,
}) => {
  return (
    <div
      className="flex justify-between my-4 relative "
      onClick={setActiveComponent}
    >
      <div className="flex">
        <img src={imgbig} alt="crypto" />
        <div className="flex flex-col justify-center ml-3">
          <h4 className="dark:text-[#FFFFFF] text-sm text-[#2F2F37]">{name}</h4>
          <p className="text-xs text-[#93989A]">{prosent}</p>
        </div>
      </div>

      {endTitle && (
        <div className="flex items-center">
          <img src="./linever.svg" alt="" />
          <h4 className="text-sm dark:text-[#FFFFFF]">{endTitle}</h4>
        </div>
      )}
      {activeComponent === name && (
        <div
          className={`absolute top-3 !z-10 ${
            rightStyle ? `right-[0px]` : "right-[-40px]"
          }`}
        >
          <Image src={arrow} alt="arrow" />
        </div>
      )}
    </div>
  );
};

export default Recently;
