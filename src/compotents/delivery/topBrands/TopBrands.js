import React from "react";
import Slider from "react-slick";
import NextArrow from "../../carousel/NextArrow";
import PrevArrow from "../../carousel/PrevArrow";
import BrandItem from "./brandItem/BrandItem";
import "./TopBrands.css";

const topBrandList = [
  {
    id: "1",
    time: "30 min",
    title: "Domino's Pizza",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp",
  },
  {
    id: "2",
    time: "29 min",
    title: "Empire Restaurant",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
  },
  {
    id: "3",
    time: "27 min",
    title: "Meghana Foods",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
  },
  {
    id: "4",
    time: "25 min",
    title: "California Burrito",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/b9ffb4c181468da1f2b0eebd9ba70415_1643780686.png?output-format=webp",
  },
  {
    id: "5",
    time: "25 min",
    title: "McDonald's",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp",
  },
  {
    id: "6",
    time: "30 min",
    title: "KFC",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
  },
  {
    id: "7",
    time: "34 min",
    title: "EatFit",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/acc68e452e5e8ea16d56292838cd0056_1659429766.png?output-format=webp",
  },
  {
    id: "8",
    time: "32 min",
    title: "Leon Grill",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/526e7511008f07f7d630549c7c5809b1_1638685733.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandList.map((item) => {
          return <BrandItem item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
