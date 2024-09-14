import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "tab1",
      title: "Tùy chọn một",
      content: "Dolores facilis deleniti reiciendis ea beatae Quaerat soluta",
    },
    { id: "tab2", title: "Lựa chọn hai", content: "Nội dung cho lựa chọn hai" },
    { id: "tab3", title: "Lựa chọn ba", content: "Nội dung cho lựa chọn ba" },
  ];

  return (
    <div className=" min-h-screen">
      <div className="w-full mx-auto ">
        <div className=" ">
          <div className="flex border-b bg-white">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-4 px-4 text-center ${
                  activeTab === index
                    ? "text-black bg-background-primary"
                    : "text-gray-500"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="p-4">{tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
