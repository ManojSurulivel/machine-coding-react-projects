import React, { useState, useEffect, useRef } from "react";
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const [isFetching, setIsFetching] = useState(false);
  const containerRef = useRef(null);

  const fetchMoreData = () => {
    setIsFetching(true);
    setTimeout(() => {
      setItems((prevItems) =>
        prevItems.concat(Array.from({ length: 20 }, (_, i) => `Item ${prevItems.length + i + 1}`))
      );
      setIsFetching(false);
    }, 1500);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !isFetching) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isFetching]);

  return (
    <div className="app" ref={containerRef}>
      <h1>Infinite Scroll</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {isFetching && <div className="loading">Loading...</div>}
    </div>
  );
};

export default InfiniteScroll;
