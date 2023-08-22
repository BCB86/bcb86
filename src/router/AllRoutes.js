import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import RtlHomeLight from "../views/all-home-version/RtlHomeLight";
import NotFound from "../views/NotFound";
import AZharPortfolio from "../components/portfolio/azhar/azhar";
import { Routes, Route } from "react-router-dom";
import AfifPortfolio from '../components/portfolio/afif/Afif.jsx'
import AnuragPortfolio from "../components/portfolio/anurag/Anurag";
import FasilPortfolio from "../components/portfolio/fasil/Fasil";
import JesvinPortfolio from "../components/portfolio/jesvin/Jesvin";
import MaheendranPortfolio from "../components/portfolio/maheendran/Maheendran";
import NidhinPortfolio from "../components/portfolio/nidhin/Nidhin";
import NiminPortfolio from "../components/portfolio/nimin/Nimin";
import RinasPortfolio from "../components/portfolio/rinas/Rinas";
import SaeedPortfolio from "../components/portfolio/saeed/Saeed";
import ShijithPortfolio from "../components/portfolio/saeed/Saeed";
import SidharthPortfolio from "../components/portfolio/sidhu/Sidharth";
import SreeragPortfolio from "../components/portfolio/sreerag/Sreerag";
import Contact from "../components/Contact";


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLight />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Muhammed-Azhar" element={<AZharPortfolio/>} />
        <Route path="/Muhammed-Afif" element={<AfifPortfolio/>} />
        <Route path="/Anurag" element={<AnuragPortfolio/>} />
        <Route path="/Muhammed-Fasil" element={<FasilPortfolio/>} />
        <Route path="/Jesvin-Jose" element={<JesvinPortfolio/>} />
        <Route path="/Maheendran-KP" element={<MaheendranPortfolio/>} />
        <Route path="/Nidhin-Simon" element={<NidhinPortfolio/>} />
        <Route path="/Nimin-Salim" element={<NiminPortfolio/>} />
        <Route path="/Rinas-Usman" element={<RinasPortfolio/>} />
        <Route path="/Saeed-Rila" element={<SaeedPortfolio/>} />
        <Route path="/Shijith-PK" element={<ShijithPortfolio/>} />
        <Route path="/Sidharth" element={<SidharthPortfolio/>} />
        <Route path="/Sreerag" element={<SreeragPortfolio/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
