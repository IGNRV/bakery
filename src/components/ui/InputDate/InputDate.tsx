import React from 'react';
import styles from "./InputDate.module.scss";

interface IInputDate {
    label: string;
    width: string;
}

const InputDate = ({ label, width }: IInputDate) => {
  return (
    <div className={styles.inputDate} style={{ width }}>
        <label>{label}</label>
          <div className={styles.bloque} >
            <span class="material-symbols-outlined" style={{ color: "#666666", width: "12px", position: "absolute", height: "7.4px", right: "14.5px", top: "13px" }}>
                calendar_month
            </span>
          </div> 
            <input type="date" />
    </div>
  );
};

export default InputDate;