import React, { createContext } from "react";
import { Route } from "react-router-dom";

//Import pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

import Nav from "./components/Nav";
import useAboutVisit from "./hooks/useAboutVisit";
import useContactVisit from "./hooks/useContactVisit";
import useHomeVisit from "./hooks/useHomeVisit";
import usePortfolioVisit from "./hooks/usePortfolioVisit";

export const PageVisitContext = createContext(null);

export default function Main() {
  const [aboutVisit, setAboutVisit] = useAboutVisit(0);
  const [contactVisit, setContactVisit] = useContactVisit(0);
  const [homeVisit, setHomeVisit] = useHomeVisit(1);
  const [portfolioVisit, setPortfolioVisit] = usePortfolioVisit(0);

  return (
    <PageVisitContext.Provider
      value={{
        aboutVisit,
        setAboutVisit,
        contactVisit,
        setContactVisit,
        homeVisit,
        setHomeVisit,
        portfolioVisit,
        setPortfolioVisit
      }}
    >
      <div className="wrapper">
        <Nav />

        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </PageVisitContext.Provider>
  );
}
