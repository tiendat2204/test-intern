import { IoIosArrowForward } from "react-icons/io";

const FormSelect = () => {
  return (
    <div className="p-4 max-w-screen-2xl bg-white h-screen ">
      <div className="w-full mx-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6 text-center">Select UI</h2>
          <div className="space-y-4 w-full">
            <div className="">
              <div className="group flex items-center justify-between space-x-3 cursor-pointer w-full  relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300">
                <select className="p-5 w-full bg-transparent appearance-none outline-none">
                  <option selected value="1">
                    Chọn tài khoản
                  </option>
                  <option value="2">QQ</option>
                  <option value="3">Email</option>
                </select>
                <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
                <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
              </div>
            </div>
            <div className="group flex items-center justify-between space-x-3 cursor-pointer w-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300">
              <div className="flex items-center space-x-2">
                <select className="p-5 bg-transparent appearance-none outline-none">
                  <option value="1">+86</option>
                  <option value="2">+80</option>
                  <option value="3">+84</option>
                  <option value="4">+87</option>
                </select>
                <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
              </div>
              <label htmlFor="js_input1" className="flex-1">
                <input
                  id="js_input1"
                  className="w-full p-5 bg-white border-l focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none"
                  type="number"
                  pattern="[0-9]*"
                  placeholder="Vui lòng nhập số điện thoại"
                  defaultValue="12345678907"
                />
                <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-10 pointer-events-none"></span>
              </label>
            </div>
            <div className="group flex items-center justify-between space-x-3 cursor-pointer w-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300">
              <label htmlFor="js_input1" className="w-1/12">
                <input
                  id="js_input1"
                  className="w-full p-5 bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none"
                  readOnly
                  defaultValue="Noi Bai"
                />
                <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-10 pointer-events-none"></span>
              </label>
              <div className="flex items-center space-x-2 col-span-7 w-full">
                <select className="p-5 bg-transparent appearance-none outline-none w-full">
                  <option value="1">Ho Chi Minh</option>
                  <option value="2">Sai Gon</option>
                  <option value="3">Lam Dong</option>
                </select>
                <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
              </div>
            </div>
            <div className="group flex items-center justify-between space-x-3 cursor-pointer w-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300">
              <label htmlFor="js_input3" className="flex-1">
                <div className="flex items-center">
                  {" "}
                  <div className="flex items-center w-1/12">
                    <span className="text-gray-700 w-full ">Số Điện Thoại</span>
                  </div>
                  <div className="flex items-center w-full space-x-2">
                    <span className="text-gray-700">+86</span>
                    <input
                      id="js_input3"
                      className="w-full p-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none"
                      type="number"
                      pattern="[0-9]*"
                      placeholder="Vui lòng nhập số điện thoại"
                      defaultValue="12345678907"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSelect;
