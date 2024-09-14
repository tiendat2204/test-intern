import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import Button from "../../ui/Button";

const Progress = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(50);
  const [progress3, setProgress3] = useState(100);
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    setLoading(true);
    let progressValue1 = 0;
    let progressValue2 = 0;
    let progressValue3 = 0;
    const interval = setInterval(() => {
      progressValue1 += 1;
      progressValue2 += 1;
      progressValue3 += 1;
      setProgress1(progressValue1);
      setProgress2(progressValue2);
      setProgress3(progressValue3);
      if (progressValue1 >= 100) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 15);
  };

  return (
    <div className="h-full bg-background-primary">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Progress</span>
      </div>
      <div className="flex flex-col items-center gap-10 w-full max-w-[100rem] mx-auto px-2">
        <div className="mt-5 w-full flex items-center justify-between gap-3 ">
          <div className="relative w-full h-[2px] bg-gray-300 rounded-full">
            <div
              className="absolute top-0 left-0 h-[2px] bg-green-500 rounded-full"
              style={{ width: `${progress1}%` }}
            ></div>
          </div>
          <CiCircleRemove className="text-3xl text-red-500" />
        </div>
        <div className="w-full flex items-center justify-between gap-3">
          <div className="relative w-full h-[2px] bg-gray-300 rounded-full">
            <div
              className="absolute top-0 left-0 h-[2px] bg-green-500 rounded-full"
              style={{ width: `${progress2}%` }}
            ></div>
          </div>
          <CiCircleRemove className="text-3xl text-red-500" />
        </div>
        <div className="w-full flex items-center justify-between gap-3">
          <div className="relative w-full h-[2px] bg-gray-300 rounded-full">
            <div
              className="absolute top-0 left-0 h-[2px] bg-green-500 rounded-full"
              style={{ width: `${progress3}%` }}
            ></div>
          </div>
          <CiCircleRemove className="text-3xl text-red-500" />
        </div>
      </div>
      <div className="w-full items-center flex justify-center mt-10">
        <Button
          loading={loading}
          className={
            "font-medium py-2 px-4 rounded-md bg-green-500 text-white flex items-center justify-center gap-2"
          }
          onClick={handleCheck}
        >
          Check
        </Button>
      </div>
    </div>
  );
};

export default Progress;
