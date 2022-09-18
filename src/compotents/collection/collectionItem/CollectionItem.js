import React from "react";
import "./CollectionItem.css";
import { AiFillCaretRight } from "react-icons/ai";
const CollectionItem = ({ item }) => {
  return (
    <div>
      <div className="collection-item-cover">
        <img
          src={item.cover}
          className="collection-item-image"
          alt={item.title}
        />
        <div className="gradient-bg"></div>

        <div className="collection-item-title">{item.title}</div>
        <div className="collection-card-subtitle absolute-center">
          <div>{item.places}</div>
          <AiFillCaretRight className="absolute-center" />
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
