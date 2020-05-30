import React, { ReactNode, FC } from 'react';
import styles from './index.less';

const Panel: FC = props => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.top} />
      <div className={styles.body}>{children}</div>
      <div className={styles.bottom} />
    </div>
  );
};

export default Panel;
