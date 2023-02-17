import React from 'react';
import styles from "./InputHour.module.scss";

interface IInputHour {
    label: string;
    width: string;
}

const InputHour = ({ label, width }: IInputHour) => {
  return (
    <div className={styles.inputHour} style={{ width }}>
        <label>{label}</label>
          <div className={styles.bloque} >
            <span class="material-symbols-outlined" style={{ color: "#666666", width: "12px", position: "absolute", height: "7.4px", right: "14.5px", top: "13px" }}>
                calendar_month
            </span>
          </div> 
            <input type="hour" />
    </div>
  );
};

export default InputHour;