const Preview = () => {
  return (
    <div className="h-full bg-background-primary">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Preview</span>
      </div>
      <div className="space-y-6">
        <div className="w-full">
          <div className="">
            <div className=" p-4 text-base border-b">T图文组合列表</div>
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="w-full bg-white">
                <div className=" text-base border-b flex items-center justify-between px-4 p-6">
                  <span className=" text-black text-opacity-45">付款金额</span>
                  <span className="text-xl font-normal">¥2400.00</span>
                </div>
                <div className="flex items-center flex-col gap-3 p-6 px-4 border-b ">
                  <div className="flex items-center justify-between w-full">
                    <label
                      htmlFor=""
                      className="mr-2 w-auto text-black text-opacity-45 text-sm"
                    >
                      商品
                    </label>
                    <span className="font-normal text-sm">电动打蛋机</span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <label
                      htmlFor=""
                      className="mr-2 w-auto text-black text-opacity-45 text-sm"
                    >
                      标题标题
                    </label>
                    <span className="font-normal text-sm">名字名字名字</span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <label
                      htmlFor=""
                      className="mr-2 w-auto text-black text-opacity-45 text-sm"
                    >
                      标题标题
                    </label>
                    <span className="font-normal text-sm">
                      很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center p-4 border-b group relative">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#576b95]">查看更多</span>
                  </div>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
                </div>
              </div>
              <div className="w-full bg-white">
                <div className=" text-base border-b flex items-center justify-between px-4 p-6">
                  <span className=" text-black text-opacity-45">付款金额</span>
                  <span className="text-xl font-normal">¥2400.00</span>
                </div>
                <div className="flex items-center flex-col gap-3 p-6 px-4 border-b ">
                  <div className="flex items-center justify-between w-full">
                    <label
                      htmlFor=""
                      className="mr-2 w-auto text-black text-opacity-45 text-sm"
                    >
                      商品
                    </label>
                    <span className="font-normal text-sm">电动打蛋机</span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <label
                      htmlFor=""
                      className="mr-2 w-auto text-black text-opacity-45 text-sm"
                    >
                      标题标题
                    </label>
                    <span className="font-normal text-sm">名字名字名字</span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <label
                      htmlFor=""
                      className="mr-2 w-auto text-black text-opacity-45 text-sm"
                    >
                      标题标题
                    </label>
                    <span className="font-normal text-sm">
                      很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center p-4 border-b border-r group relative w-full">
                    <div className="flex items-center space-x-2">
                      <span className="text-black/85">辅助操作</span>
                    </div>
                    <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
                  </div>{" "}
                  <div className="flex justify-center items-center p-4 border-b group relative w-full">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#576b95]">查看更多</span>
                    </div>
                    <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
