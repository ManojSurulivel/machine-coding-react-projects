import React, { useState } from "react";
import "./EcommerceFilter.css";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 800, rating: 4.5, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 50, rating: 4.0, inStock: true },
  { id: 3, name: "Shirt", category: "Clothing", price: 30, rating: 3.5, inStock: false },
  { id: 4, name: "Shoes", category: "Clothing", price: 100, rating: 4.8, inStock: true },
  { id: 5, name: "Coffee Maker", category: "Appliances", price: 120, rating: 4.2, inStock: true },
  { id: 6, name: "Blender", category: "Appliances", price: 90, rating: 4.0, inStock: false },
];

const EcommerceFilter = () => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    rating: 0,
    inStock: false,
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!filters.category || product.category === filters.category) &&
      (!filters.priceRange || 
        (filters.priceRange === "low" && product.price < 50) ||
        (filters.priceRange === "mid" && product.price >= 50 && product.price <= 100) ||
        (filters.priceRange === "high" && product.price > 100)) &&
      (filters.rating === 0 || product.rating >= filters.rating) &&
      (!filters.inStock || product.inStock)
    );
  });

  return (
    <div className="app">
      <h1>E-Commerce Filters</h1>

      <div className="filters">
        <h3>Filters</h3>
        <div>
          <label>Category:</label>
          <select onChange={(e) => handleFilterChange("category", e.target.value)}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Appliances">Appliances</option>
          </select>
        </div>
        <div>
          <label>Price Range:</label>
          <select onChange={(e) => handleFilterChange("priceRange", e.target.value)}>
            <option value="">All</option>
            <option value="low">Below $50</option>
            <option value="mid">$50 - $100</option>
            <option value="high">Above $100</option>
          </select>
        </div>
        <div>
          <label>Rating:</label>
          <select onChange={(e) => handleFilterChange("rating", parseFloat(e.target.value))}>
            <option value="0">All</option>
            <option value="3.5">3.5 and above</option>
            <option value="4.0">4.0 and above</option>
            <option value="4.5">4.5 and above</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleFilterChange("inStock", e.target.checked)}
            />
            In Stock Only
          </label>
        </div>
      </div>

      <div className="products">
        <h3>Products</h3>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <h4>{product.name}</h4>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating} ⭐</p>
              <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
            </div>
          ))
        ) : (
          <p>No products match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default EcommerceFilter;
