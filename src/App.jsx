import React from "react";
import Navbar from "./Components/Navbar";
import Breadcrumb from "./Components/Breadcrumb";
import Title from "./Components/Title";
import Menu from "./Components/Menu";

const App = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <Navbar />
      <Breadcrumb />
      <Title title={"Relations and Functions (Mathematics)"} />
      <Menu />
    </section>
  );
};

export default App;
