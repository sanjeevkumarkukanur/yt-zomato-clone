import React from "react";
import Filter from "../filters/Filters";
import { BiFilterAlt } from "react-icons/bi";
import { BsSortDown } from "react-icons/bs";
import "./Delivery.css";
import DeliveryCollection from "./deliveryCollections/DeliveryCollection";
import TopBrands from "./topBrands/TopBrands";
import ExploreSection from "./exploreSection/ExploreSection";
import { restaurants } from "../../data/Restaurants";

const deliveryFilters = [
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

const renstauantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection
        list={renstauantsList}
        collectionName="Delivery Restaurants in Bengalure"
      />
    </div>
  );
};

export default Delivery;
