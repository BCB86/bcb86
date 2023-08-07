import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/about/AboutMain";
import Portfolio from "../../components/portfolio/azhar/azhar";
import News from "../../components/News";
import ServiceMain from "../../components/service/ServiceMain";
import Contact from "../../components/Contact";
import CopyRight from "../../components/CopyRight";
import PageTitle from "../../components/PageTitle";
import LeftSidebar from "../../components/portfolio/LeftSidebar";

const HomeLight = () => {

  const navigate = useNavigate()

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkModeEnabled", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <PageTitle title="BCB-86" />
      {/* End page title for seo */}

      <button className="theme-switcher-label" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <>
            <FaSun />
          </>
        ) : (
          <>
            <FaMoon />
          </>
        )}
      </button>

      <Tabs>
        
        <LeftSidebar/>

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200">
                  <Home />
                </div>
              </TabPanel>
              {/* END HOME MENU TAB CONTENT */}

              <TabPanel>
                {/* <Portfolio /> */}
                {navigate('/test')}
              </TabPanel>
              {/* END PORTFOLIO MENU TAB CONTENT */}
            
              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <About />
                </div>
              </TabPanel>
              {/* END ABOUT MENU TAB CONTENT */}

              {/* <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <ServiceMain />
                </div>
              </TabPanel> */}
              {/* END ABOUT MENU TAB CONTENT */}

              {/* <TabPanel>
                <News />
              </TabPanel> */}
              {/* END NEWS MENU TAB CONTENT */}

              {/* <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <Contact />
                </div>
              </TabPanel> */}
              {/* END CONTACT MENU TAB CONTENT */}
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
