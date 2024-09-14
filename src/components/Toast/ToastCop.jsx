import { Link } from "react-router-dom";
import Toast from "../../ui/Toast";
import { toast } from "../../hook/useToast";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
const ToastCop = () => {
  const showToastSuccess = () => {
    toast({
      message: "This is a success toast!",
      icon: <FaCheck className="text-6xl text-white p-3" />,
    });
  };
  const showToastError = () => {
    toast({
      message: "This is an error toast!",
      icon: <FaExclamationCircle className="text-6xl text-white p-3" />,
    });
  };
  const showToastInfo = () => {
    toast({
      message: "This is an info toast!",
      icon: <FaExclamationCircle className="text-6xl text-white p-3" />,
    });
  };

  const showToastLoading = () => {
    toast({
      message: "This is a loading toast!",
      icon: <VscLoading className="text-6xl text-white p-3 animate-spin" />,
    });
  };
  const showToast = () => {
    toast({
      message: "Text toast!",
    });
  };
  return (
    <div className="bg-white animate-slideIn h-full ">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Toast</span>
      </div>
      <div className="w-full max-w-2xl mx-auto text-center flex flex-col gap-5 px-2 pb-80 pt-12 my-3 ">
        <Link
          onClick={showToastSuccess}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Toast 1
        </Link>
        <Link
          onClick={showToastError}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Toast 2
        </Link>
        <Link
          onClick={showToastInfo}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Toast 3
        </Link>
        <Link
          onClick={showToastLoading}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Toast 4
        </Link>
        <Link
          onClick={showToast}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Toast 5
        </Link>
      </div>
      <Toast />
    </div>
  );
};

export default ToastCop;
