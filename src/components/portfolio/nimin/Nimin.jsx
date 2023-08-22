import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

import LeftSidebar from "../LeftSidebar";
import About from '../azhar/about/AboutMain'
import ServiceMain from "../../service/ServiceMain";
import ShowCase from "./showCase";

const NiminPortfolio = () => {
    // for popup video for youtube
    const [isOpen, setOpen] = useState(false);

    // popup video for vimeo
    const [isOpen2, setOpen2] = useState(false);

    

    return (
        <>
            <Gallery>
                <LeftSidebar />
                <div className="rightpart">
                    <div className="rightpart_in">
                        <div className="tokyo_tm_section">



                            <div className="container">
                                <div className="tokyo_tm_portfolio">
                                    <div className="tokyo_tm_title">
                                        <div className="title_flex">
                                            <div className="left">
                                                <h3>Muhammed Azhar</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END TOKYO_TM_TITLE */}

                                    <div className="portfolio_filter">
                                        <Tabs>
                                            <TabList>
                                                <Tab>About Me</Tab>
                                                <Tab>Services</Tab>
                                                <Tab>Showcase</Tab>
                                            </TabList>
                                            {/* END TABLIST */}
                                            <div className="list_wrapper">
                                                <TabPanel>

                                                    <About />

                                                    {/* END PORTFOLIO LIST */}
                                                </TabPanel>
                                                {/* END ALL PORTFOLIO GALLERY */}

                                                <TabPanel>
                                                    
                                                    <ServiceMain/>

                                                </TabPanel>
                                                {/* END VIMEO VIDEO */}
                                            

                                                <TabPanel>

                                                    <ShowCase/>
                                                    
                                                </TabPanel>
                                                {/* END CREATIVE PORTFOLIO GALLERY */}
                                            </div>
                                            {/* END LIST WRAPPER */}
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Gallery>
            

            {/* START MODAL FOR PORTFOLIO DETAILS */}
            
        </>
    );
};

export default NiminPortfolio;
