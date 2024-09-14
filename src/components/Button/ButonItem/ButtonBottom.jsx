import { useState } from "react";
import Button from "../../../ui/Button";
import Checkbox from "../../../ui/Checkbox";

const ButtonBottom = () => {
  const [checked, setChecked] = useState(false);
 
  return (
    <div className="w-full p-4 flex justify-center space-x-4">
      <div className="flex items-center justify-between flex-col">
        <label
          htmlFor="weuiAgreeCheckbox"
          className="flex items-center space-x-2"
        > 
         <Checkbox id="weuiAgreeCheckbox" checked={checked} onChange={setChecked} />
          <span className="text-sm text-gray-600">
            Đọc và đồng ý với{" "}
            <a
              href="/example/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              Điều khoản liên quan
            </a>
          </span>
        </label>{" "}
        
        <div className="flex space-x-4 mt-5">
          <Button className="bg-green-500 text-white hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
            Đọc và đồng ý
          </Button>
          <Button className="bg-gray-300 text-gray-700">Hủy bỏ</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonBottom;
