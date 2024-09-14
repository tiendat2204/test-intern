import { useState, useEffect, useRef } from "react";

const DateScrollPicker = ({ initialDay = 15, onDayChange, data }) => {
  const [selectedDay, setSelectedDay] = useState(initialDay);
  const listRef = useRef(null);

  const handleScroll = () => {
    if (listRef.current) {
      const items = Array.from(listRef.current.children);
      const center = listRef.current.getBoundingClientRect().top + listRef.current.clientHeight / 2;

      let closestItem = null;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(itemCenter - center);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = index + 1;
        }
      });

      if (closestItem !== selectedDay) {
        setSelectedDay(closestItem);
        if (onDayChange) {
          onDayChange(closestItem);
        }
      }
    }
  };

  useEffect(() => {
    const currentListRef = listRef.current;
    if (currentListRef) {
      currentListRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentListRef) {
        currentListRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [selectedDay]);

  useEffect(() => {
    if (listRef.current && selectedDay > 0 && selectedDay <= data.length) {
      const selectedElement = listRef.current.children[selectedDay - 1];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    }
  }, [selectedDay, data]);

  return (
    <div className="flex justify-center items-center h-[300px] w-full">
      <div className="overflow-hidden w-full h-[100px] relative">
        <ul
          ref={listRef}
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
          className="scroll-snap-list h-full overflow-y-scroll flex flex-col items-center no-scrollbar w-full"
        >
          {data.map((item, index) => (
            <li
              key={index}
              className={`scroll-snap-item text-center py-4 transition-all duration-300 ${
                item === selectedDay ? "text-black z-10" : "text-gray-400 opacity-40"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[50px] bg-gray-100 opacity-50 pointer-events-none rounded-lg"></div>
    </div>
  );
};

export default DateScrollPicker;