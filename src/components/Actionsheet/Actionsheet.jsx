import { useState } from "react";
import Button from "../../ui/Button";
import Drawer from "../../ui/Drawer";

const Actionsheet = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="bg-white h-screen animate-slideIn">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Action Sheet</span>
      </div>
      <div className="w-full  text-center ">
        <Button
          onClick={() => setIsDrawerOpen(true)}
          className={"bg-black bg-opacity-10 text-lg"}
        >
          Action Sheet
        </Button>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
        <div className="bg-background-primary">
          <div className="w-full bg-white">
            <div className="p-5 text-sm font-light text-gray-400 border-b w-full text-center">
              这是一个标题，可以为一行或者两行。
            </div>

            <div className="flex items-center gap-3 w-full justify-center p-4 border-b group relative">
              <div>
                <div className="text-base">T图文组合列表</div>
              </div>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
            </div>
            <div className="flex items-center gap-3 w-full justify-center p-4 border-b group relative">
              <div className="text-center">
                <div className="text-base">T图文组合列表</div>
                <span className="text-center">副标题</span>
              </div>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
            </div>
            <div className="flex justify-between items-center p-4 group w-full relative">
              <div className="text-center w-full">
                <span className="text-red-500">查看更多</span>
              </div>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
            </div>
          </div>
          <div
            onClick={handleDrawerClose}
            className="flex bg-white mt-2 justify-between items-center p-4 group w-full relative"
          >
            <div className="text-center w-full">
              <span className="text-gray-500">取消</span>
            </div>
            <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Actionsheet;
