import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { injectGlobal } from "styled-components";

import Main from "./App/Main";

//Global style
injectGlobal`
html,
body,
#app,
.wrapper {
  min-height: 100vh;
  height: 100%;
}

html {
  box-sizing: border-box;
  font-size: 100%;
}

* {
  &,
  &::after,
  &::before {
    box-sizing: inherit;
  }
}

body {
  padding: 0;
  margin: 0;
  font: 1rem / 1.414 arial, sans-serif;
}
`;

const wrapper = document.getElementById("app");

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, wrapper);
