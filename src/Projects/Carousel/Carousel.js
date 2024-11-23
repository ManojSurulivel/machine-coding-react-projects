import React from "react";
import "./Carousel.css"; // Custom CSS for styling

const carouselData = [
  {
    image: "https://via.placeholder.com/600x300/FF6347/FFFFFF?text=Pizza",
    title: "Delicious Pizza",
    description: "Savor the taste of authentic Italian pizza with fresh toppings.",
  },
  {
    image: "https://via.placeholder.com/600x300/F0E68C/FFFFFF?text=Burger",
    title: "Juicy Burger",
    description: "Enjoy our classic burgers with a side of crispy fries.",
  },
  {
    image: "https://via.placeholder.com/600x300/8FBC8F/FFFFFF?text=Salad",
    title: "Healthy Salad",
    description: "A fresh and vibrant salad for a healthy start to your meal.",
  },
  {
    image: "https://via.placeholder.com/600x300/FFA07A/FFFFFF?text=Ice+Cream",
    title: "Creamy Ice Cream",
    description: "Indulge in creamy, sweet ice cream in various flavors.",
  },
  {
    image: "https://via.placeholder.com/600x300/D2691E/FFFFFF?text=Pasta",
    title: "Classic Pasta",
    description: "Taste the richness of Italian pasta in a creamy sauce.",
  },
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      {carouselData.map((item, index) => (
        <div key={index} className="carousel-item">
          <img src={item.image} alt={item.title} className="carousel-image" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;






// import React, { useState } from "react";
// import "./Carousel.css";

// const Carousel = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex(
//       currentIndex === 0 ? items.length - 1 : currentIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex(
//       currentIndex === items.length - 1 ? 0 : currentIndex + 1
//     );
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel-wrapper">
//         {/* Left Arrow */}
//         <button className="arrow prev" onClick={handlePrev}>
//           &#10094;
//         </button>

//         {/* Carousel Content */}
//         <div className="carousel-content">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${
//                 index === currentIndex ? "active" : ""
//               }`}
//             >
//               <img src={item.image} alt={item.title} />
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button className="arrow next" onClick={handleNext}>
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// const CarouselData = () => {
//   const carouselData = [
//     {
//       image: "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1",
//       title: "Slide 1",
//       description: "This is the first slide.",
//     },
//     {
//       image: "https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2",
//       title: "Slide 2",
//       description: "This is the second slide.",
//     },
//     {
//       image: "https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Slide+3",
//       title: "Slide 3",
//       description: "This is the third slide.",
//     },
//   ];

//   return (
//     <div className="App">
//       <h1>React Carousel</h1>
//       <Carousel items={carouselData} />
//     </div>
//   );
// };

// export default CarouselData;
