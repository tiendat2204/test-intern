import { IoIosArrowForward } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import Msg from "../../../ui/Msg";

const MsgCustomAreaCell = () => {
  return (
    <div className="animate-slideIn w-full">
      <Msg
        title="操作成功"
        message="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现文字链接"
        subMessage="提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现文字链接"
        onNext={() => console.log("Next step")}
        Icon={<IoCheckmarkCircle className="text-green-500 text-6xl" />}
      >
        <div className="w-full border-t my-2">
          <a
            className="group flex items-center justify-between rounded-md cursor-pointer w-full p-5 relative group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1px before:bg-gray-300 "
            href="#"
          >
            <span>cell standard</span>
            <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
            <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
          </a>
          <a
            className="group flex items-center justify-between rounded-md cursor-pointer w-full p-5 relative group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gray-300"
            href="#"
          >
            <span>cell standard</span>
            <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
            <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
          </a>
        </div>
      </Msg>
    </div>
  );
};

export default MsgCustomAreaCell;
