import React, { useState } from 'react';
import styles from './Subtitle.module.scss';
import { Col, Row } from "@/components/layout/Generic";


const Subtitle = ({children}:any) => {
  
  return (
    <div>
      <nav className={styles.nav}>
        <div>
            <h2 className={styles.subtitulo}>
                Pedido
            </h2>
        </div>
      </nav>
    </div>
  )
}

export default Subtitle;
