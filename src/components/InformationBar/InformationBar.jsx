import { IoIosInformationCircleOutline } from "react-icons/io";

const InformationBar = () => {
  return (
    <div className="bg-white animate-slideIn h-screen">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">InformationBar</span>
      </div>
      <div className="w-full  mx-auto flex flex-col gap-5 px-2 pb-10 my-3">
        <InfoBar type="warn" strength="strong" message="信息提示 warn strong" />
        <InfoBar type="warn" strength="weak" message="信息提示 warn weak" />
        <InfoBar type="warn" strength="no-color" message="信息提示 warn no color" />
        <InfoBar type="tips" strength="strong" message="信息提示 tips strong" />
        <InfoBar type="tips" strength="weak" message="信息提示 tips weak" />
      </div>
    </div>
  );
};

const InfoBar = ({ type, strength, message }) => {
  const getBackgroundColor = () => {
    if (type === 'warn' && strength === 'strong') return 'bg-red-500';
    if (type === 'warn' && strength === 'weak') return 'bg-red-100';
    if (type === 'warn' && strength === 'no-color') return 'bg-gray-400';
    if (type === 'tips' && strength === 'strong') return 'bg-orange-400';
    if (type === 'tips' && strength === 'weak') return 'bg-orange-100';
    return 'bg-gray-200';
  };

  const getTextColor = () => {
    if (strength === 'strong' || strength === 'no-color') return 'text-white';
    return 'text-gray-700';
  };

  return (
    <div className={`flex items-center justify-between p-3 rounded-md ${getBackgroundColor()}`}>
      <div className="flex items-center">
        <span className={`mr-2 ${getTextColor()}`}><IoIosInformationCircleOutline className="text-white text-3xl" /></span>
        <span className={getTextColor()}>{message}</span>
      </div>
      <button className={`${getTextColor()} focus:outline-none`}>
        详情 ×
      </button>
    </div>
  );
};

export default InformationBar;