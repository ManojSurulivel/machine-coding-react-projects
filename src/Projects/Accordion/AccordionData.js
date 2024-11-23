import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <h3>{item.title}</h3>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const AccordionData = () => {
  const accordionData = [
    {
      title: "Section 1",
      content:
        "This is the content of Section 1. It can contain any information you want.",
    },
    {
      title: "Section 2",
      content:
        "Here is the content for Section 2. Expand to reveal more details.",
    },
    {
      title: "Section 3",
      content: "Content for Section 3 goes here. It's collapsible!",
    },
  ];

  return (
    <div className="App">
      <h1>React Accordion</h1>
      <Accordion items={accordionData} />
    </div>
  );
};

export default AccordionData;



//simple code:
// import React, { useState } from "react";

// const Accordion = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   return (
//     <div>
//       {items.map((item, index) => (
//         <div key={index}>
//           <h3 onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
//             {item.title}
//           </h3>
//           {activeIndex === index && <p>{item.content}</p>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;

// // Usage
// <Accordion
//   items={[
//     { title: "Section 1", content: "This is Section 1 content" },
//     { title: "Section 2", content: "This is Section 2 content" },
//   ]}
// />;
