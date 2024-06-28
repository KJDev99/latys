const TradeItem = ({ imgbig, name, prosent, balance, price }) => {
  return (
    <div className="flex justify-between items-center h-16 w-full">
      <div className="flex w-2/5">
        <img src={imgbig} alt="crypto" />
        <div className="flex flex-col justify-center ml-3">
          <h4 className="dark:text-[#FFFFFF] text-sm text-[#2F2F37]">{name}</h4>
          <p className="text-xs text-[#9C9CAB]">{prosent}</p>
        </div>
      </div>
      <div className="w-1/5 flex justify-center">
        <p className="dark:text-[#FFF] text-sm w-1/5">{balance}</p>
      </div>
      <div className="w-1/5 flex justify-center">
        <p className="dark:text-[#FFF] text-sm w-1/5">{price}</p>
      </div>
      <div className="w-1/5 flex justify-center">
        <button className="dark:text-[#FFF] dark:bg-[#1E2142] border rounded dark:border-[#E7E3FC33] h-10 w-20 text-sm">
          Trade
        </button>
      </div>
    </div>
  );
};

export default TradeItem;
