const FooterCop = () => {
  return (
    <div className="h-screen bg-background-primary ">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Flex</span>
      </div>
      <div className="flex flex-col items-center w-full justify-center">
        <div className="p-2 m-2">
          <p className="text-black/20 font-light text-sm">
            Copyright © 2008-2022 weui.io
          </p>
        </div>
        <div className="p-2 m-2 flex flex-col justify-center items-center gap-2">
          <span className="font-light text-sm text-[#576b95]">Coi</span>
          <p className="text-black/20 font-light text-sm">
            Copyright © 2008-2022 weui.io
          </p>
        </div>
        <div className="p-2 m-2 flex flex-col justify-center items-center gap-2">
          <div className="">
            <span className="font-light text-sm text-[#576b95] m-2  ">Coi</span>
            <span className="font-light text-xs text-slate-500">|</span>
            <span className="font-light text-sm text-[#576b95] m-2">
              CoiShop
            </span>
          </div>

          <p className="text-black/20 font-light text-sm">
            Copyright © 2008-2022 weui.io
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterCop;
