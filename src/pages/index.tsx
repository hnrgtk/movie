import React from "react";
import type { NextPage } from "next";

import { Header } from "../components/organisms/Header";
import { Banner } from "../components/organisms/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
};

export default Home;
