const Step = ({ isLast, isActive, isVertical, icon }) => {
  return (
    <li
      className={`shrink basis-0 ${isVertical ? "flex-col" : "flex-1"} group`}
    >
      <div
        className={`min-w-7 min-h-7 ${
          isVertical ? "flex-col" : "w-full inline-flex"
        } items-center text-xs align-middle`}
      >
        {icon ? (
          <span className={`block w-full`}>{icon}</span>
        ) : (
          <span
            className={`size-2 flex ${
              isVertical ? "ml-1" : "ml-0"
            } justify-center items-center shrink-0 ${
              isActive ? "bg-green-500" : "bg-gray-200"
            } font-medium text-gray-800 rounded-full`}
          ></span>
        )}
        {!isLast && (
          <div
            className={` ${
              isVertical ? "h-[7rem] w-[1px] ms-2 my-2" : "w-full ms-2 h-[1px]"
            } flex-1 ${
              isActive ? "bg-green-500" : "bg-gray-200"
            } group-last:hidden`}
          ></div>
        )}
      </div>
    </li>
  );
};

export default Step;
