import React, { useState } from 'react';

const TabMenu = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0); // Initialize activeTab to 0

  return (
    <div className=''>
      <ul className='nav gap-3'>
        {tabs.map((tab, index) => (
          <li key={index} className={index === activeTab ? 'border-b-4 border-primary py-2 px-3 capitalize' : 'py-2 px-3 capitalize'}>
            <button className='capitalize' onClick={() => setActiveTab(index)}>{tab}</button>
          </li>
        ))}
      </ul>
      {children[activeTab]}
    </div>
  );
};

export default TabMenu;