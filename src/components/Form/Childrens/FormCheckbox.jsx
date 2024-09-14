import { useState } from "react";
import Button from "../../../ui/Button";
import Checkbox from "../../../ui/Checkbox";

const FormCheckbox = () => {
  const [isChecked, setIsChecked] = useState({
    checkbox1: false,
    checkbox2: false,
  });

  const handleChange = (checkbox) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [checkbox]: !prevState[checkbox],
    }));
  };

  return (
    <div className="p-4 max-w-screen-2xl ">
      <div className="w-full mx-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6 text-center">
            Phương thức hiển thị hộp kiểm
          </h2>
          <div className="space-y-4 w-full">
            <label
              onClick={() => handleChange("checkbox1")}
              htmlFor="weuiAgreeCheckbox1"
              className="flex items-center space-x-3 cursor-pointer w-full p-5 relative group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300"
            >
              <Checkbox checked={isChecked.checkbox1} />
              <span className="text-gray-700">Standard is dealt for u.</span>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none rounded-xl"></span>
            </label>
            <label
              onClick={() => handleChange("checkbox2")}
              htmlFor="weuiAgreeCheckbox2"
              className="flex items-center space-x-3 cursor-pointer w-full p-5 relative group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300"
            >
              <Checkbox checked={isChecked.checkbox2} />
              <span className="text-gray-700">Standard is dealt for u.</span>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none rounded-xl"></span>
            </label>
            <label
              htmlFor="weuiAgreeCheckbox3"
              className="flex items-center space-x-3 bg-opacity-50 bg-slate-100 rounded-xl cursor-pointer w-full p-5 relative group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300"
            >
              <Checkbox checked={isChecked.checkbox3} disabled />
              <span className="text-gray-700">Standard is dealt for u.</span>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none rounded-xl"></span>
            </label>

            <button className="text-blue-500 hover:underline">
              Thêm nhiều hơn
            </button>
          </div>
        </div>
        <div className="p-6 ">
          <Button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300">
            Tiếp theo
          </Button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Nhấn vào tiếp theo nghĩa là đồng ý với{" "}
            <a href="#" className="text-blue-500 hover:underline">
              điều khoản người dùng
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormCheckbox;
