import { useState } from "react";
import { FaCheck,  } from "react-icons/fa";
import Button from "../../../ui/Button";

const FormRadio = () => {
  const [selectedOption, setSelectedOption] = useState("x12");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className="p-4 max-w-screen-2xl  mx-auto">
      <div className="w-full rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">CheckRadio</h2>
        </div>
        <div className="mb-6">
          <div className="space-y-2">
            <label className="group flex items-center justify-between space-x-3 cursor-pointer w-full p-5 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300">
              <span className="text-gray-700">cell standard</span>
              <input
                type="radio"
                className="hidden"
                name="radio1"
                id="x11"
                checked={selectedOption === "x11"}
                onChange={handleOptionChange}
              />
              {selectedOption === "x11" ? (
                <FaCheck className="text-green-500" />
              ) : (
                <span className=""></span>
              )}
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
            </label>
            <label className="group flex items-center justify-between space-x-3 cursor-pointer w-full p-5 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300">
              <span className="text-gray-700">cell standard</span>
              <input
                type="radio"
                className="hidden"
                name="radio1"
                id="x12"
                checked={selectedOption === "x12"}
                onChange={handleOptionChange}
              />
              {selectedOption === "x12" ? (
                <FaCheck className="text-green-500" />
              ) : (
                <span className=""></span>
              )}
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
            </label>
            <a href="#" className="block text-green-500 hover:text-green-600">
              Xem thêm
            </a>
          </div>
          <div className=" w-full flex items-center justify-center">
            {" "}
            <Button
              className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              Tiếp theo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRadio;
