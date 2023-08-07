
import { Tab,TabList } from "react-tabs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CopyRight from "../CopyRight";


import React from 'react'

function LeftSidebar() {

  const navigate = useNavigate()

  return (
    <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/img/logo/dark.png" alt="brand" />
                </Link>
              </div>
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Muhammed-Azhar')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Azhar</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>

                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}

              <CopyRight />
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
  )
}

export default LeftSidebar