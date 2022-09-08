import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWorks from "./pages/OurWorks";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />}></Route>
          <Route path="/works" exact element={<OurWorks />}></Route>
          <Route path="/works/:id" element={<MovieDetails />}></Route>
          <Route path="/contact" exact element={<ContactUs />}></Route>
        </Routes>
      </AnimatePresence>
      <ScrollTop />
    </div>
  );
}

export default App;
