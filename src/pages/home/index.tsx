import React from 'react';
import Partition from '@/components/Partition';
import styles from './index.less';

import LeftContent from './leftContent';
import RightContent from './rightContent';

export default () => {
  return (
    <Partition leftContent={<LeftContent />} rightContent={<RightContent />} />
  );
};
