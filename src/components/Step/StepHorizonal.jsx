import Step from "../../ui/Step";

const StepHorizonal = () => {
  return (
    <div className="bg-white h-screen animate-slideIn">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Step Horizonal</span>
      </div>
      <div className="flex flex-col justify-start items-start max-w-[95rem] mx-auto gap-16 ">
        {[...Array(4)].map((_, index) => (
          <ul key={index} className="relative flex flex-row gap-x-2 w-full">
            {[...Array(4)].map((_, stepIndex) => (
              <Step
                key={stepIndex}
                isLast={stepIndex === 3}
                isActive={index === 0 || stepIndex < index}
              />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default StepHorizonal;