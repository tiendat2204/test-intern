import { IoCheckmarkCircle } from "react-icons/io5";
import Msg from "../../../ui/Msg";

const MsgCustomAreaPreview = () => {
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
          <ul className="list-none p-2 ">
            <li className="w-full flex items-center gap-2 mt-3">
              <label htmlFor="" className="text-gray-500 w-16">
                姓名
              </label>
              <p>张三</p>
            </li>
            <li className="w-full flex items-center gap-2 mt-3">
              <label htmlFor="" className="text-gray-500 w-16">
                姓名
              </label>
              <p className="text-base text-black font-light">zhangsan</p>
            </li>
          </ul>
        </div>
      </Msg>
    </div>
  );
};

export default MsgCustomAreaPreview;
