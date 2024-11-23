// import React from "react";
// import "./Poll.css";

// const PollResults = ({ options, votes }) => {
//   // Calculate total votes
//   const totalVotes = votes.reduce((acc, val) => acc + val, 0);

//   return (
//     <div className="poll-results">
//       <h3>Poll Results</h3>
//       <ul>
//         {options.map((option, index) => (
//           <li key={index}>
//             <span className="poll-option">{option}</span>
//             {totalVotes > 0 && (
//               <span className="poll-result">
//                 {Math.round((votes[index] / totalVotes) * 100)}% ({votes[index]} votes)
//               </span>
//             )}
//           </li>
//         ))}
//       </ul>
//       {totalVotes > 0 && (
//         <div className="total-votes">
//           <strong>Total Votes: {totalVotes}</strong>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PollResults;




// import React from "react";
// import "./Poll.css";

// const PollResults = ({ options, votes }) => {
//   // Calculate total votes
//   const totalVotes = votes.reduce((acc, val) => acc + val, 0);

//   return (
//     <div className="poll-results">
//       <h3>Poll Results</h3>
//       <ul>
//         {options.map((option, index) => (
//           <li key={index}>
//             <span className="poll-option">{option}</span>
//             {totalVotes > 0 && (
//               <span className="poll-result">
//                 {Math.round((votes[index] / totalVotes) * 100)}% ({votes[index]} votes)
//               </span>
//             )}
//           </li>
//         ))}
//       </ul>
//       {totalVotes > 0 && (
//         <div className="total-votes">
//           <strong>Total Votes: {totalVotes}</strong>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PollResults;





import React from "react";
import "./Poll.css";

const PollResults = ({ options, votes }) => {
  // Calculate total votes
  const totalVotes = votes.reduce((acc, val) => acc + val, 0);

  return (
    <div className="poll-results">
      <h3>Poll Results</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <span className="poll-option">{option}</span>
            {totalVotes > 0 && (
              <span className="poll-result">
                {Math.round((votes[index] / totalVotes) * 100)}% ({votes[index]} votes)
              </span>
            )}
          </li>
        ))}
      </ul>
      {totalVotes > 0 && (
        <div className="total-votes">
          <strong>Total Votes: {totalVotes}</strong>
        </div>
      )}
    </div>
  );
};

export default PollResults;
