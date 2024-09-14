import { Link } from "react-router-dom";
import Drawer from "../../ui/Drawer";
import { useState } from "react";
import DateScrollPicker from "../../ui/DateScrollPicker";
import Button from "../../ui/Button";

const PickerCop = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpen2, setIsDrawerOpen2] = useState(false);
  const [selectedDay, setSelectedDay] = useState(15);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2023);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleDrawerClose2 = () => {
    setIsDrawerOpen2(false);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => 2023 - i);

  return (
    <div className="bg-white animate-slideIn h-screen">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Picker</span>
      </div>
      <div className="w-full max-w-2xl mx-auto text-center flex flex-col gap-5 px-2 pb-10 my-3">
        <Link
          onClick={() => setIsDrawerOpen(true)}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Picker 1
        </Link>
        <Link
          onClick={() => setIsDrawerOpen2(true)}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Picker 2
        </Link>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
        <div className="bg-white">
          <DateScrollPicker initialDay={selectedDay} onDayChange={handleDayChange} data={numbers} />
          <div className="w-full fixed bottom-0 right-0 left-0 flex justify-center items-center mb-10">
            <Button className="w-auto bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300">
              Tiếp theo
            </Button>
          </div>
        </div>
      </Drawer>
      <Drawer isOpen={isDrawerOpen2} onClose={handleDrawerClose2}>
        <div className="bg-white flex justify-center items-center gap-10 w-full">
          <DateScrollPicker initialDay={selectedDay} onDayChange={handleDayChange} data={days} />
          <DateScrollPicker initialDay={selectedMonth} onDayChange={handleMonthChange} data={months} />
          <DateScrollPicker initialDay={selectedYear} onDayChange={handleYearChange} data={years} />
          <div className="w-full fixed bottom-0 right-0 left-0 flex justify-center items-center mb-10">
            <Button className="w-auto bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300">
              Tiếp theo 2
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default PickerCop;