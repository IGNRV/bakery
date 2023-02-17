import React from 'react';

import styles from "./Generic.module.scss";

const Row = ({ children, gap, width, align   }: any) => {
    return ( 
        <div className={styles.row} style={{ gap, width, justifyContent: align }}>
            {children}
        </div>
    );
  };

const Col = ({ children, gap }: any) => {
    return (
        <div className={styles.col} style={{ gap }}>
            {children}
        </div>
    );
  };

export { Row, Col };