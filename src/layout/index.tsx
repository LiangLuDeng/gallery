import React, { useState, useReducer } from 'react';
import { Button } from 'antd';
import HeaderContext from './HeaderContext';
import board from '../assets/images/board.svg';
import board1 from '../assets/images/board1.svg';
import board2 from '../assets/images/board2.svg';

import space from '../assets/images/space.svg';
import space1 from '../assets/images/space1.svg';
import spire from '../assets/images/spire.svg';
import spire1 from '../assets/images/spire1.svg';
import spire2 from '../assets/images/spire2.svg';
import rocket from '../assets/images/rocket.svg';

import styles from './index.less';

export default (props: any) => {
  const { children } = props;
  return (
    <div style={{ height: '100vh' }} className={styles.container}>
      <div className={styles.header}>
        <img src={board} alt="王一博" />
        <img src={space} alt="space" />
        <img src={space1} alt="space1" />
        <img src={spire} alt="spire" />
        <img src={spire1} alt="spire1" />
        <img src={spire2} alt="spire2" />
        <img src={rocket} alt="rocket" />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>@create by DLL</div>
    </div>
  );
};
