import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import AppHeader from '../components/AppHeader';
import AppMenu from '../components/AppMenu';
import styles from './IndexPage.css';

function IndexPage({ children }) {
  return (
    <div>
      <AppHeader />
      <div className={styles.pageWrap}>
        {
          children
        }
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
