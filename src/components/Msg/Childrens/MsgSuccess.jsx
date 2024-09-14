import { IoCheckmarkCircle } from "react-icons/io5";
import Msg from "../../../ui/Msg";

const MsgSuccess = () => {
  return (
<div className="animate-slideIn w-full">
<Msg
      title="操作成功"
      message="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现文字链接"
      subMessage="提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现文字链接"
      onNext={() => console.log("Next step")}
      Icon={<IoCheckmarkCircle className="text-green-500 text-6xl" />}
    >
    </Msg>
</div>
    
  );
};

export default MsgSuccess;
