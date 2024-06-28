import Button from "./Button";

const ReceivePay = ({ onClose, text }) => {
  return (
    <div className="w-full h-full bg-white px-6 pb-3 dark:bg-[#191B32] rounded-lg border border-[#E3E3E8] dark:border-[#E3E3E833] shadow-md flex flex-col">
      <div className="flex justify-between  mb-16 mt-4">
        <h2 className=" dark:text-[#FFFFFF] text-lg text-[#131316] ">{text}</h2>
        <button onClick={onClose} className="text-xl dark:text-[#9C9CAB]">
          x
        </button>
      </div>
      <label htmlFor="Email" className=" w-full mb-6">
        <p className="dark:text-white mb-2">Recipient email address</p>
        <input
          id="Email"
          type="email"
          className="w-full pr-4 pl-9 py-3 text-sm dark:text-white border border-gray-300 rounded-md outline-none dark:bg-[#272A4E] border-none bg-[#F2F2F2]"
          placeholder="ahmed@gmail.com"
        />
      </label>
      <label htmlFor="text" className=" w-full mb-6">
        <p className="dark:text-white mb-2">Amount</p>
        <input
          id="text"
          type="text"
          className="w-full pr-4 pl-9 py-3 text-sm dark:text-white border border-gray-300 rounded-md outline-none dark:bg-[#272A4E] border-none text-center bg-[#F2F2F2]"
          placeholder="XXXX XXXX XXXX XXXX"
        />
      </label>
      <label htmlFor="check" className="mb-8 flex justify-center gap-x-2">
        <input type="checkbox" id="check" className="bg-transparent" />
        <p className="dark:text-[#F2F2F2] text-sm ">
          I agree to all privacy & policy
        </p>
      </label>
      <div className="w-24 flex mx-auto">
        <Button text={text} />
      </div>
    </div>
  );
};

export default ReceivePay;
