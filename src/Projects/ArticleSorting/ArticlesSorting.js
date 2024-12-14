// import React, { useState } from "react";
// import "h8k-components";
// import Articles from "./Articles";

// function ArticlesSorting({ articles }) {
//   const [sortedArticles, setSortedArticles] = useState([...articles]);

//   const handleMostUpvoted = () => {
//     const sorted = [...articles].sort((a, b) => b.upvotes - a.upvotes);
//     setSortedArticles(sorted);
//   };

//   const handleMostRecent = () => {
//     const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
//     setSortedArticles(sorted);
//   };

//   return (
//     <>
//       <h8k-navbar header="Sorting Articles"></h8k-navbar>
//       <div className="App">
//         <div className="layout-row align-items-center justify-content-center my-20 navigation">
//           <label className="form-hint mb-0 text-uppercase font-weight-light">
//             Sort By
//           </label>
//           <button
//             data-testid="most-upvoted-link"
//             className="small"
//             onClick={handleMostUpvoted}
//           >
//             Most Upvoted
//           </button>
//           <button
//             data-testid="most-recent-link"
//             className="small"
//             onClick={handleMostRecent}
//           >
//             Most Recent
//           </button>
//         </div>
//         <Articles articles={sortedArticles} />
//       </div>
//     </>
//   );
// }

// export default ArticlesSorting;


import React, { useState } from "react";
import "h8k-components";
import Articles from "./Articles";

function App({ articles }) {
  // Sort articles by upvotes initially
  const [sortedArticles, setSortedArticles] = useState(
    [...articles].sort((a, b) => b.upvotes - a.upvotes)
  );

  const handleMostUpvoted = () => {
    const sorted = [...articles].sort((a, b) => b.upvotes - a.upvotes);
    setSortedArticles(sorted);
  };

  const handleMostRecent = () => {
    const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedArticles(sorted);
  };

  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={sortedArticles} />
      </div>
    </>
  );
}

export default App;
