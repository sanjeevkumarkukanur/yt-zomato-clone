import React from "react";
import "./DiningOut.css";
import Collection from "../collection/Collection";
import { BiFilterAlt } from "react-icons/bi";
import { BsSortDown } from "react-icons/bs";
import { diningOut } from "../../data/DiningOut";
import Filters from "../filters/Filters";
import ExploreSection from "../delivery/exploreSection/ExploreSection";

const collectionList = [
  {
    id: "1",
    title: "Newly Opened",
    cover:
      "https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708839.jpg",
    places: "15 places",
  },
  {
    id: "2",
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040546.png",
    places: "30 places",
  },
  {
    id: "3",
    title: "Best of Bengaluru",
    cover:
      "https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg",
    places: "97 places",
  },
  {
    id: "4",
    title: "Newly Opened",
    cover:
      "https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1647256377.jpg",
    places: "29 places",
  },
  {
    id: "5",
    title: "Best Pizza Places In Town",
    cover:
      "https://b.zmtcdn.com/data/collections/f6e7f7d903d6499e1420d755ddc0ab11_1647253868.jpg",
    places: "28 places",
  },
  {
    id: "6",
    title: "Brilliant Biryanis",
    cover:
      "https://b.zmtcdn.com/data/collections/121c28675e83cd77ae12f5904580f241_1647256967.jpg",
    places: "28 places",
  },
  {
    id: "7",
    title: "Darshini",
    cover:
      "https://b.zmtcdn.com/data/collections/3ec0a1d41a727287821715478cb6ee2b_1633438403.jpg",
    places: "28 places",
  },
  {
    id: "8",
    title: "Flavours of Punjab",
    cover:
      "https://b.zmtcdn.com/data/collections/81d955a89e9530661ed96b0373dcbe9f_1647258270.jpg",
    places: "29 places",
  },
];
const diningFilters = [
  {
    id: 1,
    icon: <BiFilterAlt className="absolute-center" />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pur Veg",
  },
  {
    id: 5,
    icon: <BsSortDown className="absolute-center" />,
    title: "Delivery Time",
  },
  {
    id: 6,

    title: "Greate Offers",
  },
];

const DiningList = diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection
        list={DiningList}
        collectionName="Best Dining Restaurants near you in Bengaluru"
      />
    </div>
  );
};

export default DiningOut;
