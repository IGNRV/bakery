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
                  marginTop: "8px", 
                  backgroundColor: isSidebarOpen ? "#000" : "transparent",
                  width: "35px",
                  height: "35px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#959595",
                  userSelect: "none"
                }}
                onClick={toggleSidebar}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                menu
              </span>
              <Row gap="10px">
              <span className="material-symbols-outlined hov" style={{ color: "#959595", userSelect: "none", padding: "5px 0 0 0", backgroundColor: "transparent"  }}>
                monitoring
              </span>
              <span className="material-symbols-outlined hov" style={{ color: "#959595", userSelect: "none", padding: "5px 0 0 0", backgroundColor: "transparent"  }}>
                qr_code_2
              </span>
              <span className="material-symbols-outlined hov" style={{ color: "#959595", userSelect: "none", padding: "5px 0 0 0", backgroundColor: "transparent"  }}>
                inbox
              </span>
              <span className="material-symbols-outlined hov" style={{ color: "#959595", userSelect: "none", padding: "5px 0 0 0", backgroundColor: "transparent"  }}>
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
