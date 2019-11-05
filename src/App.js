import React from "react";
import NavBar from "./components/views/shared/Navbar";
import Footer from "./components/views/shared/Footer";
import MainLayout from "./components/layout/MainLayout";
import Content from "./components/views/Content";
import Content2 from "./components/views/Content2";
import Separate from "./components/layout/Separate";

// import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <MainLayout content={Content} content2={Content2} separate={Separate} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
