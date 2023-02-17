import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { Col, Row } from "@/components/layout/Generic";
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsHovering(false);
  };

  return (
    <div>
      <nav className={styles.nav}>
        <div>
          <div 
            style={{ 
              width: "100%", 
              backgroundColor: "#2E3D4D", 
              height: "50px", 
              padding: "0 20px"
            }}>      
            <Row align="space-between">
              <span 
                className="material-symbols-outlined" 
                style={{ 
                  color: isSidebarOpen ? "#fff" : isHovering ? "#fff" : "#959595", 
                  marginTop: "13px",
                  backgroundColor: isSidebarOpen ? "#000" : isHovering ? "#000" : "transparent",
                  /* width: isSidebarOpen ? "35px" : isHovering ? "35px" : "initial",
                  height: isSidebarOpen ? "35px" : isHovering ? "35px" : "initial", */
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }} 
                onClick={toggleSidebar}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                menu
              </span>
              <Row gap="10px">
                <span className="material-symbols-outlined" style={{ color: "#959595", marginTop: "13px" }}>
                  monitoring
                </span>
                <span className="material-symbols-outlined" style={{ color: "#959595", marginTop: "13px" }}>
                  qr_code_2
                </span>
                <span className="material-symbols-outlined" style={{ color: "#959595", marginTop: "13px" }}>
                  inbox
                </span>
                <span className="material-symbols-outlined" style={{ color: "#959595", marginTop: "13px" }}>
                  person
                </span>
              </Row>
            </Row>
            {isSidebarOpen && (
              <Sidebar visible={isSidebarOpen} onClose={toggleSidebar} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
