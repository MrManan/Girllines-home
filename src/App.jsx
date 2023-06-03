import React from "react";
import Breadcrumbs from "./components/Breadcrumbs";
import Slider from "./components/Slider";
import RelatedProduct from "./components/RelatedProduct";
import Contact from "./components/Contact";
import "./App.css";
function App() {
  return (
    <>
      <Breadcrumbs />
      <Slider />
      <RelatedProduct />
      <Contact />
    </>
  );
}

export default App;
