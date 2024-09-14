import { IoIosArrowForward } from "react-icons/io";

const FormAccess = () => {
  return (
    <div className="p-4 max-w-screen-2xl ">
      <div className="w-full mx-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6 text-center">Access UI</h2>
          <div className="flex flex-col gap-6 w-full h-full py-4">
            <a
              className="group  flex mt-3 items-center justify-between  cursor-pointer w-full p-5 relative group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300"
              href="#"
            >
              <span>cell standard</span>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
              <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
            </a>
            <a
              className="group flex items-center  justify-between  cursor-pointer w-full p-5 relative group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300"
              href="#"
            >
              <span>cell standard</span>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
              <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAccess;
