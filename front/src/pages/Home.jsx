import React from "react";
import Testimonals from "../components/Testimonals";
import { Helmet } from "react-helmet";
import Studio from "../components/Studio";
import Features from "../components/Features";
import Discover from "../components/Discover";
import Achievements from "../components/Achievements";
import LearnMore from "../components/LearnMore";
import PricingTable from "../components/PricingTable";
import Team from "../components/Team";
import Stay from "../components/Stay";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Studio/>
      <Features/>
      <Discover/>
      <Achievements/>
      <LearnMore/>
      <PricingTable/>
      <Team/>
      <Testimonals />
      <Stay/>
    </>
  );
};

export default Home;
