import React, { useState, useReducer } from 'react';
import { Button } from 'antd';
import HeaderContext from './HeaderContext';
import board from '../assets/images/board.svg';
import board1 from '../assets/images/borad1.svg';
import board2 from '../assets/images/borad2.svg';

import space from '../assets/images/space.svg';
import space1 from '../assets/images/space1.svg';
import spire from '../assets/images/spire.svg';
import spire1 from '../assets/images/spire1.svg';
import spire2 from '../assets/images/spire2.svg';
import rocket from '../assets/images/rocket.svg';
import yibo from '../assets/logo/yibo.jpg';
import shose from '../assets/logo/shose.svg';
import styles from './index.less';

export default (props: any) => {
  const { children } = props;
  return (
    <div style={{ height: '100vh' }} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>盯！</div>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <img style={{ width: 50, height:50, margin: '0px 10px'  }} src={shose} alt="footer"/>
        @ DLL
        </div>
    </div>
  );
};
