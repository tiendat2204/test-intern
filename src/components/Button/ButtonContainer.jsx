import { Link } from "react-router-dom";

const ButtonContainer = () => {
  return (
    <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2 animate-slideIn md:mb-36 mb-32" >
      <div className="flex flex-col space-y-4">
        <Link to="/button_default" className="text-green-800 hover:underline p-10 bg-green-200 group">
          <span className="group-hover:translate-x-3 transition-transform duration-300 ease-in-out block w-full">
            Đi tới Button Default
          </span>
        </Link>
        <Link
          to="/button_bottom_fixed"
          className="text-green-800 hover:underline p-10 bg-green-200 group"
        >
          <span className="group-hover:translate-x-3 transition-transform duration-300 ease-in-out block w-full">
            Đi tới Button Bottom Fixed
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ButtonContainer;