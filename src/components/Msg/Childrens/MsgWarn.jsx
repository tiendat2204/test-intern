import Button from "../../../ui/Button";
import Msg from "../../../ui/Msg";
import { PiWarningCircleFill } from "react-icons/pi";

const MsgWarn = () => {
  return (
    <div className="animate-slideIn w-full">
      <Msg
        title="操作成功"
        message="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现文字链接"
        subMessage="提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现文字链接"
        onNext={() => console.log("Next step")}
        Icon={<PiWarningCircleFill className="text-red-500 text-6xl" />}
        CustomButton={
          <Button
            className="w-auto bg-black bg-opacity-15 text-black py-2 rounded-md transition duration-300"
            onClick={() => console.log("Custom button clicked")}
          >
            自定义按钮
          </Button>
        }
      ></Msg>
    </div>
  );
};

export default MsgWarn;
