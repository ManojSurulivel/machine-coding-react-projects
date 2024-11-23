import React, { useState, useEffect } from "react";
import PollResults from "./PollResults"; // Import PollResults Component
import "./Poll.css";

const PollWidget = ({ question, options, pollId }) => {
  const [votes, setVotes] = useState([]);
  const [userVoted, setUserVoted] = useState(false);

  // Initialize votes when the component mounts
  useEffect(() => {
    const storedVotes = localStorage.getItem(`poll-${pollId}`);
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes)); // Load votes from localStorage
      setUserVoted(true); // Set flag to true when user has already voted
    } else {
      // Initialize the votes as an array of zeros
      setVotes(new Array(options.length).fill(0));
    }
  }, [pollId, options.length]);

  // Handle vote submission
  const handleVote = (index) => {
    if (userVoted) {
      return alert("You have already voted!"); // Don't allow multiple votes
    }

    const newVotes = [...votes];
    newVotes[index] += 1;

    setVotes(newVotes); // Update local state with new votes
    setUserVoted(true); // Mark that user has voted

    // Save the updated votes in localStorage
    localStorage.setItem(`poll-${pollId}`, JSON.stringify(newVotes));
  };

  return (
    <div className="poll-widget">
      <h3>{question}</h3>
      {!userVoted ? (
        // If the user hasn't voted, show options to vote
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <button
                className="poll-option"
                onClick={() => handleVote(index)} // Call handleVote on click
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        // If the user has voted, show the results
        <PollResults options={options} votes={votes} />
      )}
    </div>
  );
};

export default PollWidget;


















































// // import React, { useState, useEffect } from "react";
// // import "./Poll.css";

// // const PollWidget = ({ question, options, pollId }) => {
// //   const [votes, setVotes] = useState([]);
// //   const [userVoted, setUserVoted] = useState(false);

// //   // Initialize votes when the component mounts
// //   useEffect(() => {
// //     const storedVotes = localStorage.getItem(`poll-${pollId}`);
// //     if (storedVotes) {
// //       setVotes(JSON.parse(storedVotes));
// //       setUserVoted(true);
// //     } else {
// //       setVotes(options.map(() => 0));
// //     }
// //   }, [options, pollId]);

// //   // Handle vote submission
// //   const handleVote = (index) => {
// //     if (userVoted) return alert("You have already voted!");

// //     const newVotes = [...votes];
// //     newVotes[index] += 1;

// //     setVotes(newVotes);
// //     setUserVoted(true);

// //     // Save votes in localStorage
// //     localStorage.setItem(`poll-${pollId}`, JSON.stringify(newVotes));
// //   };

// //   // Calculate total votes
// //   const totalVotes = votes.reduce((acc, val) => acc + val, 0);

// //   return (
// //     <div className="poll-widget">
// //       <h3>{question}</h3>
// //       <ul>
// //         {options.map((option, index) => (
// //           <li key={index}>
// //             <button
// //               className="poll-option"
// //               disabled={userVoted}
// //               onClick={() => handleVote(index)}
// //             >
// //               {option}
// //             </button>
// //             {totalVotes > 0 && (
// //               <span className="poll-result">
// //                 {Math.round((votes[index] / totalVotes) * 100)}% ({votes[index]} votes)
// //               </span>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //       {totalVotes > 0 && (
// //         <div className="total-votes">
// //           <strong>Total Votes: {totalVotes}</strong>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PollWidget;


// import React, { useState, useEffect } from "react";
// import PollResults from "./PollResults"; // Import PollResults Component
// import "./Poll.css";

// const PollWidget = ({ question, options, pollId }) => {
//   const [votes, setVotes] = useState([]);
//   const [userVoted, setUserVoted] = useState(false);

//   // Initialize votes when the component mounts
//   useEffect(() => {
//     const storedVotes = localStorage.getItem(`poll-${pollId}`);
//     if (storedVotes) {
//       setVotes(JSON.parse(storedVotes));
//       setUserVoted(true);
//     } else {
//       setVotes(options.map(() => 0));
//     }
//   }, [options, pollId]);

//   // Handle vote submission
//   const handleVote = (index) => {
//     if (userVoted) return alert("You have already voted!");

//     const newVotes = [...votes];
//     newVotes[index] += 1;

//     setVotes(newVotes);
//     setUserVoted(true);

//     // Save votes in localStorage
//     localStorage.setItem(`poll-${pollId}`, JSON.stringify(newVotes));
//   };

//   return (
//     <div className="poll-widget">
//       <h3>{question}</h3>
//       {!userVoted ? (
//         <ul>
//           {options.map((option, index) => (
//             <li key={index}>
//               <button
//                 className="poll-option"
//                 disabled={userVoted}
//                 onClick={() => handleVote(index)}
//               >
//                 {option}
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <PollResults options={options} votes={votes} /> // Show results if the user has voted
//       )}
//     </div>
//   );
// };

// export default PollWidget;



// import React, { useState, useEffect } from "react";
// import PollResults from "./PollResults"; // Import PollResults Component
// import "./Poll.css";

// const PollWidget = ({ question, options, pollId }) => {
//   const [votes, setVotes] = useState([]);
//   const [userVoted, setUserVoted] = useState(false);

//   // Initialize votes when the component mounts
//   useEffect(() => {
//     const storedVotes = localStorage.getItem(`poll-${pollId}`);
//     if (storedVotes) {
//       setVotes(JSON.parse(storedVotes)); // Load votes from localStorage
//       setUserVoted(true); // Set flag to true when user has already voted
//     } else {
//       // Initialize the votes as an array of zeros
//       setVotes(new Array(options.length).fill(0));
//     }
//   }, [pollId, options.length]);

//   // Handle vote submission
//   const handleVote = (index) => {
//     if (userVoted) {
//       return alert("You have already voted!"); // Don't allow multiple votes
//     }

//     const newVotes = [...votes];
//     newVotes[index] += 1;

//     setVotes(newVotes); // Update local state with new votes
//     setUserVoted(true); // Mark that user has voted

//     // Save the updated votes in localStorage
//     localStorage.setItem(`poll-${pollId}`, JSON.stringify(newVotes));
//   };

//   return (
//     <div className="poll-widget">
//       <h3>{question}</h3>
//       {!userVoted ? (
//         // If the user hasn't voted, show options to vote
//         <ul>
//           {options.map((option, index) => (
//             <li key={index}>
//               <button
//                 className="poll-option"
//                 onClick={() => handleVote(index)} // Call handleVote on click
//               >
//                 {option}
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         // If the user has voted, show the results
//         <PollResults options={options} votes={votes} />
//       )}
//     </div>
//   );
// };

// export default PollWidget;

