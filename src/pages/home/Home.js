import React, { useState } from "react";
import Delivery from "../../compotents/delivery/Delivery";
import DiningOut from "../../compotents/diningOut/DiningOut";

import Footer from "../../compotents/footer/Footer";
import Header from "../../compotents/header/Header";
import TabOption from "../../compotents/tabOptions/TabOption";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getCurrentScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return (
          <div>
            <Delivery />
          </div>
        );
      case "Dining Out":
        return (
          <div>
            <DiningOut />
          </div>
        );
      // case "Nightlife":
      //   return <div>Nightlife</div>;
      default:
        return <div>Delivery</div>;
    }
  };
  return (
    <div className="home">
      <Header />
      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCurrentScreen(activeTab)}

      <Footer />
    </div>
  );
};

export default Home;
