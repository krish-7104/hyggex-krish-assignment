import React from "react";
import Navbar from "./Components/Navbar";
import Breadcrumb from "./Components/Breadcrumb";
import Title from "./Components/Title";
import Menu from "./Components/Menu";
import MainCard from "./Components/MainCard";
import Footer from "./Components/Footer";
import FAQ from "./Components/FAQ";

const App = () => {
  return (
    <section className="max-w-6xl mx-auto w-[90%]">
      <Navbar />
      <Breadcrumb />
      <Title title={"Relations and Functions (Mathematics)"} />
      <Menu />
      <MainCard />
      <Footer />
      <FAQ />
    </section>
  );
};

export default App;
