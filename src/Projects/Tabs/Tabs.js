import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "Home", content: "Welcome to the Home tab!" },
    { id: 1, title: "About", content: "This is the About tab." },
    { id: 2, title: "Contact", content: "Get in touch through the Contact tab." },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <p>{tabs[activeTab].content}</p>
      </div>

    </div>
  );
};

export default Tabs;
