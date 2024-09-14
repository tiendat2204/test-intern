import Button from "./Button";

const Msg = ({
  title,
  message,
  children,
  onNext,
  buttonLabel = "Tiếp theo",
  subMessage,
  Icon,
  CustomButton,
}) => {
  return (
    <div className="p-4 max-w-screen-2xl h-screen bg-white">
      <div className="w-full mx-auto">
        <div className="p-6 w-full text-center flex justify-center items-center flex-col gap-5">
          {Icon && <div>{Icon}</div>}
          <h1 className="text-3xl mb-3">{title}</h1>
          <span>{message}</span>
        </div>
        <div className="w-full">{children}</div>
        <div className="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-5 pb-10">
          {CustomButton ? (
            CustomButton
          ) : (
            <Button
              className="w-auto bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
              onClick={onNext}
            >
              {buttonLabel}
            </Button>
          )}
          {subMessage && (
            <span className="md:text-sm p-2 text-[10px] text-black text-opacity-20">
              {subMessage}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Msg;
