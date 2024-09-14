import Loading from "../../ui/Loading";

const LoadingCop = () => {
  return (
    <div className="min-h-full ">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-900 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Loading</span>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Loading size={5} className="text-gray-400" />
        <Loading size={5} className="text-gray-400" />
        <Loading  size={5}/>
      </div>
    </div>
  );
};

export default LoadingCop;
