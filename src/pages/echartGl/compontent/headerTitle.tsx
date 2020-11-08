// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react';
import styles from './index.less';
const Model = (props: any) => {
  return <div className={styles.commonTitle}>{props?.title}</div>;
};

export default Model;
