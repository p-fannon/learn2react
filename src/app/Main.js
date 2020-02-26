import React from "react";
import { Route } from "react-router-dom";

//Import pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

import Nav from "./components/Nav";

export default function Main() {
  return (
    <div className="wrapper">
      <Nav />

      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
    </div>
  );
}
