import Msg from "../../../ui/Msg";

const MsgTextPrimary = () => {
  return (
    <div className="animate-slideIn w-full">
         <Msg
      onNext={() => console.log("Next step")}
      subMessage={
        "内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
      }
    >
      <div className="flex w-full justify-center items-center flex-col gap-5">
        {" "}
        <h1 className="text-lg ">
          内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
        </h1>
        <p className="text-gray-500">
          内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
        </p>
      </div>
    </Msg>
    </div>
   
  );
};

export default MsgTextPrimary;
