const InfoText = ({ text, textAlign }) => {
  return (
    <div
      className={`${
        textAlign ? `text-${textAlign}` : "text-center"
      } text-[#808080] dark:text-[#CCCCCC] `}
    >
      {text}
    </div>
  );
};

export default InfoText;
