import { useState } from "react";

const Tabbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: "tab1", title: "WeChat", badge: 8 },
    { id: "tab2", title: "Sổ địa chỉ" },
    { id: "tab3", title: "Phát hiện" },
    { id: "tab4", title: "Tôi", dot: true },
  ];

  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto">
        <div className="p-4">{tabs[activeTab].title}</div>

        <div className="w-full fixed bottom-0 right-0 left-0 border-t border-gray-200">
          <div className="flex bg-white">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className="flex-1 py-3 px-1 text-center flex flex-col items-center justify-center"
              >
                <div className="relative">
                  <img 
                    src="https://weui.io/images/icon_tabbar.png" 
                    alt="" 
                    className={`w-7 h-7 object-cover ${activeTab === index ? "text-green-500" : "text-gray-500"}`}
                  />
                  {tab.badge && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {tab.badge}
                    </span>
                  )}
                  {tab.dot && (
                    <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
                  )}
                </div>
                <span
                  className={`text-xs mt-1 ${
                    activeTab === index ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabbar;