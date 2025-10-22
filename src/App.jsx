import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar2 } from "./components/Navbar2";
import { Footer12 } from "./components/Footer12";

import Home from "./pages/home";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import GetInvolved from "./pages/GetInvolved";
import BlogPosts from "./pages/BlogPosts";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <>
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/blog" element={<BlogPosts />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer12 />
    </>
  );
}
