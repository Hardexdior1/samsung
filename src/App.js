import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useState } from "react";
import About from "./Pages/About";
import Landing from "./Components/Landing";
import Header from "./Components/Header";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Team from "./Pages/Team";
import Career from "./Pages/Career";



function App() {

 
  return (
//     

    <div className="App">
   <h1>HELLLLLOOO</h1>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Landing />} /> 
          

          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Career" element={<Career />} />




        </Routes>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
