import { useState } from "react";
import { CiCircleCheck, CiMenuKebab } from "react-icons/ci";
import {
  FaRegListAlt,
  FaRegFileAlt,
  FaRegImages,
  FaRegPaperPlane,
} from "react-icons/fa";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AccordionItem = ({ title, children, icon, isOpen, onClick }) => {
  return (
    <div className="border-b mb-3">
      <button
        className={`flex justify-between items-center w-full p-6 text-left bg-white border-b border-gray-200 `}
        onClick={onClick}
      >
        <span className="text-lg">{title}</span>
        <span>{icon}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "h-full opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="text-gray-500 bg-gray-50  h-full">
          {children.map((link, index) => (
            <Link to={link.url} key={index} className="">
              <div className="  p-6  group   transition-all duration-300 ease-in-out hover:translate-x-3 ">
                <span className=" group-hover:text-black  transition-transform duration-300 ease-in-out">
                  {link.text}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Button",
    links: [
      { url: "/button", text: " Button" },
      { url: "/form", text: " Form" },
      { url: "/list", text: " List" },
      { url: "/slider", text: "Slider" },
      { url: "/uploader", text: "Uploader" },
    ],
    icon:<IoMenu  />,
  },
  {
    id: 2,
    title: "Basic Ingredients",
    links: [
      { url: "/article", text: "Article" },
      { url: "/badge", text: "Badge" },
      { url: "/flex", text: "Flex" },
      { url: "/footer", text: "Footer" },
      { url: "/gallery", text: "Gallery" },
      { url: "/grid", text: "Grid" },
      { url: "/icons", text: "Icons" },
      { url: "/loading", text: "Loading" },
      { url: "/loadmore", text: "Loadmore" },
      { url: "/panel", text: "Panel" },
      { url: "/preview", text: "Preview" },
      { url: "/progress", text: "Progress" },
      { url: "/steps", text: "Steps" },
    ],
    icon: <FaRegFileAlt />,
  },
  {
    id: 3,
    title: "Phản hồi vận hành",
    links: [
      { url: "/actionsheet", text: "Actionsheet" },
      { url: "/dialog", text: "Dialog" },
      { url: "/half-screen-dialog", text: "Half-Screen Dialog" },
      { url: "/msg", text: "Msg" },
      { url: "/picker", text: "Picker" },
      { url: "/toast", text: "Toast" },
      { url: "/information-bar", text: "Information Bar" },
    ],
    icon: <CiCircleCheck />,
  },
  {
    id: 4,
    title: "Điều hướng",
    links: [
      { url: "/navbar", text: " Navbar" },
      { url: "/tabbar", text: " Tabbar" },
    ],
    icon: <CiMenuKebab />,
  },
  {
    id: 5,
    title: "Search Bar",
    links: [
      { url: "/searchbar", text: "Search Bar" },
    ],
    icon: <IoSearchOutline />,
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[100rem] w-full mx-auto mt-6 px-6 h-auto">
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          icon={item.icon}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        >
          {item.links}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
