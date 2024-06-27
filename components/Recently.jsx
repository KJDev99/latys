const Portfolio = ({ imgbig, name, prosent, endTitle }) => {
  return (
    <div className="flex justify-between my-4">
      <div className="flex">
        <img src={imgbig} alt="crypto" />
        <div className="flex flex-col justify-center ml-3">
          <h4 className="dark:text-[#FFFFFF] text-sm text-[#2F2F37]">
            {name}{" "}
          </h4>
          <p className="text-xs text-[#93989A]">{prosent}</p>
        </div>
      </div>

      <div className="flex items-end">
        <img src="./linever.svg" alt="" />
        <h4 className="text-sm dark:text-[#FFFFFF]">{endTitle}</h4>
      </div>
    </div>
  );
};

export default Portfolio;
