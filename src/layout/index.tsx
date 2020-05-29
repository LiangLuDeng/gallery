import React from 'react';
import styles from './index.less';

export default (props: any) => {
  const { children } = props;

  return (
    <div style={{ height: '100vh' }} className={styles.container}>
      <div className={styles.header}>this is header</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
