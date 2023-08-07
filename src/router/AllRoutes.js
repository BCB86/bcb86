import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import RtlHomeLight from "../views/all-home-version/RtlHomeLight";
import NotFound from "../views/NotFound";
import Portfolio from "../components/portfolio/azhar/azhar";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLight />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Muhammed-Azhar" element={<Portfolio />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
