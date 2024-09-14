const Flex = () => {
  return (
    <div className="h-full ">
         <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Flex</span>
      </div>
      <div className="flex w-full ">
        <div className="bg-white flex-grow h-10 m-2 text-center font-light flex items-center justify-center">
          weui
        </div>
      </div>

      <div className="flex w-full ">
        <div className="bg-white flex-grow h-10 m-2 text-center font-light flex items-center justify-center">
          weui
        </div>
        <div className="bg-white flex-grow h-10 m-2 text-center font-light flex items-center justify-center">
          weui
        </div>
      </div>

      <div className="flex w-full ">
        <div className="bg-white flex-grow h-10 m-2 text-center font-light flex items-center justify-center">
          weui
        </div>
        <div className="bg-white flex-grow h-10 m-2 text-center font-light flex items-center justify-center">
          weui
        </div>
        <div className="bg-white flex-grow h-10 m-2 text-center font-light flex items-center justify-center">
          weui
        </div>
      </div>

      <div className="flex w-full ">
        <div className="bg-white flex-grow h-10 m-2 text-center font-light flex items-center justify-center">
          weui
        </div>
        <div className="bg-white flex-grow h-10 m-2 text-center font-light flex items-center justify-center">
          weui
        </div>
        <div className="bg-white flex-grow h-10 m-2 text-center font-light flex items-center justify-center">
          weui
        </div>
        <div className="bg-white flex-grow h-10 m-2 text-center font-light flex items-center justify-center">
          weui
        </div>
      </div>

      {/* Row 5: Two equal columns */}
      <div className="flex justify-center">
        <div className="flex-none bg-white  m-2">
          <div className="h-10  text-center font-light flex items-center justify-center p-2">weui</div>
        </div>
        <div className="flex-grow bg-white  m-2">
          <div className="h-10  text-center font-light flex items-center justify-center">weui</div>
        </div>
        <div className="flex-none bg-white  m-2">
          <div className="h-10  text-center font-light flex items-center justify-center p-2">weui</div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
