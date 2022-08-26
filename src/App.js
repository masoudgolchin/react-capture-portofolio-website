import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWorks from "./pages/OurWorks";
import ContactUs from "./pages/ContactUs";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />}></Route>
        <Route path="/works" exact element={<OurWorks />}></Route>
        <Route path="/contact" exact element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
