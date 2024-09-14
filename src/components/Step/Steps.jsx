import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <div className="w-full md:p-10 h-full max-w-[100rem] mx-auto p-8 pb-2 animate-slideIn md:mb-36 mb-32">
      <div className="w-full mb-20">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <p className="font-normal">Button của WeUi</p>
      </div>
      <div className="flex flex-col space-y-4">
        <Link
          to="/steps_vertical"
          className="text-green-800 hover:underline p-10 bg-green-200 group"
        >
          <span className="group-hover:translate-x-3 transition-transform duration-300 ease-in-out block w-full">
            Đi tới Steps Vertical
          </span>
        </Link>
        <Link
          to="/steps_horizonal"
          className="text-green-800 hover:underline p-10 bg-green-200 group"
        >
          <span className="group-hover:translate-x-3 transition-transform duration-300 ease-in-out block w-full">
            Đi tới Button Steps Horizonal
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Steps;
