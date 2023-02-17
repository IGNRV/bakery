import React from 'react';
import styles from "./InputSelect.module.scss";

interface IInputSelect {
    label: string;
    width: string;
}

const InputSelect = ({ label, width }: IInputSelect) => {
  return (
    <div className={styles.inputSelect} style={{ width }}>
        <label>{label}</label>
          <div className={styles.bloque} >
            <span class="material-symbols-outlined" style={{ color: "#666666", width: "12px", position: "absolute", height: "7.4px", right: "14.5px", top: "13px" }}>
                expand_more
            </span>
          </div> 
            <select>
                <option selected></option>
                <option>...</option>
            </select>
    </div>
  );
};

export default InputSelect;