import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/views/shared/Navbar";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Contact from "./components/views/Contact";
import Services from "./components/views/Services";
import Footer from "./components/views/shared/Footer";
import Login from "./components/views/Login";
import Register from "./components/views/Register";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
