import React from 'react';
import styles from "./InputText.module.scss";

interface IInputText {
    text: string;
    label: string;
    width: string;
}

const InputText = ({ type = "text", label, width }: IInputText) => {
  return (
    <div className={styles.inputText} style={{ width }}>
        <label>{label}</label>
        <input type={type} />
    </div>
  );
};

export default InputText;