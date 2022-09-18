import React from "react";
import "./Collection.css";

import { AiFillCaretRight } from "react-icons/ai";
import Slider from "react-slick";
import NextArrow from "../carousel/NextArrow";
import PrevArrow from "../carousel/PrevArrow";
import CollectionItem from "./collectionItem/CollectionItem";

const Collection = ({ list }) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Colletion</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bengaluru, based on trends
          </div>
          <div className="collection-location absolute-center">
            <div>All collections in Bengaluru</div>
            <AiFillCaretRight className="absolute-center" />
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => {
            return <CollectionItem item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Collection;
