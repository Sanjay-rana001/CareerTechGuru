import React, { useState } from "react";

const VTabMenu = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0); // Initialize activeTab to 0

  return (
    <div className="">
      <ul className="nav gap-3 bg-[#272343]">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={
              index === activeTab
                ? "bg-[#bae8e8] text-[#272343] py-2 px-3 text-[14px]"
                : "py-2 px-3 text-[14px] text-light"
            }
          >
            <button onClick={() => setActiveTab(index)}>{tab}</button>
          </li>
        ))}
      </ul>
      {children[activeTab]}
    </div>
  );
};

export default VTabMenu;
