import { IoCheckmarkCircle } from "react-icons/io5";
import { AiFillInfoCircle } from "react-icons/ai";
import { PiWarningCircleFill } from "react-icons/pi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const Icon = () => {
  return (
    <div className="min-h-full ">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-900 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Icon</span>
      </div>
      <div className="flex flex-col justify-start p-8 md:gap-5">
        <div className="flex  justify-start items-center gap-3">
          <IoCheckmarkCircle className="text-green-500 text-[5rem]" />
          <div className="text-start">
            <h3 className="md:text-lg text-base font-medium ">Thành công</h3>
            <p className="text-gray-500 text-sm" id="tip_1">
              Dùng để biểu thị thao tác đã hoàn thành thành công
            </p>
          </div>
        </div>
        <div className="flex  justify-start items-center gap-3">
          <AiFillInfoCircle className="text-blue-500 md:text-[5rem] text-[8rem]" />
          <div className="text-start">
            <h3 className="md:text-lg text-base font-medium">Thông tin</h3>
            <p className="text-gray-500 text-sm " id="tip_2">
              Dùng để biểu thị thông tin; cũng thường dùng để chặn các thao tác thiếu điều kiện
            </p>
          </div>
        </div>
       
        <div className="flex  justify-start items-center gap-3">
          <PiWarningCircleFill className="text-red-500 md:text-[5rem] text-[10rem]" />
          <div className="text-start">
            <h3 className="md:text-lg text-base font-medium">Cảnh báo nghiêm trọng</h3>
            <p className="text-gray-500 text-sm">
              Dùng để biểu thị tình huống có thể gây ra hậu quả nghiêm trọng không thể khắc phục sau khi thao tác
            </p>
          </div>
        </div>
        <div className="flex  justify-start items-center gap-3">
          <MdOutlineAccessTimeFilled className="text-blue-500 md:text-[5rem] text-[4rem]" />
          <div className="text-start">
            <h3 className="md:text-lg text-base font-medium">Chờ đợi</h3>
            <p className="text-gray-500 text-sm">Dùng để biểu thị trạng thái chờ đợi</p>
          </div>
        </div>
        <div className="flex  justify-start items-center gap-3">
          <PiWarningCircleFill className="text-yellow-300 md:text-[5rem] text-[9rem]"  />
          <div className="text-start">
            <h3 className="md:text-lg text-base font-medium">Cảnh báo thông thường</h3>
            <p className="text-gray-500 text-sm">
              Dùng để biểu thị tình huống có thể gây ra hậu quả nhất định sau khi thao tác
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icon;