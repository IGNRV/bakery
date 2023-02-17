import React from 'react';
import styles from "./Button.module.scss";

interface IButton {
  text: string;
  width: string;
}

const Button = ({ text,width }: IButton) => {
  return (
    <div className={styles.button} style={{ width }}>
        <button>{text}</button>
    </div>
  );
};

export default Button;