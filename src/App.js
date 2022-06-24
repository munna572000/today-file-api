import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import NavMenu1 from './NavMenu1'
import SinglePage from './SinglePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/singlePage/:slug" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
