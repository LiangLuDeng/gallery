import React from 'react';
import Partition from '@/components/Partition';
import { allPart } from './partInfo';
import styles from './index.less';

export default () => {
  console.log(allPart, 'allpart');
  return (
    // <Partition leftContent={<LeftContent />} rightContent={<RightContent />} />
    <div className={styles.container}>
      <div className={styles.menu}>
        {allPart.map(it => {
          return (
            <div className={styles.menu_item}>
              {it?.title}
              <span>
                {it?.desc}
                {it?.desc ? '...' : ''}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
