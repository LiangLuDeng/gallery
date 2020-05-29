import React from 'react';
import styles from './index.less';

import { Row, Col } from 'antd';

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles['left-content']}>left content</div>
      </div>
      <div className={styles.right}>right</div>
    </div>
  );
};
