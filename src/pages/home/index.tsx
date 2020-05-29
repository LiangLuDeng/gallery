import React from 'react';
import Partition from '@/components/Partition';
import styles from './index.less';

import LeftContent from './LeftContent';
import RightContent from './RightContent';

export default () => {
  return (
    <Partition leftContent={<LeftContent />} rightContent={<RightContent />} />
  );
};
