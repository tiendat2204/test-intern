import { useRef, useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(50);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    const sliderRect = slider.getBoundingClientRect();
    const startX = e.clientX;
    const startValue = value;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newValue = Math.min(
        Math.max(startValue + (deltaX / sliderRect.width) * 100, 1),
        100
      );
      setValue(newValue);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="w-full mx-auto py-8 px-2">
     

      <br />

      <div className="flex items-center space-x-4 mt-6 w-full">
        <div className="relative w-full" ref={sliderRef}>
          <div
            className="w-full h-[2px] bg-gray-300 rounded-full cursor-pointer"
            onMouseDown={handleMouseDown}
          >
            <div
              className="absolute top-0 left-0 h-[2px] bg-green-500 rounded-full"
              style={{ width: `${value}%` }}
            ></div>
            <div
              className="absolute top-[-10px] left-0 w-6 h-6 bg-white border border-gray-300 rounded-full cursor-pointer"
              style={{ left: `calc(${value}% - 5px)` }}
              onMouseDown={handleMouseDown}
            ></div>
          </div>
        </div>
        <div className="text-gray-700 text-lg font-light w-8">
          {Math.round(value)}
        </div>
      </div>
    </div>
  );
};

export default Slider;
