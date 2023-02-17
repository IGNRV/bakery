import React from 'react';
import styles from "./InputText.module.scss";

interface IInputText {
    label: string;
    width: string;
}

const InputText = ({ label, width }: IInputText) => {
  return (
    <div className={styles.inputText} style={{ width }}>
        <label>{label}</label>
        <input type="text" />
    </div>
  );
};

export default InputText;