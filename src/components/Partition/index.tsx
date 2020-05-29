import React from 'react';
import styles from './index.less';

export default (props: any) => {
  const { leftContent, rightContent } = props;
  debugger;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles['left-content']}>{leftContent}</div>
      </div>
      <div className={styles.right}>{rightContent}</div>
    </div>
  );
};
