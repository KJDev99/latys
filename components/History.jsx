const History = ({ imgbig, name, prosent, endTitle, endCenter, date }) => {
  return (
    <div className="flex justify-between my-4 relative ">
      <div className="flex w-1/3">
        <img src={imgbig} alt="crypto" />
        <div className="flex flex-col justify-center ml-3">
          <h4 className="dark:text-[#FFFFFF] text-sm text-[#2F2F37]">{name}</h4>
          <p className="text-xs text-[#93989A]">{prosent}</p>
        </div>
      </div>

      <div className="flex items-center w-1/6">
        <h4 className="text-sm dark:text-[#04BC42]">Completed</h4>
      </div>
      <div className="flex items-center w-1/6">
        <img src="./linever.svg" alt="" />
        <h4 className="text-sm dark:text-[#FFFFFF]">{endTitle}</h4>
      </div>
      <div className="flex items-center w-1/6">
        <img src="./linever.svg" alt="" />
        <h4 className="text-sm dark:text-[#FFFFFF]">{endTitle}</h4>
      </div>
      <div className="flex items-center w-1/6">
        <h4 className="text-sm dark:text-[#FFFFFF]">{date}</h4>
      </div>
    </div>
  );
};

export default History;
