import Msg from "../../../ui/Msg";

const MsgText = () => {
  return (
    <div className="animate-slideIn w-full">
      <Msg onNext={() => console.log("Next step")}>
        <div className="flex w-full justify-center items-center flex-col gap-10">
          {" "}
          <h1 className="text-4xl ">操作成功</h1>
          <p>
            内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现文字链接
          </p>
        </div>
      </Msg>
    </div>
  );
};

export default MsgText;
