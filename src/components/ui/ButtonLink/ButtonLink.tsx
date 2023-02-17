import React from 'react';

import styles from "./ButtonLink.module.scss";

interface IButtonLink {
  text: string;
  url: string;
}

const ButtonLink = ({text,url}: IButtonLink) => {
  return (
    <div className={styles.buttonLink}>
        <a href={url}>{text}</a>
    </div>
  )
}

export default ButtonLink;