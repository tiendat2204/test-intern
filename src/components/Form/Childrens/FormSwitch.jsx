import Button from "../../../ui/Button";

const FormSwitch = () => {
 
  return (
    <div className="p-4 max-w-screen-2xl mx-auto">
      <div className="w-full rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">FormSwitch</h2>
        </div>
        <div className="mb-6">
          <div className="space-y-2">
            {/* Switch 1 */}
            <label className="group flex items-center justify-between space-x-3 cursor-pointer w-full p-5 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300">
              <span className="text-gray-700">Cell standard</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="group peer ring-0 bg-gray-400 rounded-full outline-none duration-300 after:duration-300 w-14 h-7 shadow-md peer-checked:bg-green-500 peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-7 peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
              </label>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
            </label>

            {/* Switch 2 */}
            <label className="group flex items-center justify-between space-x-3 cursor-pointer w-full p-5 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300">
              <span className="text-gray-700">Cell standard</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="group peer ring-0 bg-gray-400 rounded-full outline-none duration-300 after:duration-300 w-14 h-7 shadow-md peer-checked:bg-green-500 peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-7 peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
              </label>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
            </label>

            {/* Switch 2 */}
            <label className="group flex items-center justify-between space-x-3 cursor-not-allowed w-full p-5 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300">
              <span className="text-gray-700">Cell standard</span>
              <label className="relative inline-flex items-center cursor-not-allowed">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  disabled
                  checked
                />
                <div className="group peer ring-0 bg-gray-400 rounded-full outline-none duration-300 after:duration-300 w-14 h-7 shadow-md peer-checked:bg-green-500 peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-7 peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
              </label>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
            </label>

            <a href="#" className="block text-green-500 hover:text-green-600">
              Xem thêm
            </a>
          </div>

          <div className="w-full flex items-center justify-center">
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

export default FormSwitch;
