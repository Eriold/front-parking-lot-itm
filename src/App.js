import React from "react";
import NavBar from "./components/views/shared/Navbar";
import Footer from "./components/views/shared/Footer";
import MainLayout from "./components/layout/MainLayout";
import Content from "./components/views/Content";

// import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <MainLayout content={Content} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
