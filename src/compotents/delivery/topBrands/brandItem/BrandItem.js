import React from "react";
import "./BrandItem.css";
const BrandItem = ({ item }) => {
  return (
    <div>
      <div className="brand-item-cover">
        <img src={item.cover} className="brand-item-image" alt={item.title} />
      </div>
      <div className="brand-item-title">{item.title}</div>
    </div>
  );
};

export default BrandItem;
