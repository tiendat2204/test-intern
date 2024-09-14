import Msg from "../../../ui/Msg";
import { IoCheckmarkCircle } from "react-icons/io5";

const MsgCustomAreaTips = () => {
  return (
    <div className="animate-slideIn w-full">
      <Msg
        title="操作成功"
        message="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现文字链接"
        subMessage="提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现文字链接"
        onNext={() => console.log("Next step")}
        Icon={<IoCheckmarkCircle className="text-green-500 text-6xl" />}
      >
        <div className="w-full border-t ">
          <ul className="p-2 list-inside list-disc text-gray-500">
            <li className=" mt-3">列表提示项</li>
            <li className="mt-3">列表提示项</li>
            <li className="mt-3">列表提示项</li>
          </ul>
        </div>
      </Msg>
    </div>
  );
};

export default MsgCustomAreaTips;
