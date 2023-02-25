import "./App.css";
import React from "react";
import SocialHeading from "./components/first/socailHeading";
import SocialHero from "./components/Herosection/Social_hero";
import Foot from "./components/foot/foot";
import Formcont from "./components/Junior/Formconatainer";
// import supabase from "./supaBase";
import Cards from "../src/components/Datacard/DatacardContainer"
import { Route, Routes } from "react-router-dom";

function App() {
  return <>
    <SocialHeading />
    <Routes>
      <Route path="/" element={<SocialHero />} />
      {/* <SocialHero /> */}
      {/* </Route> */}
      <Route exact path="/juniors" element={<Formcont />} />
      <Route exact path="/admin" element={<Cards />} />
      {/* <Formcont /> */}
      {/* <Cards /> */}
    </Routes>
    <Foot />
  </>

}

export default App;
