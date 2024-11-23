import React from "react";
import PollWidget from "./components/PollWidget";
// import "./Poll.css";

function PollWidgetComponent() {
  const pollData = {
    question: "Which fruit do you like the most?",
    options: ["Apple", "Banana", "Orange", "Grapes"],
    pollId: "1",
  };

  return (
    <div className="App">
      <h1>Poll Application</h1>
      <PollWidget
        question={pollData.question}
        options={pollData.options}
        pollId={pollData.pollId}
      />
    </div>
  );
}

export default PollWidgetComponent;







// import React from "react";
// import PollWidget from "./components/PollWidget";

// function PollWidgetComponent() {
//   const pollQuestion = "What is your favorite programming language?";
//   const pollOptions = ["JavaScript", "Python", "Java", "C++"];

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Poll Widget</h1>
//       <PollWidget question={pollQuestion} options={pollOptions} pollId="poll-123" />
//     </div>
//   );
// }

// export default PollWidgetComponent;

