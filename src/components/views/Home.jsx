import React from "react";
import "../../style/view/home.css";
import CardFeature from "../components/CardFeature";
import CardBanner from "../components/CardBanner";
import CardComments from "../components/CardComments";

const Home = () => {
  return (
    <div>
      <CardBanner />
      <CardComments />
      <CardFeature></CardFeature>
    </div>
  );
};

export default Home;
