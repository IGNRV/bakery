import React, { FC, MouseEvent } from 'react';
import styles from "./Sidebar.module.scss";

type SidebarProps = {
  visible: boolean;
  onClose: () => void;
};

const Sidebar: FC<SidebarProps> = ({ visible, onClose }) => {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
     className={styles.sidebar}
     style={{left:visible?"0":"-300px"}} onClick={handleBackdropClick}>
      <div className="sidebar-content">
          <div>
            <div className={styles.contenedor}>
                <h2 className={styles.title}>Programacion</h2>
            </div>
            <ul className={styles.ul}>
                <li className={styles.li}>Tortas estandar</li>
                <li className={styles.li}>Productos individuales</li>
                <a>
                <li className={styles.li}>Pedidos (especiales y web)</li>
                </a>
                <li className={styles.li}>Masas especiales</li>
                <li className={styles.li}>Cámara de refrigeración</li>
            </ul>
             <div className={styles.contenedor1}>
                <h2 className={styles.title1}>Flujo de trabajo</h2>
             </div>
             <ul className={styles.ul1}>
                <li className={styles.li}>Recepción de fábrica</li>
                <li className={styles.li}>Salida de fábrica</li>
                <li className={styles.li}>Revisión de camioneta</li>
                <li className={styles.li}>Despacho</li>
                <li className={styles.li}>Entrega al cliente</li>
            </ul>
            <div className={styles.contenedor2}>
                <h2 className={styles.title2}>Procesos</h2>
            </div>
            <ul className={styles.ul2}>
                <li className={styles.li}>Pedidos especiales</li>
                <li className={styles.li}>Registros de sobrantes</li>
                <li className={styles.li}>Revisión de Stock</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
