import React, { ReactNode, FC } from 'react';
import styles from './index.less';

export interface PartitionProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

const Partition: FC<PartitionProps> = props => {
  const { leftContent, rightContent } = props;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles['left-content']}>{leftContent}</div>
      </div>
      <div className={styles.right}>{rightContent}</div>
    </div>
  );
};

export default Partition;
