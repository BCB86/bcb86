
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
                  <Tab onClick={()=>navigate('/')}>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Anurag')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Anurag</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Jesvin-Jose')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Jesvin Jose</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Muhammed-Azhar')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Muhammed Azhar</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Muhammed-Afif')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Muhammed Afif</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Muhammed-Fasil')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Muhammed Fasil</span>
                  </Tab>
                  
                  <Tab onClick={()=>navigate('/Maheendran-KP')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Maheendran KP</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Nidhin-Simon')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Nidhin Simon</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Nimin-Salim')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Nimin Salim</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Rinas-Usman')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Rinas Usman</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Saeed-Rila')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Saeed Rila</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Shijith-PK')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Shijith PK</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Sidharth')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Sidharth</span>
                  </Tab>
                  <Tab onClick={()=>navigate('/Sreerag')} >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Sreerag</span>
                  </Tab>
                  <Tab onClick={()=>{navigate('/Contact')}}>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">Contact</span>
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