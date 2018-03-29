/**
 * Created by 0291 on 2018/3/28.
 */
import React from 'react';
import styles from './SiteLogo.less';

const SiteLogo = ({ onLogoClick, title }) => (
  <a className={styles.siteLogo} onClick={onLogoClick}>
    <img src="img/site_logo.png" alt="kx" />
    <span>{title}</span>
  </a>
);

export default SiteLogo;
