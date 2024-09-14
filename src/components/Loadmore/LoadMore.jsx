import { FaCircle } from "react-icons/fa";
import Loading from "../../ui/Loading";

const LoadMore = () => {
  return (
    <div className="min-h-full h-screen bg-white">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-900 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Tải thêm</span>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div  className="flex justify-center items-center gap-2 mb-6">
          <span
            aria-hidden="true"
            role="img"
            aria-label="Đang tải"
          >
            <Loading size={5} className="text-gray-500" />
          </span>
          <span className="text-gray-500 font-medium">Đang tải</span>
        </div>
        <div className="border-t w-11/12 mt-10 m-9 text-center font-light">
          <span className="relative -top-3 bg-white font-light text-gray-500 px-2">
            Không có dữ liệu
          </span>
        </div>
        <div className="border-t w-11/12 mt-10 m-9 text-center font-light">
          <span className="relative -top-12 bg-white text-gray-300 px-2 text-6xl">
          .
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadMore;
