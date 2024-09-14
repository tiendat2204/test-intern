import Step from "../../ui/Step";

const StepVertical = () => {
  return (
    <div className="bg-white h-full  animate-slideIn md:h-screen">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2 mb-5">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Step Vertical</span>
      </div>
      <div className="flex md:flex-row flex-col justify-start items-start md:max-w-[95rem] max-w-[20rem] mx-auto gap-16 pb-10">
        {[...Array(4)].map((_, index) => (
          <ul key={index} className="relative flex flex-col gap-y-2 w-full">
            {[...Array(4)].map((_, stepIndex) => (
              <div key={stepIndex} className="flex items-start relative">
                <Step
                  isLast={stepIndex === 3}
                  isVertical={true}
                  isActive={index === 0 || stepIndex < index}
                 
                />
                <div className="ml-4 absolute -top-2 left-5">
                  <span className="block text-sm font-medium text-gray-800">
                    标题
                  </span>
                  <p className="text-sm text-gray-600">描述内容详情</p>
                </div>
              </div>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default StepVertical;
